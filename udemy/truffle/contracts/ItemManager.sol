pragma solidity ^0.6.0;

import './Ownable.sol';
import './Item.sol';

contract ItemManager is Ownable{
    
    enum SupplyChainSteps{Created, Paid, Delivered}
    
    struct S_Item{
        Item _item;
        ItemManager.SupplyChainSteps _step;
    }
    
    mapping(uint => S_Item) public items;
    uint index;
    
    event SupplyChainStep(uint _itemIndex, uint _step, address _address);
    
    function createItem(string memory _identifier, uint _priceInWei) public{
        Item item = new Item(this, _priceInWei, index, _identifier);
        items[index]._step = SupplyChainSteps.Created;
        items[index]._item = item;
        emit SupplyChainStep(index, uint(SupplyChainSteps.Created), address(item));
        index++;
    }
    
    function triggerPayment(uint _index) public payable {
        Item item = items[_index]._item;
        require(address(item) == msg.sender, "Only items are allowed to update themselves");
        require(item.priceInWei() == msg.value, "not fully paid");
        require(items[_index]._step == SupplyChainSteps.Created, "Cannot send off product, because is not created yet");
        items[_index]._step = SupplyChainSteps.Paid;
        emit SupplyChainStep(_index, uint(SupplyChainSteps.Paid), address(item));
    }
    
    function triggerDelivery(uint _index) public onlyOwner {
        require(items[_index]._step == SupplyChainSteps.Paid, "Cannot send off product, because is not paid yet");
        items[_index]._step = SupplyChainSteps.Delivered;
        emit SupplyChainStep(_index, uint(SupplyChainSteps.Delivered), address(items[_index]._item));
    }
}