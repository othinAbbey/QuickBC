import { Router } from 'express';
import { purchaseAirtime } from '../controllers/airtimePurchaseController.js';

const router = Router();
router.post('/ussd-purchase-airtime', purchaseAirtime);
router.post('/purchase', purchaseAirtime);
// Test endpoint to check blockchain connection
router.get('/test-connection', async (req, res) => {
    try {
      const accounts = await web3.eth.getAccounts();
      res.status(200).json({ message: 'Connected to Celo blockchain', accounts });
    } catch (error) {
      res.status(500).json({ error: 'Failed to connect to Celo blockchain', details: error.message });
    }
  });

export default router;
