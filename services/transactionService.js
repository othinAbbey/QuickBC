const transactions = [];

// Function to send a transaction
const sendTransaction = (phoneNumber, amount, recipient) => {
  const transactionId = transactions.length + 1;
  const newTransaction = { transactionId, phoneNumber, amount, recipient, status: 'pending' };
  transactions.push(newTransaction);
  return { message: 'Transaction initiated', transactionId };
};

// Function to get transaction status
const getTransactionStatus = (transactionId) => {
  const transaction = transactions.find(t => t.transactionId === transactionId);
  if (transaction) {
    return { transactionId: transaction.transactionId, status: transaction.status };
  } else {
    throw new Error('Transaction not found');
  }
};

export { sendTransaction, getTransactionStatus };
