import axios from 'axios';

import { AMAZON_S3_URL } from '!/constants/amazonS3';

export const s3Instance = axios.create({
  baseURL: AMAZON_S3_URL,
});
