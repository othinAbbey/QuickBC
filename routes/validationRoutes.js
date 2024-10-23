import { Router } from 'express';
import { validate } from '../controllers/validationController.js';

const router = Router();
router.post('/validate-ussd-session', validate);

export default router;
