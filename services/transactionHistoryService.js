const transactions = [
    { transactionId: 1, phoneNumber: '1234567890', amount: 100, recipient: '0987654321', status: 'completed', date: '2024-10-01' },
    { transactionId: 2, phoneNumber: '1234567890', amount: 50, recipient: '0987654321', status: 'completed', date: '2024-10-05' },
    { transactionId: 3, phoneNumber: '0987654321', amount: 200, recipient: '1234567890', status: 'completed', date: '2024-10-10' }
  ];
  
  // Function to get user transaction history
  const getTransactionHistory = (phoneNumber) => {
    const userTransactions = transactions.filter(t => t.phoneNumber === phoneNumber);
    if (userTransactions.length > 0) {
      return userTransactions;
    } else {
      throw new Error('No transactions found for this user');
    }
  };
  
  export { getTransactionHistory };
  