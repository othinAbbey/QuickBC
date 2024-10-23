import { requestPasswordReset, confirmPasswordReset } from '../services/passwordResetService.js';

const requestReset = (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const response = requestPasswordReset(phoneNumber);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const confirmReset = (req, res) => {
  const { phoneNumber, resetToken, newPin } = req.body;

  try {
    const response = confirmPasswordReset(phoneNumber, resetToken, newPin);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { requestReset, confirmReset };
