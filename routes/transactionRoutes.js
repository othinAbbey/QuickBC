import { Router } from 'express';
import { send, status } from '../controllers/transactionController.js';

const router = Router();
router.post('/ussd-send-transaction', send);
router.post('/ussd-transaction-status', status);

export default router;
