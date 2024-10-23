import { purchaseAirtimeSerivce } from '../services/airtimePurchaseService.js';

const purchaseAirtime = async (req, res) => {
  const { phoneNumber, amount } = req.body;
  try {
    const result = await purchaseAirtimeSerivce(phoneNumber, amount);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to purchase airtime' });
  }
};

export { purchaseAirtime };
