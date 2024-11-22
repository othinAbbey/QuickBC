import { registerUserService} from '../services/userRegistrationService.js';
import { getUserAccount } from '../services/accountService.js';

async function registerUser(req, res) {
  const { name, phoneNumber, pin } = req.body;
  try {
    // Check if the user is already registered
    const existingUser = await getUserAccount(phoneNumber);
    if (existingUser) {
      return res.status(400).json({ message: 'User already registered.' });
    }

    // Call the service to register the user
    const result = await registerUserService(name, phoneNumber, pin);
    
    // Log the transaction hash for debugging
    console.log("Transaction Hash:", result.hash);

    // Construct a response object to send back to the client
    const response = {
      message: 'User registered successfully!',
      transactionHash: result.hash,  // Include the transaction hash in the response
      user: {
        name,
        phoneNumber,
      },
    };

    // Send the response with a 200 status
    res.status(200).json(response);
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Failed to register user' });
  }
}

async function getUserDetailsController(req, res) {
  const { userId } = req.params;
  try {
    const result = await getUserDetails(userId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Failed to get user details' });
  }
}

export { registerUser, getUserDetailsController as getUserDetails };
