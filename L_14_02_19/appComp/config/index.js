// N_This file is from Alex
// N_Creating config for application
// N_from all files in folder congid

const nconf = require('nconf');
const path = require('path');
const fs = require('fs-extra');

nconf.env();

const configFiles = fs.readdirSync(__dirname).filter((file) => {
  if (path.extname(file) !== '.js' || path.basename(file) === 'index.js') {
    return false;
  }
  return true;
});

configFiles.forEach((filename) => {
  const configName = path.basename(filename, '.js');
  const filepath = path.resolve(__dirname, filename);
  const store = require(filepath); // N filepath is without '' because we want to use it for add config

  nconf.add(configName, {
    type: 'literal',
    store,
  });
});

module.exports = nconf;
