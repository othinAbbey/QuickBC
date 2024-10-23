import { getHelpInfo } from '../services/supportService.js';

const help = (req, res) => {
  try {
    const response = getHelpInfo();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve help information', error: error.message });
  }
};

export { help };
