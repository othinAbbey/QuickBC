import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/userProfileController.js';

const router = Router();
router.post('/ussd-profile', getProfile);
router.post('/ussd-update-profile', updateProfile);

export default router;
