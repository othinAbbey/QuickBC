require('dotenv').config();
const { ethers } = require("hardhat");

async function main() {
    // Set up the provider with QuickNode Celo RPC endpoint
    const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo.org");
    const wallet = new ethers.Wallet(process.env.CELO_PRIVATE_KEY, provider);

    // Load the Attestations contract address from the .env file
    const attestationsAddress = process.env.ATTESTATIONS_CONTRACT_ADDRESS;

    if (!attestationsAddress) {
        throw new Error("Attestations contract address is not set in the .env file");
    }

    // Deploy UserManagement contract
    const UserManagement = await ethers.getContractFactory("UserManagement");
    const userManagement = await UserManagement.deploy(attestationsAddress);
    await userManagement.deployed();
    console.log("UserManagement deployed to:", userManagement.address);

    // Register a user
    const phoneNumber = "0775824543";
    await userManagement.registerUser("John Doe", phoneNumber, "1234", { value: ethers.utils.parseEther("0.01") });

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
