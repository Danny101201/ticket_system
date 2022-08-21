const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const { createProxyMiddleware } = require('http-proxy-middleware');
const API_SERVICE_URL = "https://jsonplaceholder.typicode.com";
const app = next({
  dev
})
const { version, name } = require('./package.json');
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    const server = express();
    server.all('*', (req, res) =>  handle(req, res))
    server.use('/posts', createProxyMiddleware({
      target: API_SERVICE_URL,
      changeOrigin: true
    }))
    server.listen(3000, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port 3000 `);
      console.log(name, version);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
