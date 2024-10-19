const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ServicePayment Contract", function () {
    let servicePayment;
    let owner;
    let addr1;

    before(async function () {
        [owner, addr1] = await ethers.getSigners();
        const ServicePayment = await ethers.getContractFactory("ServicePayment");
        servicePayment = await ServicePayment.deploy();
        await servicePayment.deployed();
    });

    describe("Service Payments", function () {
        it("Should allow a user to pay for a service", async function () {
            const serviceId = "service123";
            const paymentAmount = ethers.utils.parseEther("1");

            await servicePayment.connect(addr1).payForService(serviceId, { value: paymentAmount });

            const contractBalance = await servicePayment.getBalance();
            expect(contractBalance).to.equal(paymentAmount);
        });

        it("Should allow the owner to withdraw funds", async function () {
            const initialOwnerBalance = await ethers.provider.getBalance(owner.address);

            await servicePayment.connect(owner).withdraw();

            const finalOwnerBalance = await ethers.provider.getBalance(owner.address);
            expect(finalOwnerBalance).to.be.above(initialOwnerBalance);
        });
    });
});
