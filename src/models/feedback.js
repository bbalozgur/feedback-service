const { Schema, model } = require('mongoose');

const FeedBackSchema = new Schema(
    {
        feedback: { type: String },
        host: { type: String },
    },
    { 
       timestamps: true,
       versionKey: false,
    }, 
);

module.exports = model('FeedBack', FeedBackSchema);