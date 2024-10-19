const { Wallet } = require('ethers');

// Create a new wallet
const wallet = Wallet.createRandom();

// Output the private key and address
console.log('Private Key:', wallet.privateKey);
console.log('Address:', wallet.address);
