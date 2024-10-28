// config.js
import dotenv from 'dotenv';
dotenv.config(); // This loads environment variables from a .env file into process.env

// export const quickNodeApiUrl = `https://api.quicknode.com/v1/${process.env.QUICKNODE_API_KEY}/celo/${process.env.CELO_NETWORK}`;
export const quickNodeApiUrl = `https://alfajores-forno.celo-testnet.org`;
