import { Router } from 'express';
import { getHistory } from '../controllers/transactionHistoryController.js';

const router = Router();
router.post('/ussd-transaction-history', getHistory);

export default router;

