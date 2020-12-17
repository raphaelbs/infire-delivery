const trackCustomEvent = require('gatsby-plugin-google-analytics');
const Sentry = require('@sentry/browser');
const { CaptureConsole } = require('@sentry/integrations');

const { initializeEcommerce } = require('./src/utils/ga');

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onClientEntry = () => {
  if (process.env.NODE_ENV === 'development' || process.env.CI === 'true') {
    return;
  }

  Sentry.init({
    dsn: 'https://7fd6de81b2484ea18e6392ddd131ddb4@sentry.io/5170131',
    // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
    environment: process.env.NODE_ENV,
    enabled: process.env.NODE_ENV === 'production' && process.env.CI !== 'true',
    release: `infire@${process.env.BUILD_ID}`,
    integrations: [
      new CaptureConsole({
        levels: ['error'],
      })
    ],
  });

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    e.userChoice.then(choiceResult => {
      trackCustomEvent({
        category: 'add-to-homescreen',
        action: 'prompt',
        value: choiceResult.outcome,
      });
    });
  });

  initializeEcommerce();
};