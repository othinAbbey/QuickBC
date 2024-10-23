import { registerUserService, getUserDetails } from '../services/userRegistrationService.js';

async function registerUser(req, res) {
  const { name, phoneNumber, pin } = req.body;
  try {
    const result = await registerUserService(name || phoneNumber, phoneNumber || pin);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
}

async function getUserDetailsController(req, res) {
  const { userId } = req.params;
  try {
    const result = await getUserDetails(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user details' });
  }
}

export { registerUser, getUserDetailsController as getUserDetails };
