// Line: 1 - 17
// connectionMiddleware.js
import { getUserAccount } from '../../services/accountService.js';

const connectUserAccount = async (req, res, next) => {
  const { phoneNumber } = req.user;

  try {
    const userAccount = await getUserAccount(phoneNumber);
    if (!userAccount) {
      return res.status(404).json({ message: 'User account not found.' });
    }
    req.userAccount = userAccount;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to user account.' });
  }
};

export { connectUserAccount };
