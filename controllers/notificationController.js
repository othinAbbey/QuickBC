import { sendNotification } from '../services/notificationService.js';

const notify = (req, res) => {
  const { phoneNumber, message } = req.body;

  try {
    const response = sendNotification(phoneNumber, message);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Failed to send notification', error: error.message });
  }
};

export { notify };
