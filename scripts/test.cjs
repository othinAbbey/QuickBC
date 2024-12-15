const { ethers } = require("hardhat");

async function main() {
    // Deploy the contract
    const [deployer] = await ethers.getSigners();
    const UserManagement = await ethers.getContractFactory("UserManagement");
    const userManagement = await UserManagement.deploy();
    console.log("Contract deployed to:", userManagement.address);

    // Register a user
    const phoneNumber = "0775824543";
    // await userManagement.registerUser("John Doe", phoneNumber, "1234");

    // Retrieve user details using phone number
    const userDetails = await userManagement.getUserDetails(phoneNumber);
    console.log("User Details:", userDetails);

    // Example output format
    // User Details: [ '0x1234...', 'John Doe', '1234', false ]
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
