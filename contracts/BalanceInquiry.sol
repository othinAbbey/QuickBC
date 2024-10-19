// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract BalanceInquiry {
    function getBalance(address _address) public view returns (uint256) {
        return _address.balance;
    }
}
