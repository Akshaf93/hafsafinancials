import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Found in Settings
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Found in Settings > API Keys
});