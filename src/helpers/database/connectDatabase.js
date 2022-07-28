const mongoose = require('mongoose');
const { mongoDb } = require('../../config/config');

const conntectDatabase = () => {
    mongoose.connect(mongoDb).then( () => {
        console.log('MongoDb conntection successful');
    }).catch(err => {
        console.error(err);
    });
};

module.exports = {
    conntectDatabase,
};
