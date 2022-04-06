import http from 'http';
import app from './app.js';

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running in http://localhost:${port}`);
});
