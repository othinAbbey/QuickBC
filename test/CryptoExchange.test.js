// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("CryptoExchange Contract", function () {
//     let cryptoExchange;
//     let stablecoin;
//     let bitcoin;
//     let owner;
//     let addr1;

//     before(async function () {
//         [owner, addr1] = await ethers.getSigners();
//         const Token = await ethers.getContractFactory("Token");
//         stablecoin = await Token.deploy("Stablecoin", "STC", 18, ethers.utils.parseEther("1000"));
//         bitcoin = await Token.deploy("Bitcoin", "BTC", 18, ethers.utils.parseEther("10"));

//         const CryptoExchange = await ethers.getContractFactory("CryptoExchange");
//         cryptoExchange = await CryptoExchange.deploy(stablecoin.address, bitcoin.address);
//         await cryptoExchange.deployed();
//     });

//     describe("Exchanges", function () {
//         it("Should allow a user to exchange stablecoin for bitcoin", async function () {
//             const stablecoinAmount = ethers.utils.parseEther("1");
//             const bitcoinAmount = await cryptoExchange.getExchangeRate(stablecoinAmount);

//             await stablecoin.connect(addr1).approve(cryptoExchange.address, stablecoinAmount);
//             await cryptoExchange.connect(addr1).exchangeStablecoinForBitcoin(stablecoinAmount);

//             const bitcoinBalance = await bitcoin.balanceOf(addr1.address);
//             expect(bitcoinBalance).to.equal(bitcoinAmount);
//         });
//     });
// });
