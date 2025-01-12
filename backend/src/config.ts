import 'dotenv/config';

declare global {
  interface ProcessEnv {
    PORT: string;
    NEWS_API_URL: string;
    NEWS_API_KEY: string;
  }
};

if (!process.env.PORT || !process.env.NEWS_API_URL || !process.env.NEWS_API_KEY)
  throw new Error('Please set the environment variables in the .env file');

export default { 
  port: parseInt(process.env.PORT),
  newsApiUrl: process.env.NEWS_API_URL,
  newsApiKey: process.env.NEWS_API_KEY
};