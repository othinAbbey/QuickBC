// // checkUserRegistration.js
// import { getUserAccount } from '../../services/accountService.js';

// const checkUserRegistration = async (req, res, next) => {
//   const { phoneNumber } = req.body;

//   try {
//     const userAccount = await getUserAccount(phoneNumber);
//     if (userAccount) {
//       return res.status(400).json({ message: 'User already registered.' });
//     }
//     next();
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to check user registration.' });
//   }
// };

// export { checkUserRegistration };


// checkUserRegistration.js
import { getUserAccount } from '../../services/accountService.js';

const checkUserRegistration = async (req, res, next) => {
  const { phoneNumber } = req.body;

  try {
    const userAccount = await getUserAccount(phoneNumber);
    if (userAccount) {
      return res.status(400).json({ message: 'User already registered.' });
    }
    next();
  } catch (error) {
    console.error('Error checking user registration:', error);
    res.status(500).json({ message: 'Failed to check user registration.' });
  }
};

export { checkUserRegistration };
