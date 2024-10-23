// Mock support/help information
const helpInfo = `
Welcome to our support service!
1. For balance inquiry, dial *123*1#
2. For transaction history, dial *123*2#
3. For sending money, dial *123*3#
4. For more help, contact our support team at support@example.com
`;

// Function to get help information
const getHelpInfo = () => {
  return { message: helpInfo };
};

export { getHelpInfo };
