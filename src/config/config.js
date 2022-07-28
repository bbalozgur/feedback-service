require('dotenv').config();

module.exports = {
    environment: process.env.NODE_ENV,
    server: {
      host: process.env.HOST,
      port: process.env.PORT,
    },
    mongoDb: process.env.MONGO_URI,
};