const path = require('path');
const fs = require('fs');

const produtoPath = path.resolve(
  __dirname, '../../_docs/produto'
);

module.exports = (on) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    getProductCount() {
      return fs.readdirSync(produtoPath).length;
    },
  });
};
