import { Router } from 'express';
import { login } from '../controllers/loginController.js';

const router = Router();
router.post('/ussd-login', login);

export default router;
