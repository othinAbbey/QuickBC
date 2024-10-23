import chaiPkg from 'chai';
const { expect } = chaiPkg;
import hardhatPkg from 'hardhat';
const { ethers } = hardhatPkg;

describe("AirtimePurchase Contract", function () {
    let airtimePurchase;
    let owner;
    let addr1;

    before(async function () {
        [owner, addr1] = await ethers.getSigners();
        const AirtimePurchase = await ethers.getContractFactory("AirtimePurchase");
        airtimePurchase = await AirtimePurchase.deploy();
        await airtimePurchase.deployed();
    });

    describe("Airtime Purchases", function () {
        it("Should allow a user to purchase airtime", async function () {
            const purchaseAmount = ethers.utils.parseEther("1");

            await airtimePurchase.connect(addr1).purchaseAirtime({ value: purchaseAmount });

            const contractBalance = await airtimePurchase.getBalance();
            expect(contractBalance).to.equal(purchaseAmount);
        });

        it("Should allow the owner to withdraw funds", async function () {
            const initialOwnerBalance = await ethers.provider.getBalance(owner.address);

            await airtimePurchase.connect(owner).withdraw();

            const finalOwnerBalance = await ethers.provider.getBalance(owner.address);
            expect(finalOwnerBalance).to.be.above(initialOwnerBalance);
        });
    });
});
