import { Router } from 'express';
import { notify } from '../controllers/notificationController.js';

const router = Router();
router.post('/ussd-notify', notify);

export default router;
