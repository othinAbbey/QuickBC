// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contract RegisterUser {
//     address public owner;

//     struct User {
//         address walletAddress;
//         string name;
//         string phoneNumber;
//         string pin;
//         bool isRegistered;
//     }

//     mapping(string => User) private users;

//     event UserRegistered(address indexed walletAddress, string name, string phoneNumber);

//     modifier onlyOwner() {
//         require(msg.sender == owner, "Only owner can perform this action");
//         _;
//     }

//     modifier validPhoneNumber(string memory _phoneNumber) {
//         require(bytes(_phoneNumber).length > 0, "Phone number cannot be empty");
//         _;
//     }

//     constructor() {
//         owner = msg.sender;
//     }

//     function register (string memory _name, string memory _phoneNumber, string memory _pin)
//         public
//         validPhoneNumber(_phoneNumber)
//     {
//         require(!users[_phoneNumber].isRegistered, "User already registered with this phone number");

//         users[_phoneNumber] = User({
//             walletAddress: msg.sender,
//             name: _name,
//             phoneNumber: _phoneNumber,
//             pin: _pin,
//             isRegistered: true
//         });

//         emit UserRegistered(msg.sender, _name, _phoneNumber);
//     }

//     function isUserRegistered(string memory _phoneNumber) public view returns (bool) {
//         return users[_phoneNumber].isRegistered;
//     }

//     function getUserInfo(string memory _phoneNumber)
//         public
//         view
//         validPhoneNumber(_phoneNumber)
//         returns (address walletAddress, string memory name, string memory pin)
//     {
//         require(users[_phoneNumber].isRegistered, "User not found");

//         User memory user = users[_phoneNumber];
//         return (user.walletAddress, user.name, user.pin);
//     }
// }
