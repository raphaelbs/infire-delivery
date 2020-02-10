const trackCustomEvent = require('gatsby-plugin-google-analytics');

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onClientEntry = () => {
  window.addEventListener('beforeinstallprompt', e => {
    e.userChoice.then(choiceResult => {
      trackCustomEvent({
        category: 'add-to-homescreen',
        action: 'prompt',
        value: choiceResult.outcome,
      })
    });
  });
}