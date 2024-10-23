import { loginUser } from '../services/loginService.js';

const login = (req, res) => {
  const { phoneNumber, pin } = req.body;

  try {
    const { token, expiresIn } = loginUser(phoneNumber, pin);
    res.json({ message: `Login successful. Your session token is: ${token}`, token, expiresIn });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export { login };
