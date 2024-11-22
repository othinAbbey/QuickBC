// import { Router } from 'express';
// import { getBalance } from '../controllers/balanceInquiryController.js';

// const router = Router();
// router.post('/ussd-balance', getBalance);

// export default router;

// getBalanceRoutes.js

// import { Router } from 'express';
// import { getBalance } from '../controllers/balanceInquiryController.js';
// import { authenticateToken } from '../middleware/auth/authMiddleware.js';
// import { connectUserAccount } from '../middleware/connection/ensureConnected.js';

// const router = Router();

// router.post('/ussd-balance', authenticateToken, connectUserAccount, getBalance);

// export default router;

// getBalanceRoutes.js
import { Router } from 'express';
import { getBalance } from '../controllers/balanceInquiryController.js';
import { authenticateToken } from '../middleware/auth/authMiddleware.js';
import { connectUserAccount } from '../middleware/connection/ensureConnected.js';

const router = Router();

router.post('/ussd-balance', authenticateToken, connectUserAccount, getBalance);

export default router;
