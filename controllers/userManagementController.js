import { createUserAccount, isUserRegistered, getUserDetails, getUserAccount } from '../services/userManagementService.js';
// import { getUserDetails, updateUserProfile } from '../services/userManagementService.js';

// Function to register a user

// Register User and Handle Blockchain Transaction



// Function to check if the user is already registered
const checkIfUserIsRegistered = async (phoneNumber) => {
  if (!phoneNumber) {
    throw new Error('Phone number is required to check registration status.');
  }

  try {
    const isRegistered = await isUserRegistered(phoneNumber);
    return { isRegistered };
  } catch (error) {
    console.error('Error checking registration status:', error);
    throw new Error('Failed to check user registration status. Please try again later.');
  }
};

// Function to fetch user details
const fetchUserDetails = async (phoneNumber) => {
  if (!phoneNumber) {
    throw new Error('Phone number is required to fetch user details.');
  }

  try {
    const userDetails = await getUserDetails(phoneNumber); // Uses userManagementService
    if (!userDetails) {
      throw new Error('User details not found.');
    }

    return {
      walletAddress: userDetails.walletAddress, // Adjust keys based on returned structure
      name: userDetails.name,
      pin: userDetails.pin,
    };
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw new Error('Failed to fetch user details. Please try again later.');
  }
};

// Function to create an account on blockchain
const registerUser = async (name, phoneNumber, pin) => {
  if (!name || !phoneNumber || !pin) {
    throw new Error('All fields (name, phone number, and pin) are required to create an account.');
  }

  try {
    const userAccount = await createUserAccount(name, phoneNumber, pin);
    return userAccount;
  } catch (error) {
    console.error('Error creating user account on blockchain:', error);
    throw new Error('Failed to create user account on the blockchain. Please try again later.');
  }
};

// Function to get user profile
// Function to fetch a user account by phone number
// Function to fetch a user account by phone number
const fetchAccount = async (phoneNumber) => {
  if (!phoneNumber) {
    throw new Error('Phone number is required to get user account.');
  }

  try {
    console.log('Fetching user account for phone number:', phoneNumber);

    // Call to blockchain or database to get the account
    const userAccount = await getUserAccount(phoneNumber);

    // Log raw data for debugging
    console.log('Raw user account data:', userAccount);

    if (!userAccount) {
      throw new Error('User account not found.');
    }

    // Check if userAccount is an array (typical for smart contract responses)
    if (!Array.isArray(userAccount) || userAccount.length < 3) {
      throw new Error('Invalid data structure received from user account service.');
    }

    // Map the array to named properties if the contract returns an array
    const [walletAddress, name, pin] = userAccount;

    if (!walletAddress || !name || !pin) {
      throw new Error('Incomplete data received from user account service.');
    }

    console.log('Parsed user account:', { walletAddress, name, pin });

    return {
      walletAddress,
      name,
      pin
    };
  } catch (error) {
    console.error('Error fetching user account:', error.message);

    // Handle specific blockchain errors
    if (error.code === 'CALL_EXCEPTION') {
      throw new Error('User account not found on the blockchain.');
    }

    throw new Error('Failed to get user account. Please try again later.');
  }
};



// Function to update user profile
const updateProfile = async (phoneNumber, name, email) => {
  if (!phoneNumber || !name || !email) {
    throw new Error('All fields (phone number, name, and email) are required to update the profile.');
  }

  try {
    const response = await updateProfile(phoneNumber, name, email);
    return response;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw new Error('Failed to update user profile. Please try again later.');
  }
};

export {
  registerUser,
  checkIfUserIsRegistered,
  fetchUserDetails,
  fetchAccount,
  // createAccount,
  updateProfile,
};
