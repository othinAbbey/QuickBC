import { getUserProfile, updateUserProfile } from '../services/userProfileService.js';

const getProfile = (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const profile = getUserProfile(phoneNumber);
    res.json(profile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateProfile = (req, res) => {
  const { phoneNumber, name, email } = req.body;

  try {
    const response = updateUserProfile(phoneNumber, name, email);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getProfile, updateProfile };
