import { Router } from 'express';
import { registerUser, getUserDetails} from '../controllers/registrationController.js';

const router = Router();
router.post('/register', registerUser);
router.get('/user/:userId', getUserDetails);

export default router;
