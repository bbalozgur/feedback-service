const express = require('express');
const logger = require('morgan');
const { conntectDatabase } = require('./helpers/database/connectDatabase');
const cors = require('cors');
const v1Routes = require('./routes/v1');

conntectDatabase();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', time: new Date() }));

app.use('/v1', v1Routes);

if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  });
}

module.exports = app;
