import { Router } from 'express';
import { logout } from '../controllers/logoutController.js';

const router = Router();
router.post('/ussd-logout', logout);

export default router;
