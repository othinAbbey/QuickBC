// scripts/getUserDetails.js
const { ethers } = require("hardhat");
const usermanagementAddress = process.env.UserManagement_ADRESS; // Ensure this is defined in your .env file
async function main() {
    // Get the deployed contract instance
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const contractAddress = process.env.UserManagement_ADRESS; // Replace with your contract address
    const UserManagement = await ethers.getContractFactory("UserManagement");
    const contract = await UserManagement.attach(contractAddress);

    // Define the phone number of the user you want to get
    const phoneNumber = "0775824543"; // Replace with the actual phone number

    try {
        // Call the contract to get user details
        const userDetails = await contract.getUserDetails(phoneNumber);

        // Log the user details
        console.log("User Details:");
        console.log("Name:", userDetails[1]);
        console.log("Phone Number:", phoneNumber);
        console.log("Pin:", userDetails[2]);
        console.log("Is Verified:", userDetails[3]);
    } catch (error) {
        console.log("Error fetching user details:", error);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
