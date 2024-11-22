// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contract UserManagement {
//     address public owner;

//     struct User {
//         address walletAddress;
//         string name;
//         string phoneNumber;
//         string pin;
//         bool isRegistered;
//         bool isVerified;
//     }

//     mapping(string => User) private users;

//     event UserRegistered(address indexed walletAddress, string name, string phoneNumber);
//     event UserVerified(string phoneNumber);

//     modifier onlyOwner() {
//         require(msg.sender == owner, "Only owner can perform this action");
//         _;
//     }

//     constructor() {
//         owner = msg.sender;
//     }

//     function registerUser(string memory _name, string memory _phoneNumber, string memory _pin) public {
//         require(!users[_phoneNumber].isRegistered, "User already registered");

//         users[_phoneNumber] = User({
//             walletAddress: msg.sender,
//             name: _name,
//             phoneNumber: _phoneNumber,
//             pin: _pin,
//             isRegistered: true,
//             isVerified: false
//         });

//         emit UserRegistered(msg.sender, _name, _phoneNumber);
//     }

//     function verifyUser(string memory _phoneNumber) public onlyOwner {
//         require(users[_phoneNumber].isRegistered, "User not found");
//         require(!users[_phoneNumber].isVerified, "User already verified");

//         users[_phoneNumber].isVerified = true;

//         emit UserVerified(_phoneNumber);
//     }

//     function isUserRegistered(string memory _phoneNumber) public view returns (bool) {
//         return users[_phoneNumber].isRegistered;
//     }

//     function getUserInfo(string memory _phoneNumber) public view returns (User memory) {
//         require(users[_phoneNumber].isRegistered, "User not found");
//         return users[_phoneNumber];
//     }

//     function getAccount(string memory phoneNumber) public view returns (string memory name, string memory pin) {
//         require(bytes(users[phoneNumber].phoneNumber).length != 0, "User not found.");

//         User memory user = users[phoneNumber];
//         return (user.name, user.pin);
//     }
// }


contract UserManagement {
    address public owner;

    struct User {
        address walletAddress;
        string name;
        string phoneNumber;
        string pin;
        bool isRegistered;
        bool isVerified;
    }

    mapping(string => User) private users;

    event UserRegistered(address indexed walletAddress, string name, string phoneNumber);
    event UserVerified(string phoneNumber);
    event Debug(string message, string phoneNumber);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerUser(string memory _name, string memory _phoneNumber, string memory _pin) public {
        require(!users[_phoneNumber].isRegistered, "User already registered");

        users[_phoneNumber] = User({
            walletAddress: msg.sender,
            name: _name,
            phoneNumber: _phoneNumber,
            pin: _pin,
            isRegistered: true,
            isVerified: false
        });

        emit UserRegistered(msg.sender, _name, _phoneNumber);
        emit Debug("User registered successfully", _phoneNumber);
    }

    function verifyUser(string memory _phoneNumber) public onlyOwner {
        require(users[_phoneNumber].isRegistered, "User not found");
        require(!users[_phoneNumber].isVerified, "User already verified");

        users[_phoneNumber].isVerified = true;

        emit UserVerified(_phoneNumber);
        emit Debug("User verified successfully", _phoneNumber);
    }

    function isUserRegistered(string memory _phoneNumber) public view returns (bool) {
        return users[_phoneNumber].isRegistered;
    }

    function getUserInfo(string memory _phoneNumber) public view returns (User memory) {
        require(users[_phoneNumber].isRegistered, "User not found");
        return users[_phoneNumber];
    }

    function getAccount(string memory phoneNumber) public view returns (string memory name, string memory pin) {
        require(bytes(users[phoneNumber].phoneNumber).length != 0, "User not found.");

        User memory user = users[phoneNumber];
        return (user.name, user.pin);
    }
}
