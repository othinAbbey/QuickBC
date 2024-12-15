import express from 'express';
import {
  registerUser,
  checkIfUserIsRegistered,
  // getUserDetails,
  fetchAccount,
  // createAccount
  // createUserAccount
} from '../controllers/userManagementController.js';
import { checkUserRegistration } from '../middleware/userManagement/checkUserRegistration.js';
import { login } from '../controllers/loginController.js';
import { logout } from '../controllers/logoutController.js';
const router = express.Router();
import { updateProfile } from '../controllers/userManagementController.js';
// Route for registering a user
router.post('/register', async (req, res) => {
  const { name, phoneNumber, pin } = req.body;

  try {
    // Call service to register the user
    const result = await registerUser(name, phoneNumber, pin);

    // Send success response with transaction hash
    res.status(200).json({
      success: result.success,
      message: 'User registered successfully',
      userDetails: result.userDetails,  // Return user details
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: error.message,  // Return the error message
    });
  }
});


// Route to check if a user is registered
router.get('/is-registered/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const isRegistered = await checkIfUserIsRegistered(phoneNumber);
    res.status(200).json({ isRegistered });
  } catch (error) {
    console.error('Error checking registration status:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to get user details by phone number
router.get('/user/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const userDetails = await fetchAccount(phoneNumber);
    res.status(200).json({
      walletAddress: userDetails[0],
      name: userDetails[1],
      pin: userDetails[2],
    });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to get user account from blockchain
router.get('/account/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  try {
    const userAccount = await getUserAccount(phoneNumber);
    if (!userAccount) {
      return res.status(404).json({ error: 'User account not found' });
    }
    return res.status(200).json(userAccount);
  } catch (error) {
    console.error('Error getting user account:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to create a user account on the blockchain
router.post('/create-account', async (req, res) => {
  const { name, phoneNumber, pin } = req.body;

  try {
    const userAccount = await createAccount(name, phoneNumber, pin);
    return res.status(201).json(userAccount);
  } catch (error) {
    console.error('Error creating user account:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get user account details by phone number
router.get('/user/:phoneNumber', async (req, res) => {
  try {
    const userInfo = await getUserAccount(req.params.phoneNumber);
    res.json(userInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to create a new user account
router.post('/user', checkUserRegistration, async (req, res) => {
  const { name, phoneNumber, pin } = req.body;
  try {
    const result = await createUserAccount(name, phoneNumber, pin);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', login);
router.post('/ussd-logout', logout);

router.post('/ussd-update-profile', updateProfile);

export default router;
