const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./routers/auth/authenticate-middleware');
const authRouter = require('./routers/auth/auth-router');
const marketRouter = require('./routers/market/market-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/market', authenticate, marketRouter);

module.exports = server;