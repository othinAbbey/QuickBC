// import 'dotenv/config';
// import userRegistration from '../artifacts/contracts/UserRegistration.sol/UserRegistration.json' assert { type: 'json' };
// import { ethers } from 'ethers';
// import { quickNodeApiUrl } from '../config.js';

// const provider = new ethers.providers.JsonRpcProvider(quickNodeApiUrl);
// const privateKey = process.env.CELO_PRIVATE_KEY;

// if (!privateKey) {
//   throw new Error('PRIVATE_KEY or CELO_PRIVATE_KEY is not defined in the environment variables');
// }

// const wallet = new ethers.Wallet(privateKey, provider);

// const { abi } = userRegistration;
// const userRegistrationAddress = process.env.UserRegistration_ADRESS; // Replace with your deployed contract address
// const userRegistrationContract = new ethers.Contract(userRegistrationAddress, abi, wallet);

// const registerUserService = async (name, phoneNumber) => {
//   try {
//     const tx = await userRegistrationContract.registerUser(name, phoneNumber);
//     await tx.wait();
//     return tx;
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// };

// const getUserDetails = async (userId) => {
//   try {
//     const userDetails = await userRegistrationContract.getUserDetails(userId);
//     return userDetails;
//   } catch (error) {
//     console.error('Error fetching user details:', error);
//     throw error;
//   }
// };

// export { registerUserService, getUserDetails };


import 'dotenv/config';
import userRegistration from '../artifacts/contracts/UserRegistration.sol/UserRegistration.json' assert { type: 'json' };
import { ethers } from 'ethers';
import { quickNodeApiUrl } from '../config.js';

const provider = new ethers.providers.JsonRpcProvider(quickNodeApiUrl);
const privateKey = process.env.CELO_PRIVATE_KEY;

if (!privateKey) {
  throw new Error('PRIVATE_KEY or CELO_PRIVATE_KEY is not defined in the environment variables');
}

const wallet = new ethers.Wallet(privateKey, provider);

const { abi } = userRegistration;
const userRegistrationAddress = process.env.UserRegistration_ADRESS; // Replace with your deployed contract address
const userRegistrationContract = new ethers.Contract(userRegistrationAddress, abi, wallet);

const registerUserService = async (name, phoneNumber, pin) => {
  try {
    const tx = await userRegistrationContract.registerUser(name, phoneNumber, pin);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

const getUserDetails = async (userId) => {
  try {
    const userDetails = await userRegistrationContract.getUserInfo(userId);
    return userDetails;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export { registerUserService, getUserDetails };
