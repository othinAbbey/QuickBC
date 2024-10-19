// // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// contract Crowdfunding {
//     struct Campaign {
//         address payable creator;
//         uint256 goal;
//         uint256 deadline;
//         uint256 fundsRaised;
//         bool completed;
//     }

//     mapping(uint256 => Campaign) public campaigns;
//     mapping(uint256 => mapping(address => uint256)) public contributions;
//     uint256 public campaignCount;

//     event CampaignCreated(uint256 indexed campaignId, address indexed creator, uint256 goal, uint256 deadline);
//     event ContributionMade(uint256 indexed campaignId, address indexed contributor, uint256 amount);
//     event CampaignCompleted(uint256 indexed campaignId, uint256 totalFunds);

//     function createCampaign(uint256 goal, uint256 duration) public {
//         require(goal > 0, "Goal must be greater than zero");
//         require(duration > 0, "Duration must be greater than zero");

//         campaignCount++;
//         campaigns[campaignCount] = Campaign({
//             creator: payable(msg.sender),
//             goal: goal,
//             deadline: block.timestamp + duration,
//             fundsRaised: 0,
//             completed: false
//         });

//         emit CampaignCreated(campaignCount, msg.sender, goal, block.timestamp + duration);
//     }

//     function contribute(uint256 campaignId) public payable {
//         Campaign storage campaign = campaigns[campaignId];
//         require(block.timestamp < campaign.deadline, "Campaign has ended");
//         require(!campaign.completed, "Campaign is already completed");

//         campaign.fundsRaised += msg.value;
//         contributions[campaignId][msg.sender] += msg.value;

//         emit ContributionMade(campaignId, msg.sender, msg.value);
//     }

//     function completeCampaign(uint256 campaignId) public {
//         Campaign storage campaign = campaigns[campaignId];
//         require(block.timestamp >= campaign.deadline, "Campaign is still ongoing");
//         require(!campaign.completed, "Campaign is already completed");
//         require(campaign.fundsRaised >= campaign.goal, "Campaign did not reach its goal");

//         campaign.completed = true;
//         campaign.creator.transfer(campaign.fundsRaised);

//         emit CampaignCompleted(campaignId, campaign.fundsRaised);
//     }

//     function getCampaignDetails(uint256 campaignId) public view returns (address, uint256, uint256, uint256, bool) {
//         Campaign storage campaign = campaigns[campaignId];
//         return (campaign.creator, campaign.goal, campaign.deadline, campaign.fundsRaised, campaign.completed);
//     }

//     function getContribution(uint256 campaignId, address contributor) public view returns (uint256) {
//         return contributions[campaignId][contributor];
//     }
// }
