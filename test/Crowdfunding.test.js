// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Crowdfunding Contract", function () {
//     let crowdfunding;
//     let owner;
//     let addr1;

//     before(async function () {
//         [owner, addr1] = await ethers.getSigners();
//         const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
//         crowdfunding = await Crowdfunding.deploy();
//         await crowdfunding.deployed();
//     });

//     describe("Campaigns", function () {
//         it("Should create a new campaign", async function () {
//             const goal = ethers.utils.parseEther("10");
//             const duration = 60 * 60 * 24 * 30; // 30 days

//             await crowdfunding.connect(owner).createCampaign(goal, duration);

//             const campaignDetails = await crowdfunding.getCampaignDetails(1);
//             expect(campaignDetails[1]).to.equal(goal);
//             expect(campaignDetails[2]).to.be.above(0);
//             expect(campaignDetails[3]).to.equal(0);
//             expect(campaignDetails[4]).to.be.false;
//         });

//         it("Should allow contributions to a campaign", async function () {
//             const contributionAmount = ethers.utils.parseEther("1");

//             await crowdfunding.connect(addr1).contribute(1, { value: contributionAmount });

//             const contribution = await crowdfunding.getContribution(1, addr1.address);
//             expect(contribution).to.equal(contributionAmount);
//         });

//         it("Should complete a campaign and distribute funds", async function () {
//             const goal = ethers.utils.parseEther("10");
//             const contributionAmount = ethers.utils.parseEther("10");

//             await crowdfunding.connect(owner).createCampaign(goal, 1);
//             await crowdfunding.connect(addr1).contribute(2, { value: contributionAmount });

//             // Wait for the campaign to end
//             await ethers.provider.send("evm_increaseTime", [2]);
//             await ethers.provider.send("evm_mine", []);

//             await crowdfunding.connect(owner).completeCampaign(2);

//             const campaignDetails = await crowdfunding.getCampaignDetails(2);
//             expect(campaignDetails[4]).to.be.true;
//         });
//     });
// });
