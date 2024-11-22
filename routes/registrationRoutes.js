import express from 'express';
import { getUserAccount, createUserAccount } from '../controllers/userController.js';
import { checkUserRegistration } from '../middleware/userManagement/checkUserRegistration.js';
const router = express.Router();

router.get('/user/:phoneNumber', getUserAccount);
router.post('/user', createUserAccount);

export default router;

