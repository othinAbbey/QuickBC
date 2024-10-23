import { Router } from 'express';
import { help } from '../controllers/supportController.js';

const router = Router();
router.post('/ussd-help', help);

export default router;
