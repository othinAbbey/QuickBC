import { initiateExchange, getExchangeRate }  from '../services/cryptoExchangeService.js';

const initiate = (req, res) => {
  const { phoneNumber, fromCurrency, toCurrency, amount } = req.body;

  try {
    const response = initiateExchange(phoneNumber, fromCurrency, toCurrency, amount);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const rate = (req, res) => {
  const { fromCurrency, toCurrency } = req.body;

  try {
    const response = getExchangeRate(fromCurrency, toCurrency);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { initiate, rate };
