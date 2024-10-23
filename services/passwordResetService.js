const users = [
    { phoneNumber: '1234567890', pin: '1234' },
    { phoneNumber: '0987654321', pin: '5678' }
  ];
  
  // Function to request a password reset
  const requestPasswordReset = (phoneNumber) => {
    const user = users.find(u => u.phoneNumber === phoneNumber);
    if (user) {
      // Generate a reset token (for simplicity, we'll use a static token)
      const resetToken = 'reset123';
      return { message: 'Password reset requested', resetToken };
    } else {
      throw new Error('User not found');
    }
  };
  
  // Function to confirm a password reset
  const confirmPasswordReset = (phoneNumber, resetToken, newPin) => {
    const user = users.find(u => u.phoneNumber === phoneNumber);
    if (user && resetToken === 'reset123') {
      user.pin = newPin;
      return { message: 'Password reset successful' };
    } else {
      throw new Error('Invalid reset token or user not found');
    }
  };
  
  export { requestPasswordReset, confirmPasswordReset };
  