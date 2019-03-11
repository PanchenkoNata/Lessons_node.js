const env = process.env.NODE_ENV;
const loggerEnabled = require('config').get('logger:enabled');

const devLogger = requite('./dev');
const prodLogger = require('./prod');





let logger = null;

if (loggerEnabled === false) {
  logger = console;
} else if (env === 'development');

const dbRunner = require('./runners/db');

const webRunner = require('./runners/web');

//connect to BD
//init web
//init http server
//http server

Promise.resolve()
  .then(dbRunner)  
  .then(webRunner)
  .then(() => {
    logger.info('    ');
  })
  .catch((error) => {
    logger.error('     ');
    setTimeout(() => process.exit(1), 15000);
  });
