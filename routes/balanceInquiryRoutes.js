import { Router } from 'express';
import { getBalance } from '../controllers/balanceInquiryController.js';

const router = Router();
router.post('/ussd-balance', getBalance);

export default router;
