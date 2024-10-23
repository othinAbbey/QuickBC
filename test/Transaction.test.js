// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Transaction Contract", function () {
//     let transaction;
//     let owner;
//     let addr1;

//     before(async function () {
//         [owner, addr1] = await ethers.getSigners();
//         const Transaction = await ethers.getContractFactory("Transaction");
//         transaction = await Transaction.deploy();
//         await transaction.deployed();
//     });

//     describe("Transactions", function () {
//         it("Should send tokens", async function () {
//             const sendAmount = ethers.utils.parseEther("1");
//             await transaction.connect(owner).sendTokens(addr1.address, { value: sendAmount });

//             const balance = await ethers.provider.getBalance(addr1.address);
//             expect(balance).to.be.above(sendAmount);
//         });

//         it("Should receive tokens", async function () {
//             const receiveAmount = ethers.utils.parseEther("1");
//             await transaction.connect(addr1).receiveTokens({ value: receiveAmount });

//             const contractBalance = await transaction.getBalance();
//             expect(contractBalance).to.equal(receiveAmount);
//         });
//     });
// });
