const { ethers } = require("hardhat");

async function main() {
  // Set up the provider with QuickNode Celo RPC endpoint
  // const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");
  const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo.org");
  const wallet = new ethers.Wallet(process.env.CELO_PRIVATE_KEY, provider);

  // Deploy UserRegistration contract
  const UserRegistration = await ethers.getContractFactory("UserRegistration");
  const userRegistration = await UserRegistration.deploy();
  await userRegistration.deployed();
  console.log("UserRegistration deployed to:", userRegistration.address);

  // Deploy Transaction contract
  const Transaction = await ethers.getContractFactory("Transaction");
  const transaction = await Transaction.deploy();
  await transaction.deployed();
  console.log("Transaction deployed to:", transaction.address);

  // Deploy BalanceInquiry contract
  const BalanceInquiry = await ethers.getContractFactory("BalanceInquiry");
  const balanceInquiry = await BalanceInquiry.deploy();
  await balanceInquiry.deployed();
  console.log("BalanceInquiry deployed to:", balanceInquiry.address);

  // Deploy ServicePayment contract
  const ServicePayment = await ethers.getContractFactory("ServicePayment");
  const servicePayment = await ServicePayment.deploy();
  await servicePayment.deployed();
  console.log("ServicePayment deployed to:", servicePayment.address);

  // Deploy AirtimePurchase contract
  const AirtimePurchase = await ethers.getContractFactory("AirtimePurchase");
  const airtimePurchase = await AirtimePurchase.deploy();
  await airtimePurchase.deployed();
  console.log("AirtimePurchase deployed to:", airtimePurchase.address);

  // Uncomment and update the following lines if you need to deploy these contracts
  // Deploy Crowdfunding contract
  // const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
  // const crowdfunding = await Crowdfunding.deploy();
  // await crowdfunding.deployed();
  // console.log("Crowdfunding deployed to:", crowdfunding.address);

  // Deploy CryptoExchange contract
  // const stablecoinAddress = "0x..."; // Replace with actual stablecoin contract address
  // const bitcoinAddress = "0x..."; // Replace with actual Bitcoin token contract address
  // const CryptoExchange = await ethers.getContractFactory("CryptoExchange");
  // const cryptoExchange = await CryptoExchange.deploy(stablecoinAddress, bitcoinAddress);
  // await cryptoExchange.deployed();
  // console.log("CryptoExchange deployed to:", cryptoExchange.address);
}

// Execute the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
