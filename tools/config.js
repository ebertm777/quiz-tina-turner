const s3FolderName = require('../package.json').name;

import {
  METATAG_DESCRIPTION,
  METATAG_IMAGE_ALT,
} from '../src/constants/global';

const channelPath = process.env.INFO_CHANNEL === 'epoca' ? 'epoca/' : '';

export const infograficoDetails = {
  paths: {
    prod: {
      cloudfront: `https://deoliyp60f2gq.cloudfront.net/${channelPath}${s3FolderName}/`,
      s3: `https://infograficos-estaticos.s3.amazonaws.com/${s3FolderName}/`,
    },
    qlt: {
      cloudfront: `https://d3nsmfunra0tur.cloudfront.net/${channelPath}${s3FolderName}/`,
      s3: `https://infograficos-estaticos-dev.s3.amazonaws.com/${s3FolderName}/`,
    },
  },
  metaTags: {
    themeColor: '#1E4C9A',
    fbAppId: '431855430329169',
    ogImageAlt: { METATAG_IMAGE_ALT },
    ogDescription: { METATAG_DESCRIPTION },
  },
};
