// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract UserRegistration {
    address public owner;

    struct User {
        address walletAddress; // User's blockchain wallet address
        string phoneNumber;    // User's phone number
        bool isRegistered;     // Registration status
        bool isVerified;       // Verification status
    }

    // Mapping of phone numbers to user information
    mapping(string => User) public users;

    // Event declarations for registration and verification
    event UserRegistered(address indexed walletAddress, string phoneNumber);
    event UserVerified(string phoneNumber);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender; // Set the contract creator as the owner
    }

    // Function to register a user by linking their phone number to a wallet address
    function registerUser(string memory _phoneNumber) public {
        require(!users[_phoneNumber].isRegistered, "User already registered");

        // Create a new user
        users[_phoneNumber] = User({
            walletAddress: msg.sender,
            phoneNumber: _phoneNumber,
            isRegistered: true,
            isVerified: false // Initially, users are not verified
        });

        emit UserRegistered(msg.sender, _phoneNumber);
    }

    // Function to verify a user (can be called by the owner, for example, after SMS verification)
    function verifyUser(string memory _phoneNumber) public onlyOwner {
        require(users[_phoneNumber].isRegistered, "User not found");
        require(!users[_phoneNumber].isVerified, "User already verified");

        users[_phoneNumber].isVerified = true; // Mark the user as verified

        emit UserVerified(_phoneNumber);
    }

    // Function to check if a user is registered
    function isUserRegistered(string memory _phoneNumber) public view returns (bool) {
        return users[_phoneNumber].isRegistered;
    }

    // Function to get user information (can be made private if not needed publicly)
    function getUserInfo(string memory _phoneNumber) public view returns (User memory) {
        require(users[_phoneNumber].isRegistered, "User not found");
        return users[_phoneNumber];
    }
}
