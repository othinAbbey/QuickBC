import { Router } from 'express';
import { initiate, rate } from '../controllers/cryptoExchangeController.js';

const router = Router();
router.post('/ussd-initiate-exchange', initiate);
router.post('/ussd-exchange-rate', rate);

export default router;
