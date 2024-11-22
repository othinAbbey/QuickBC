// accountService.js
import { getAccountFromBlockchain, createAccountOnBlockchain } from './blockchainService.js';

const getUserAccount = async (phoneNumber) => {
  try {
    if (!phoneNumber) {
      throw new Error("Phone number is required.");
    }
    const userAccount = await getAccountFromBlockchain(phoneNumber);
    if (!userAccount) {
      throw new Error("User account not found.");
    }
    return userAccount;
  } catch (error) {
    console.error("Error getting user account:", error.message);
    throw error;
  }
};

const createUserAccount = async (name, phoneNumber, pin) => {
  try {
    if (!name || !phoneNumber || !pin) {
      throw new Error("Name, phone number, and pin are required.");
    }
    const existingAccount = await getAccountFromBlockchain(phoneNumber);
    if (existingAccount) {
      throw new Error("User already registered.");
    }
    const userAccount = await createAccountOnBlockchain(name, phoneNumber, pin);
    return userAccount;
  } catch (error) {
    console.error("Error creating user account:", error.message);
    throw error;
  }
};

export { getUserAccount, createUserAccount };
