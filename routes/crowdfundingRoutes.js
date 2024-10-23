import { Router } from 'express';
import { create, contribute, status as _status } from '../controllers/crowdfundingController.js';

const router = Router();
router.post('/ussd-create-campaign', create);
router.post('/ussd-contribute-campaign', contribute);
router.post('/ussd-campaign-status', _status);

export default router;
