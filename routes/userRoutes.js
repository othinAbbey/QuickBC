import express from 'express';
import { getUserAccount, createUserAccount } from '../controllers/userController.js';
const router = express.Router();

router.get('/user/:phoneNumber', async (req, res) => {
  try {
    const userInfo = await getUserAccount(req.params.phoneNumber);
    res.json(userInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/user', async (req, res) => {
  const { name, phoneNumber, pin } = req.body;
  try {
    const result = await createUserAccount(name, phoneNumber, pin);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
