import { createCampaign, contributeToCampaign, getCampaignStatus } from '../services/crowdfundingService.js';

const create = (req, res) => {
  const { phoneNumber, title, goal } = req.body;

  try {
    const response = createCampaign(phoneNumber, title, goal);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create campaign', error: error.message });
  }
};

const contribute = (req, res) => {
  const { campaignId, amount } = req.body;

  try {
    const response = contributeToCampaign(campaignId, amount);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const status = (req, res) => {
  const { campaignId } = req.body;

  try {
    const response = getCampaignStatus(campaignId);
    res.json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { create, contribute, status };
