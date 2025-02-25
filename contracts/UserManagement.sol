// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// pragma solidity ^0.8.0;

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

//     // Mapping from phone number to user details
//     mapping(string => User) private users;

//     event UserRegistered(address indexed walletAddress, string name, string phoneNumber);
//     event UserVerified(string phoneNumber);
//     event Debug(string message, string phoneNumber);

//     modifier onlyOwner() {
//         require(msg.sender == owner, "Only owner can perform this action");
//         _;
//     }

//     modifier validPhoneNumber(string memory _phoneNumber) {
//         // Ensure phone number isn't empty
//         require(bytes(_phoneNumber).length > 0, "Phone number cannot be empty");
//         _;
//     }

//     constructor() {
//         owner = msg.sender;
//     }

//     // Register user function
//     function registerUser(
//         string memory _name, 
//         string memory _phoneNumber, 
//         string memory _pin
//     ) 
//         public 
//         validPhoneNumber(_phoneNumber)
//     {
//         // Prevent registration of more than one account with the same phone number
//         require(!users[_phoneNumber].isRegistered, "User already registered with this phone number");

//         // Create new user in the system
//         users[_phoneNumber] = User({
//             walletAddress: msg.sender,
//             name: _name,
//             phoneNumber: _phoneNumber,
//             pin: _pin,
//             isRegistered: true,
//             isVerified: false
//         });

//         // Emit events
//         emit UserRegistered(msg.sender, _name, _phoneNumber);
//         emit Debug("User registered successfully", _phoneNumber);
//     }

//     // Verify user function, only can be performed by the owner
//     function verifyUser(string memory _phoneNumber) public onlyOwner {
//         require(users[_phoneNumber].isRegistered, "User not found");
//         require(!users[_phoneNumber].isVerified, "User already verified");

//         // Set the user as verified
//         users[_phoneNumber].isVerified = true;

//         // Emit events
//         emit UserVerified(_phoneNumber);
//         emit Debug("User verified successfully", _phoneNumber);
//     }

//     // Check if a user is registered by phone number
//     function isUserRegistered(string memory _phoneNumber) public view returns (bool) {
//         return users[_phoneNumber].isRegistered;
//     }

//     // Get user details by phone number
//     function getUserDetails(string memory _phoneNumber) 
//         public 
//         view 
//         validPhoneNumber(_phoneNumber)
//         returns (address walletAddress, string memory name, string memory pin, bool isVerified)
//     {
//         require(users[_phoneNumber].isRegistered, "User not found");

//         User memory user = users[_phoneNumber];
//         return (user.walletAddress, user.name, user.pin, user.isVerified);
//     }

//     // Get user account details by phone number (returns name and pin)
//     function getAccount(string memory _phoneNumber) 
//         public 
//         view 
//         returns (string memory name, string memory pin)
//     {
//         require(users[_phoneNumber].isRegistered, "User not found");

//         User memory user = users[_phoneNumber];
//         return (user.name, user.pin);
//     }
// }



// interface IAttestations {
//     function request(uint256 identifier, uint256 attestationsRequested) external payable;
//     function selectIssuers(uint256 identifier) external;
//     function complete(uint256 identifier, address account, uint256[] calldata v, bytes32[] calldata r, bytes32[] calldata s) external;
// }

// contract UserManagement {
//     address public owner;
//     IAttestations public attestations;
//     uint256 public constant ATTESTATION_FEE = 1e16; // Example fee, adjust as needed

//     struct User {
//         address walletAddress;
//         string name;
//         string phoneNumber;
//         string pin;
//         bool isRegistered;
//         bool isVerified;
//     }

//     // Mapping from phone number to user details
//     mapping(string => User) private users;

//     event UserRegistered(address indexed walletAddress, string name, string phoneNumber);
//     event UserVerified(string phoneNumber);
//     event Debug(string message, string phoneNumber);

//     modifier onlyOwner() {
//         require(msg.sender == owner, "Only owner can perform this action");
//         _;
//     }

//     modifier validPhoneNumber(string memory _phoneNumber) {
//         // Ensure phone number isn't empty
//         require(bytes(_phoneNumber).length > 0, "Phone number cannot be empty");
//         _;
//     }

//     constructor(address _attestations) {
//         owner = msg.sender;
//         attestations = IAttestations(_attestations);
//     }

//     // Register user function
//     function registerUser(
//         string memory _name, 
//         string memory _phoneNumber, 
//         string memory _pin
//     ) 
//         public 
//         validPhoneNumber(_phoneNumber)
//         payable
//     {
//         // Prevent registration of more than one account with the same phone number
//         require(!users[_phoneNumber].isRegistered, "User already registered with this phone number");

//         // Create new user in the system
//         users[_phoneNumber] = User({
//             walletAddress: msg.sender,
//             name: _name,
//             phoneNumber: _phoneNumber,
//             pin: _pin,
//             isRegistered: true,
//             isVerified: false
//         });

//         // Request attestation
//         uint256 identifier = uint256(keccak256(abi.encodePacked(_phoneNumber)));
//         attestations.request{value: msg.value}(identifier, 1);

//         // Emit events
//         emit UserRegistered(msg.sender, _name, _phoneNumber);
//         emit Debug("User registered successfully", _phoneNumber);
//     }

//     // Verify user function, only can be performed by the owner
//     function verifyUser(string memory _phoneNumber, uint256[] calldata v, bytes32[] calldata r, bytes32[] calldata s) public onlyOwner {
//         require(users[_phoneNumber].isRegistered, "User not found");
//         require(!users[_phoneNumber].isVerified, "User already verified");

//         // Complete attestation
//         uint256 identifier = uint256(keccak256(abi.encodePacked(_phoneNumber)));
//         attestations.complete(identifier, users[_phoneNumber].walletAddress, v, r, s);

//         // Set the user as verified
//         users[_phoneNumber].isVerified = true;

//         // Emit events
//         emit UserVerified(_phoneNumber);
//         emit Debug("User verified successfully", _phoneNumber);
//     }

//     // Check if a user is registered by phone number
//     function isUserRegistered(string memory _phoneNumber) public view returns (bool) {
//         return users[_phoneNumber].isRegistered;
//     }

//     // Get user details by phone number
//     function getUserDetails(string memory _phoneNumber) 
//         public 
//         view 
//         validPhoneNumber(_phoneNumber)
//         returns (address walletAddress, string memory name, string memory pin, bool isVerified)
//     {
//         require(users[_phoneNumber].isRegistered, "User not found");

//         User memory user = users[_phoneNumber];
//         return (user.walletAddress, user.name, user.pin, user.isVerified);
//     }

//     // Get user account details by phone number (returns name and pin)
//     function getAccount(string memory _phoneNumber) 
//         public 
//         view 
//         returns (string memory name, string memory pin)
//     {
//         require(users[_phoneNumber].isRegistered, "User not found");

//         User memory user = users[_phoneNumber];
//         return (user.name, user.pin);
//     }
// }


interface IAttestations {
    function request(uint256 identifier, uint256 attestationsRequested) external payable;
    function selectIssuers(uint256 identifier) external;
    function complete(uint256 identifier, address account, uint256[] calldata v, bytes32[] calldata r, bytes32[] calldata s) external;
}

contract UserManagement {
    address public owner;
    IAttestations public attestations;
    uint256 public constant ATTESTATION_FEE = 1e16; // Example fee, adjust as needed

    struct User {
        address walletAddress;
        string name;
        string phoneNumber;
        string pin;
        bool isRegistered;
        bool isVerified;
    }

    // Mapping from phone number to user details
    mapping(string => User) private users;

    event UserRegistered(address indexed walletAddress, string name, string phoneNumber);
    event UserVerified(string phoneNumber);
    event UserLoggedIn(address indexed walletAddress, string phoneNumber);
    event Debug(string message, string phoneNumber);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier validPhoneNumber(string memory _phoneNumber) {
        // Ensure phone number isn't empty
        require(bytes(_phoneNumber).length > 0, "Phone number cannot be empty");
        _;
    }

    constructor(address _attestations) {
        owner = msg.sender;
        attestations = IAttestations(_attestations);
    }

    // Register user function
    function registerUser(
        string memory _name, 
        string memory _phoneNumber, 
        string memory _pin
    ) 
        public 
        validPhoneNumber(_phoneNumber)
        payable
    {
        // Prevent registration of more than one account with the same phone number
        require(!users[_phoneNumber].isRegistered, "User already registered with this phone number");

        // Create new user in the system
        users[_phoneNumber] = User({
            walletAddress: msg.sender,
            name: _name,
            phoneNumber: _phoneNumber,
            pin: _pin,
            isRegistered: true,
            isVerified: false
        });

        // Request attestation
        uint256 identifier = uint256(keccak256(abi.encodePacked(_phoneNumber)));
        attestations.request{value: msg.value}(identifier, 1);

        // Emit events
        emit UserRegistered(msg.sender, _name, _phoneNumber);
        emit Debug("User registered successfully", _phoneNumber);
    }

    // Verify user function, only can be performed by the owner
    function verifyUser(string memory _phoneNumber, uint256[] calldata v, bytes32[] calldata r, bytes32[] calldata s) public onlyOwner {
        require(users[_phoneNumber].isRegistered, "User not found");
        require(!users[_phoneNumber].isVerified, "User already verified");

        // Complete attestation
        uint256 identifier = uint256(keccak256(abi.encodePacked(_phoneNumber)));
        attestations.complete(identifier, users[_phoneNumber].walletAddress, v, r, s);

        // Set the user as verified
        users[_phoneNumber].isVerified = true;

        // Emit events
        emit UserVerified(_phoneNumber);
        emit Debug("User verified successfully", _phoneNumber);
    }

    // Login function
    function login(string memory _phoneNumber, string memory _pin) 
        public 
        validPhoneNumber(_phoneNumber)
        returns (string memory)
    {
        require(users[_phoneNumber].isRegistered, "User not found");
        require(keccak256(abi.encodePacked(users[_phoneNumber].pin)) == keccak256(abi.encodePacked(_pin)), "Invalid credentials");

        // Emit login event
        emit UserLoggedIn(users[_phoneNumber].walletAddress, _phoneNumber);

        return "Login successful";
    }

    // Check if a user is registered by phone number
    function isUserRegistered(string memory _phoneNumber) public view returns (bool) {
        return users[_phoneNumber].isRegistered;
    }

    // Get user details by phone number
    function getUserDetails(string memory _phoneNumber) 
        public 
        view 
        validPhoneNumber(_phoneNumber)
        returns (address walletAddress, string memory name, string memory pin, bool isVerified)
    {
        require(users[_phoneNumber].isRegistered, "User not found");

        User memory user = users[_phoneNumber];
        return (user.walletAddress, user.name, user.pin, user.isVerified);
    }

    // Get user account details by phone number (returns name and pin)
    function getAccount(string memory _phoneNumber) 
        public 
        view
        returns (string memory name, string memory pin)
    {
        require(users[_phoneNumber].isRegistered, "User not found");

        User memory user = users[_phoneNumber];
        return (user.name, user.pin);
    }
}
