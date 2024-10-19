
require('dotenv').config();
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("UserRegistration Contract", function () {
    let userRegistration;
    let owner;
    let addr1;

    before(async function () {
        [owner, addr1] = await ethers.getSigners();
        const UserRegistration = await ethers.getContractFactory("UserRegistration");
        userRegistration = await UserRegistration.deploy();
        await userRegistration.deployed();  // Ensure this line is executed
    });

    describe("User Registration", function () {
        it("Should register a new user", async function () {
            const phoneNumber = "1234567890";

            // addr1 is registering with their phone number
            await userRegistration.connect(addr1).registerUser(phoneNumber);

            const userInfo = await userRegistration.getUserInfo(phoneNumber);
            expect(userInfo.walletAddress).to.equal(addr1.address);
            expect(userInfo.phoneNumber).to.equal(phoneNumber);
            expect(userInfo.isRegistered).to.be.true;
            expect(userInfo.isVerified).to.be.false;
        });
    });
});

// require('dotenv').config();
// const { ethers } = require("hardhat");
// const { expect } = require("chai");
// describe("UserRegistration Contract", function () {
//     let userRegistration;
//     let owner;
//     let addr1;
     
//     before(async function () {
//         const UserRegistration = await ethers.getContractFactory("UserRegistration");
//         userRegistration = await UserRegistration.deploy();
//         await userRegistration.deployed();  // Ensure this line is executed
//       });

//     describe("User Registration", function () {
//         it("Should register a new user", async function () {
//             const phoneNumber = "1234567890";

//             // addr1 is registering with their phone number
//             await userRegistration.connect(addr1).registerUser(phoneNumber);

//             const userInfo = await userRegistration.getUserInfo(phoneNumber);
//             expect(userInfo.walletAddress).to.equal(addr1.address); // Ensure it's addr1's address
//             expect(userInfo.isRegistered).to.be.true;
//             expect(userInfo.isVerified).to.be.false;
//         });

//         it("Should not allow the same user to register again", async function () {
//             const phoneNumber = "1234567890";

//             // addr1 tries to register the same phone number again
//             await expect(userRegistration.connect(addr1).registerUser(phoneNumber))
//                 .to.be.revertedWith("User already registered");
//         });

//         it("Should verify a user", async function () {
//             const phoneNumber = "1234567890";

//             // Owner verifies addr1
//             await userRegistration.connect(owner).verifyUser(phoneNumber);

//             const userInfo = await userRegistration.getUserInfo(phoneNumber);
//             expect(userInfo.isVerified).to.be.true;
//         });

//         it("Should not allow verification of unregistered user", async function () {
//             const phoneNumber = "0987654321"; // Unregistered number

//             // Try verifying an unregistered user
//             await expect(userRegistration.connect(owner).verifyUser(phoneNumber))
//                 .to.be.revertedWith("User not found");
//         });
//     });
// });
