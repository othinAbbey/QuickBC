import { getUserBalance } from '../services/balanceInquiryService.js';

const getBalance = (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const balance = getUserBalance(phoneNumber);
    res.json(balance);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getBalance };
