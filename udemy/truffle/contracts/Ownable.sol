pragma solidity ^0.6.0;

contract Ownable {
    address public _owner;
    
    modifier onlyOwner(){
        require(isOwner(), "Ownable: caller is not the owner");
        _;
    }
    
    constructor() public {
        _owner = msg.sender;
    }
    
    function isOwner() public view returns (bool){
        return (msg.sender == _owner);
    }
    
    
}
