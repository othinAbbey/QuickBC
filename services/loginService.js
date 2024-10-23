import pkg from 'jsonwebtoken';
const { sign } = pkg;

// Mock user data
const users = [
  { phoneNumber: '1234567890', pin: '1234' },
  { phoneNumber: '0987654321', pin: '5678' }
];

const loginUser = (phoneNumber, pin) => {
  const user = users.find(u => u.phoneNumber === phoneNumber && u.pin === pin);

  if (user) {
    const token = sign({ phoneNumber }, 'your_secret_key', { expiresIn: '1h' });
    return { token, expiresIn: 3600 };
  } else {
    throw new Error('Invalid credentials');
  }
};

export { loginUser };
