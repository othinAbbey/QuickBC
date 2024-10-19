// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Transaction {
    address public owner;

    event Transfer(address indexed from, address indexed to, uint256 amount, uint256 timestamp);
    event Receipt(address indexed from, address indexed to, uint256 amount, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    function sendTokens(address payable _to) public payable {
        require(msg.value > 0, "Send some tokens");
        _to.transfer(msg.value);
        emit Transfer(msg.sender, _to, msg.value, block.timestamp);
    }

    function receiveTokens() public payable {
        require(msg.value > 0, "Send some tokens");
        emit Receipt(msg.sender, address(this), msg.value, block.timestamp);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
