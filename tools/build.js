// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from 'webpack';

import configEmbed from '../webpack/webpack.config.embed';
import configProd from '../webpack/webpack.config.prod';
import {
  chalkError,
  chalkProcessing,
  chalkSuccess,
  chalkWarning,
} from './chalkConfig';
import { hasCommandFlag } from './utils';

// this assures React is built in prod mode and that the Babel dev config doesn't apply.
process.env.NODE_ENV = 'production';

const webpackCallback = (error, stats) => {
  if (error) {
    // so a fatal error occurred. Stop here.
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (stats.hasErrors && jsonStats.errors.length > 0) {
    return jsonStats.errors.map((error) => console.log(chalkError(error)));
  }

  if (stats.hasWarnings && jsonStats.warnings.length > 0) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map((warning) => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(
    chalkSuccess(
      "Your app is compiled in production mode in /dist. It's ready to roll!",
    ),
  );

  return 0;
};
console.log(
  chalkProcessing('Generating minified bundle. This will take a moment...'),
);
webpack(configProd).run(webpackCallback);

// Embed logic
if (hasCommandFlag('--embed')) {
  console.log(
    chalkProcessing('Generating app embed. This will take a moment...'),
  );
  const config = { ...configProd, ...configEmbed };
  webpack(config).run(webpackCallback);
}
