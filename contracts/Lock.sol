// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// contract Lock {
//     uint public unlockTime;           // Time when funds can be withdrawn
//     address payable public owner;     // Owner of the lock contract

//     event Withdrawal(uint amount, uint when);  // Event to log withdrawals

//     constructor(uint _unlockTime) payable {
//         require(
//             block.timestamp < _unlockTime,
//             "Unlock time should be in the future"
//         );

//         unlockTime = _unlockTime;  // Set unlock time
//         owner = payable(msg.sender); // Set the contract owner
//     }

//     function withdraw() public {
//         require(block.timestamp >= unlockTime, "You can't withdraw yet"); // Ensure unlock time has passed
//         require(msg.sender == owner, "You aren't the owner"); // Ensure only the owner can withdraw

//         emit Withdrawal(address(this).balance, block.timestamp); // Emit withdrawal event

//         owner.transfer(address(this).balance); // Transfer the balance to the owner
//     }
// }
