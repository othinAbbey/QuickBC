require('dotenv').config();
require('@nomicfoundation/hardhat-ethers');
const { ContractKit } = require('@celo/contractkit');
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.27",
  networks: {
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: [`0x${process.env.CELO_PRIVATE_KEY}`]  // use private key here, not account address
    },
    celo: {
      url: 'https://forno.celo.org',
      accounts: [`0x${process.env.CELO_PRIVATE_KEY}`]  // same private key for mainnet
    }
  }
};
