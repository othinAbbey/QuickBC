import 'dotenv/config';
import userRegistration from '../artifacts/contracts/UserManagement.sol/UserManagement.json' assert { type: 'json' };
import { ethers } from 'ethers';
import { quickNodeApiUrl } from '../config.js';

// Connect to the provider (QuickNode URL)
const provider = new ethers.providers.JsonRpcProvider(quickNodeApiUrl);
const privateKey = process.env.CELO_PRIVATE_KEY;

// Check if private key exists
if (!privateKey) {
  throw new Error('PRIVATE_KEY or CELO_PRIVATE_KEY is not defined in the environment variables');
}

const wallet = new ethers.Wallet(privateKey, provider);

// Contract ABI and address
const { abi } = userRegistration;
const usermanagementAddress = process.env.UserManagement_ADRESS; // Ensure this is defined in your .env file

if (!usermanagementAddress) {
  throw new Error('UserRegistration contract address is not defined in the environment variables');
}

// Initialize the contract
const userManagementContract = new ethers.Contract(usermanagementAddress, abi, wallet);

// User registration service (registers user on blockchain)
const createUserAccount = async (name, phoneNumber, pin) => {
  try {
    console.log('Registering user with details:', { name, phoneNumber, pin });

    // Initiate transaction
    const tx = await userManagementContract.registerUser(name, phoneNumber, pin);

    console.log('Transaction sent:', tx); // Log the transaction object

    // Check if the transaction object has a `hash` and log accordingly
    if (tx && tx.hash) {
      console.log('Transaction hash:', tx.hash); // Log the transaction hash
    } else {
      console.log('Transaction object is missing a hash.');
    }

    // Wait for transaction confirmation if `wait` function is available
    if (tx && typeof tx.wait === 'function') {
      const receipt = await tx.wait();
      console.log('Transaction receipt:', receipt);
    } else {
      console.log('Transaction was already mined or invalid.');
    }

    // Return success message with user details and transaction hash
    return {
      success: true,
      message: `User registered successfully with transaction hash: ${tx.hash || 'unknown'}`,
      userDetails: {
        name,
        phoneNumber,
        pin,
        transactionHash: tx.hash || 'unknown',
      },
    };
  } catch (error) {
    console.error('Error during registration:', error);
    throw new Error('Failed to register user on the blockchain.');
  }
};

// Get user details using their phone number
const getUserDetails = async (phoneNumber) => {
  try {
    // Fetch the user details using phone number (contract method 'getUserInfo')
    const userDetails = await userManagementContract.getUserInfo(phoneNumber);
    return userDetails;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};



// Check if a user is registered (by phone number)
const isUserRegistered = async (phoneNumber) => {
  try {
    const userDetails = await userManagementContract.getUserInfo(phoneNumber);
    return userDetails.walletAddress !== ethers.constants.AddressZero; // If wallet address is not zero, the user is registered
  } catch (error) {
    console.error('Error checking user registration:', error);
    return false; // Assume user is not registered on error
  }
};

const getUserAccount = async (phoneNumber) => {
  try {
    const userAccount = await userManagementContract.getUserInfo(phoneNumber);
    if (!userAccount) {
      return null;
    }
    return userAccount;
  } catch (error) {
    console.error('Error getting user account:', error.message);
    return null;
  }
};

export {createUserAccount,getUserDetails, isUserRegistered ,getUserAccount};
