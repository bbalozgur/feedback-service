const express = require('express');
const logger = require('morgan');
const { conntectDatabase } = require('./helpers/database/connectDatabase');
const cors = require('cors');

conntectDatabase();

const app = express();

app.use(cors());

const indexRouter = require('./routes');

app.use(logger('dev'));
app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send({ status: 'ok', time: new Date() }));

app.use('/', indexRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT,  () => {
    console.log(`Started listening on port: ${process.env.PORT || 3400}`);
  })
}

module.exports = app;
