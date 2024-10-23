import pkg from 'jsonwebtoken';
const { verify } = pkg;

const validateService = (token) => {
  try {
    verify(token, 'your_secret_key');
    return { isValid: true, message: 'Session is valid' };
  } catch (err) {
    return { isValid: false, message: 'Session is invalid' };
  }
};

export {validateService};
