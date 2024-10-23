const exchangeRates = {
    BTC: { USD: 60000, EUR: 50000 },
    ETH: { USD: 4000, EUR: 3500 }
  };
  
  // Function to initiate a crypto exchange
  const initiateExchange = (phoneNumber, fromCurrency, toCurrency, amount) => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    if (!rate) {
      throw new Error('Exchange rate not available');
    }
    const exchangedAmount = amount * rate;
    return { message: 'Exchange initiated', exchangedAmount };
  };
  
  // Function to check exchange rate
  const getExchangeRate = (fromCurrency, toCurrency) => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    if (!rate) {
      throw new Error('Exchange rate not available');
    }
    return { fromCurrency, toCurrency, rate };
  };
  
  export { initiateExchange, getExchangeRate };
  