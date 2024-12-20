import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;

import loginRoutes from './routes/userManagementRoutes.js';
import logoutRoutes from './routes/userManagementRoutes.js';
import sessionValidationRoutes from './routes/ValidationRoutes.js';
import updateProfileRoutes from './routes/userManagementRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import balanceInquiryRoutes from './routes/balanceInquiryRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import passwordResetRoutes from './routes/passwordResetRoutes.js';
import transactionHistoryRoutes from './routes/transactionHistoryRoutes.js';
import supportRoutes from './routes/supportRoutes.js';
import airtimePurchaseRoutes from './routes/airtimePurchaseRoutes.js';
import crowdfundingRoutes from './routes/crowdfundingRoutes.js';
import cryptoExchangeRoutes from './routes/cryptoExchangeRoutes.js';
import servicePaymentRoutes from './routes/servicePaymentRoutes.js';
import registerRoutes from './routes/userManagementRoutes.js'; // Updated to userManagementRoutes

const app = express();
app.use(json());

// Use the routes
app.use('/api', loginRoutes);
app.use('/api', logoutRoutes);
app.use('/api', sessionValidationRoutes);
app.use('/api', updateProfileRoutes);
app.use('/api', transactionRoutes);
app.use('/api', balanceInquiryRoutes);
app.use('/api', notificationRoutes);
app.use('/api', passwordResetRoutes);
app.use('/api', transactionHistoryRoutes);
app.use('/api', supportRoutes);
app.use('/api', airtimePurchaseRoutes);
app.use('/api', crowdfundingRoutes);
app.use('/api', cryptoExchangeRoutes);
app.use('/api', servicePaymentRoutes);

// Register user-related routes
app.use('/api/users', registerRoutes);  // This will handle all user-related API endpoints

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
;