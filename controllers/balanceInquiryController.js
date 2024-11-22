// balanceController.js
// balanceInquiryController.js
import { getUserBalance } from '../services/balanceInquiryService.js';

const getBalance = async (req, res) => {
  const { userAccount } = req;

  try {
    const balance = getUserBalance(userAccount);
    res.json({ balance });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getBalance };
