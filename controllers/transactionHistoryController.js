import { getTransactionHistory } from '../services/transactionHistoryService.js';

const getHistory = (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const history = getTransactionHistory(phoneNumber);
    res.json(history);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getHistory };
