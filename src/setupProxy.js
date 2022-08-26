const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(createProxyMiddleware('/stardust', { target: 'http://localhost:8080' }));
  // app.use(createProxyMiddleware('/tournament', { target: 'http://localhost:8000' }));
  // app.use(createProxyMiddleware('/winLoss', { target: 'http://localhost:8000' }));
  // app.use(createProxyMiddleware('/match', { target: 'http://localhost:8000' }));
  // app.use(createProxyMiddleware('/products', { target: 'http://localhost:9020' }));
  // app.use(createProxyMiddleware('/api', { target: 'http://localhost:8000' }));
  // app.use(createProxyMiddleware('/auth', { target: 'http://localhost:8000' }));

  app.use(
    createProxyMiddleware('/stardust', {
      target: 'http://tflstaging.cubestagearea.xyz',
    })
  );
  app.use(
    createProxyMiddleware('/tournament', {
      target: 'http://tflstaging.cubestagearea.xyz',
    })
  );
  app.use(
    createProxyMiddleware('/match', {
      target: 'http://tflstaging.cubestagearea.xyz',
    })
  );
  app.use(
    createProxyMiddleware('/products', {
      target: 'http://tflstaging.cubestagearea.xyz',
    })
  );
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://tflstaging.cubestagearea.xyz',
    })
  );
  app.use(
    createProxyMiddleware('/auth', {
      target: 'http://tflstaging.cubestagearea.xyz',
    })
  );
};
