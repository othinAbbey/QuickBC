const users = [
    { phoneNumber: '1234567890', balance: 1000 },
    { phoneNumber: '0987654321', balance: 500 }
  ];
  
  // Function to get user balance
  const getUserBalance = (phoneNumber) => {
    const user = users.find(u => u.phoneNumber === phoneNumber);
    if (user) {
      return { phoneNumber: user.phoneNumber, balance: user.balance };
    } else {
      throw new Error('User not found');
    }
  };
  
  export { getUserBalance };
  