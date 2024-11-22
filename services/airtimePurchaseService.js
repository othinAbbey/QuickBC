import 'dotenv/config';
import Web3 from 'web3';
import contractABI from '../artifacts/contracts/AirtimePurchase.sol/AirtimePurchase.json' assert { type: 'json' }; // Ensure you have the ABI file

const contractAddress = process.env.AIRTIME_PURCHASE_ADDRESS; // Retrieve contract address from .env

const web3 = new Web3('https://forno.celo.org'); // Celo node URL
// Ensure the ABI is an array
const abi = Array.isArray(contractABI.abi) ? contractABI.abi : JSON.parse(contractABI.abi);
const contract = new web3.eth.Contract(abi, contractAddress);

const purchaseAirtimeSerivce = async (phoneNumber, amount) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const receipt = await contract.methods.purchaseAirtime().send({ 
      from: accounts[0], 
      value: web3.utils.toWei(amount.toString(), 'ether') 
    });
    console.log(`Transaction successful: ${receipt.transactionHash}`);
    return { message: 'Airtime purchase successful', transactionHash: receipt.transactionHash };
  } catch (error) {
    console.error('Blockchain transaction failed', error);
    throw new Error('Blockchain transaction failed');
  }
};

export { purchaseAirtimeSerivce };
