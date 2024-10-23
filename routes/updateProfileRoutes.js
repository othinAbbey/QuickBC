import { Router } from 'express';
import { updateProfile } from '../controllers/userProfileController.js';

const router = Router();
router.post('/ussd-update-profile', updateProfile);

export default router;
