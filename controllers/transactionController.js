import { sendTransaction, getTransactionStatus } from '../services/transactionService.js';

const send = (req, res) => {
  const { phoneNumber, amount, recipient } = req.body;

  try {
    const response = sendTransaction(phoneNumber, amount, recipient);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const status = (req, res) => {
  const { transactionId } = req.body;

  try {
    const response = getTransactionStatus(transactionId);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { send, status };
