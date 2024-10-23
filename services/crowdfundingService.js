const campaigns = [];

// Function to create a new campaign
const createCampaign = (phoneNumber, title, goal) => {
  const campaignId = campaigns.length + 1;
  const newCampaign = { campaignId, phoneNumber, title, goal, amountRaised: 0 };
  campaigns.push(newCampaign);
  return { message: 'Campaign created successfully', campaignId };
};

// Function to contribute to a campaign
const contributeToCampaign = (campaignId, amount) => {
  const campaign = campaigns.find(c => c.campaignId === campaignId);
  if (campaign) {
    campaign.amountRaised += amount;
    return { message: 'Contribution successful', amountRaised: campaign.amountRaised };
  } else {
    throw new Error('Campaign not found');
  }
};

// Function to check campaign status
const getCampaignStatus = (campaignId) => {
  const campaign = campaigns.find(c => c.campaignId === campaignId);
  if (campaign) {
    return { campaignId: campaign.campaignId, title: campaign.title, goal: campaign.goal, amountRaised: campaign.amountRaised };
  } else {
    throw new Error('Campaign not found');
  }
};

export { createCampaign, contributeToCampaign, getCampaignStatus };
