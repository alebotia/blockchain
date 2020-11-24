pragma solidity ^0.6.0;

import './ItemManager.sol';

contract Item {
    uint public priceInWei;
    uint public paidWei;
    uint public index;
    string public identifier;
    
    ItemManager parentContract;
    
    constructor(ItemManager _parentContract, uint _priceInWei, uint _index, string memory _identifier) public {
        parentContract = _parentContract;
        priceInWei = _priceInWei;
        index = _index;
        identifier = _identifier;
    }
    
    receive() external payable{
        require(msg.value == priceInWei, "Only fully paids are allow");
        require(paidWei == 0, 'Item was alredy sold!!');
        paidWei += msg.value;
        
        (bool success, ) = address(parentContract).call.value(msg.value)(abi.encodeWithSignature("triggerPayment(uint256)", index));
        
        require(success, "delivery did not work!!");
        
        
    }
    
    fallback()external {}
}