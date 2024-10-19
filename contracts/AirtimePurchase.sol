// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract AirtimePurchase {
    address public owner;

    event AirtimePurchased(address indexed buyer, uint256 amount, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    function purchaseAirtime() public payable {
        require(msg.value > 0, "Payment amount must be greater than zero");

        emit AirtimePurchased(msg.sender, msg.value, block.timestamp);
    }

    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
