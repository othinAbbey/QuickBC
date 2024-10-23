import { Router } from 'express';
import { requestReset, confirmReset } from '../controllers/passwordResetController.js';

const router = Router();
router.post('/ussd-request-reset', requestReset);
router.post('/ussd-confirm-reset', confirmReset);

export default router;
