// OK const { logger } = require('logger');

const httpServer = require('./http');

const init = async () => {
  // OK logger.info('Init web servers');
  console.log('Init web servers');
  await httpServer();

  httpServer.enableRoutes();
};

module.exports = init;
