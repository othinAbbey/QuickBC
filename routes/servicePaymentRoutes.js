import { Router } from 'express';
import { pay } from '../controllers/servicePaymentController.js';

const router = Router();
router.post('/ussd-service-payment', pay);

export default router;
