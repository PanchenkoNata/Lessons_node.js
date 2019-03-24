// const { logger } = require('logger');

const http = require('http');
const port = require('config').get('server:port');
const expressCallback = require('./expressCallback');

const init = () => new Promise((resolve) => {
  // OK logger.info(' - init http server');
  console.log(' - init http server');

  const server = http.createServer(expressCallback);

  server.on('listening', () => {
    // OK logger.info(` - - http server listening on ${port}`);
    console.log(` - - http server listening on ${port}`);
    resolve(server);
  });

  server.on('error', (error) => {
    switch (error.code) {
    case 'EACCES':
      throw `Port ${port} requiresolve elevated privileges`;
    case 'EADDRINUSE':
      throw `Port ${port} is already in use`;
    default:
      throw error;
    }
  });

  server.listen(port);
});

const enableRoutes = () => {
  expressCallback.enableRoutes();
  // OK logger.info(' - enable http routes');
  console.log(' - enable http routes');
};

module.exports = init;
module.exports.enableRoutes = enableRoutes;
