// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("BalanceInquiry Contract", function () {
//     let balanceInquiry;
//     let owner;

//     before(async function () {
//         [owner] = await ethers.getSigners();
//         const BalanceInquiry = await ethers.getContractFactory("BalanceInquiry");
//         balanceInquiry = await BalanceInquiry.deploy();
//         await balanceInquiry.deployed();
//     });

//     describe("Balance Inquiry", function () {
//         it("Should return the correct balance", async function () {
//             const balance = await balanceInquiry.getBalance(owner.address);
//             const expectedBalance = await ethers.provider.getBalance(owner.address);
//             expect(balance).to.equal(expectedBalance);
//         });
//     });
// });
