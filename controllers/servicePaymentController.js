import { processServicePayment } from '../services/servicePaymentService.js';

const pay = (req, res) => {
  const { phoneNumber, serviceId, amount } = req.body;

  try {
    const response = processServicePayment(phoneNumber, serviceId, amount);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Failed to process service payment', error: error.message });
  }
};

export { pay };
