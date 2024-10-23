const hre = require("hardhat");

async function main() {
     // Set up the provider with QuickNode Celo RPC endpoint
     const provider = new ethers.providers.JsonRpcProvider("https://alfajores-forno.celo-testnet.org");
     const wallet = new ethers.Wallet(process.env.CELO_PRIVATE_KEY, provider);

    // Deploy UserRegistration contract
    const UserRegistration = await hre.ethers.getContractFactory("UserRegistration");
    const userRegistration = await UserRegistration.deploy();
    await userRegistration.deployed();
    console.log("UserRegistration deployed to:", userRegistration.address);

    // Deploy Transaction contract
    const Transaction = await hre.ethers.getContractFactory("Transaction");
    const transaction = await Transaction.deploy();
    await transaction.deployed();
    console.log("Transaction deployed to:", transaction.address);

    // Deploy BalanceInquiry contract
    const BalanceInquiry = await hre.ethers.getContractFactory("BalanceInquiry");
    const balanceInquiry = await BalanceInquiry.deploy();
    await balanceInquiry.deployed();
    console.log("BalanceInquiry deployed to:", balanceInquiry.address);

      // Deploy ServicePayment contract
      const ServicePayment = await hre.ethers.getContractFactory("ServicePayment");
      const servicePayment = await ServicePayment.deploy();
      await servicePayment.deployed();
      console.log("ServicePayment deployed to:", servicePayment.address);

      // Deploy AirtimePurchase contract
    const AirtimePurchase = await hre.ethers.getContractFactory("AirtimePurchase");
    const airtimePurchase = await AirtimePurchase.deploy();
    await airtimePurchase.deployed();
    console.log("AirtimePurchase deployed to:", airtimePurchase.address);

     // Deploy Crowdfunding contract
    //  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
    //  const crowdfunding = await Crowdfunding.deploy();
    //  await crowdfunding.deployed();
    //  console.log("Crowdfunding deployed to:", crowdfunding.address);

     // Deploy CryptoExchange contract
    // const stablecoinAddress = "0x..."; // Replace with actual stablecoin contract address
    // const bitcoinAddress = "0x..."; // Replace with actual Bitcoin token contract address
    // const CryptoExchange = await hre.ethers.getContractFactory("CryptoExchange");
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
// const hre = require("hardhat");




// async function main() {
//     // Get the contract factory for UserRegistration
//     const UserRegistration = await hre.ethers.getContractFactory("UserRegistration");
//     // Deploy the contract
//     const userRegistration = await UserRegistration.deploy();
//         // Wait for the contract to be deployed
//     await userRegistration.deployed();  // This should work if userRegistration is a contract instance

//     // Log the address of the deployed contract
//     console.log("UserRegistration deployed to:", userRegistration.address);
// }

// // Execute the main function and handle errors
// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });


