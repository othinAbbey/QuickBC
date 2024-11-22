import { ethers } from 'ethers';
import { quickNodeApiUrl } from '../config.js';
import userManagementAbi from '../artifacts/contracts/UserManagement.sol/UserManagement.json'assert { type: 'json' };
const privateKey = process.env.CELO_PRIVATE_KEY;
const userManagementAddress = process.env.UserManagement_ADRESS;
const provider = new ethers.providers.JsonRpcProvider(quickNodeApiUrl);
const wallet = new ethers.Wallet(privateKey, provider);
const userManagementContract = new ethers.Contract(userManagementAddress, userManagementAbi.abi, wallet);

// const getAccountFromBlockchain= async (phoneNumber) => {
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




const getAccountFromBlockchain = async (phoneNumber) => {
  try {
    const user = await userManagementContract.getUserInfo(phoneNumber);
    return {
      walletAddress: user.walletAddress,
      name: user.name,
      phoneNumber: user.phoneNumber,
      pin: user.pin,
      isRegistered: user.isRegistered,
      isVerified: user.isVerified
    };
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

const createAccountOnBlockchain = async (name, phoneNumber, pin) => {
  try {
    const tx = await userManagementContract.registerUser(name, phoneNumber, pin);
    await tx.wait(); // Wait for the transaction to be mined
    return {
      transactionHash: tx.hash,
      name,
      phoneNumber
    };
  } catch (error) {
    console.error("Error creating user account:", error);
    throw error;
  }
};

export { getAccountFromBlockchain, createAccountOnBlockchain };