import { getAccountFromBlockchain, createAccountOnBlockchain } from '../services/blockchainService.js';

const getUserAccount = async (req, res) => {
  const { phoneNumber } = req.params;
  try {
    // if (!phoneNumber) {
    //   return res.status(400).json({ error: "Phone number is required." });
    // }
    const userAccount = await getAccountFromBlockchain(phoneNumber);
    if (!userAccount) {
      return res.status(404).json({ error: "User account not found." });
    }
    return res.status(200).json(userAccount);
  } catch (error) {
    console.error("Error getting user account:", error.message);
    return res.status(500).json({ error: "Internal server error." });
  }
};

const createUserAccount = async (req, res) => {
  const { name, phoneNumber, pin } = req.body;
  try {
    if (!name || !phoneNumber || !pin) {
      return res.status(400).json({ error: "Name, phone number, and pin are required." });
    }
    // const existingAccount = await getAccountFromBlockchain(phoneNumber);
    // if (existingAccount.isRegistered) {
    //   return res.status(400).json({ error: "User already registered." });
    // }
    const userAccount = await createAccountOnBlockchain(name, phoneNumber, pin);
    return res.status(201).json(userAccount);
  } catch (error) {
    console.error("Error creating user account:", error.message);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export { getUserAccount, createUserAccount };
