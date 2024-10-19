// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract ServicePayment {
    address public owner;

    event Payment(address indexed from, string serviceId, uint256 amount, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    function payForService(string memory serviceId) public payable {
        require(msg.value > 0, "Payment amount must be greater than zero");

        emit Payment(msg.sender, serviceId, msg.value, block.timestamp);
    }

    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
