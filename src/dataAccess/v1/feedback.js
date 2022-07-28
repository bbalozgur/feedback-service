const FeedBack = require('../../models/feedback');

exports.createFeedBack = async (requestFields) => {
    const feedback = await FeedBack.create(requestFields);
    return feedback;
};

exports.getFeedBack = async (host) => {
    const feedback = await FeedBack.find({ host, $maxTimeMS: 10000 });
    return feedback;
};
