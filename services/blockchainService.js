// import { ethers } from 'ethers';
// import { quickNodeApiUrl } from '../config.js';
// import userManagementAbi from '../artifacts/contracts/UserManagement.sol/UserManagement.json'assert { type: 'json' };
// const privateKey = process.env.CELO_PRIVATE_KEY;
// const userManagementAddress = process.env.UserManagement_ADRESS;
// const provider = new ethers.providers.JsonRpcProvider(quickNodeApiUrl);
// const wallet = new ethers.Wallet(privateKey, provider);
// const userManagementContract = new ethers.Contract(userManagementAddress, userManagementAbi.abi, wallet);

// // Function to get user account details from the blockchain
// const getAccountFromBlockchain = async (phoneNumber) => {
//   try {

//     const user = await userManagementContract.getUserInfo(phoneNumber);
//     return {
//       walletAddress: user.walletAddress,
//       name: user.name,
//       phoneNumber: user.phoneNumber,
//       pin: user.pin,
//       isRegistered: user.isRegistered,
//       isVerified: user.isVerified
//     };
//   } catch (error) {
//     console.error("Error fetching user info:", error);
//     throw error;
//   }
// };

// const createAccountOnBlockchain = async (name, phoneNumber, pin) => {
//   try {
//     const tx = await userManagementContract.registerUser(name, phoneNumber, pin);
//     await tx.wait(); // Wait for the transaction to be mined
//     return {
//       transactionHash: tx.hash,
//       name,
//       phoneNumber
//     };
//   } catch (error) {
//     console.error("Error creating user account:", error);
//     throw error;
//   }
// };

// export { getAccountFromBlockchain, createAccountOnBlockchain };


import { ethers } from 'ethers';
import { quickNodeApiUrl } from '../config.js';
import userManagementAbi from '../artifacts/contracts/UserManagement.sol/UserManagement.json' assert { type: 'json' };
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const privateKey = process.env.CELO_PRIVATE_KEY;
const userManagementAddress = process.env.UserManagement_ADRESS;

// Validate environment variables
if (!privateKey || !userManagementAddress || !quickNodeApiUrl) {
  throw new Error("Missing required environment variables: CELO_PRIVATE_KEY, UserManagement_ADRESS, or quickNodeApiUrl");
}

const provider = new ethers.providers.JsonRpcProvider(quickNodeApiUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const userManagementContract = new ethers.Contract(userManagementAddress, userManagementAbi.abi, wallet);

/**
 * Validate the input data types.
 */
const validateInput = (data, expectedType, fieldName) => {
  if (typeof data !== expectedType) {
    throw new TypeError(`Invalid type for ${fieldName}. Expected ${expectedType}, got ${typeof data}`);
  }
};

/**
 * Get user account details from the blockchain.
 * @param {string} phoneNumber - The phone number of the user.
 */
const getAccountFromBlockchain = async (phoneNumber) => {
  try {
    // Validate input
    validateInput(phoneNumber, 'string', 'phoneNumber');

    // Log data before method call
    console.log("Fetching user info for phoneNumber:", phoneNumber);

    // Call contract method
    const user = await userManagementContract.getUserInfo(phoneNumber);

    // Log raw user data from the contract
    console.log("Raw user data from blockchain:", user);

    // Format and return user details
    return {
      walletAddress: user.walletAddress,
      name: user.name,
      phoneNumber: user.phoneNumber,
      pin: user.pin,
      isRegistered: user.isRegistered,
      isVerified: user.isVerified,
    };
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

/**
 * Create a user account on the blockchain.
 * @param {string} name - The name of the user.
 * @param {string} phoneNumber - The phone number of the user.
 * @param {string} pin - The pin for the user account.
 */
const createAccountOnBlockchain = async (name, phoneNumber, pin) => {
  try {
    // Validate inputs
    validateInput(name, 'string', 'name');
    validateInput(phoneNumber, 'string', 'phoneNumber');
    validateInput(pin, 'string', 'pin');

    // Log data before method call
    console.log("Creating user account with data:", { name, phoneNumber, pin });

    // Call contract method
    const tx = await userManagementContract.registerUser(name, phoneNumber, pin);

    // Log transaction data
    console.log("Transaction submitted:", { hash: tx.hash, blockNumber: tx.blockNumber });

    // Wait for transaction confirmation
    const receipt = await tx.wait();

    // Log transaction receipt
    console.log("Transaction confirmed:", receipt);

    // Return formatted transaction result
    return {
      transactionHash: tx.hash,
      name,
      phoneNumber,
    };
  } catch (error) {
    console.error("Error creating user account:", error);
    throw error;
  }
};

export { getAccountFromBlockchain, createAccountOnBlockchain };
