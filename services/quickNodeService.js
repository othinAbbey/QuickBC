// services/quickNodeService.js
import { quickNodeApiUrl } from '../config';

async function sendTransaction(data) {
  try {
    const response = await fetch(`${quickNodeApiUrl}/sendTransaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending transaction:', error);
    throw error;
  }
}

async function getTransactionStatus(transactionId) {
  try {
    const response = await fetch(`${quickNodeApiUrl}/transaction/${transactionId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching transaction status:', error);
    throw error;
  }
}

export {
  sendTransaction,
  getTransactionStatus,
};
