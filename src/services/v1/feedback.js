const FeedBackDataAccess = require('../../dataAccess/v1/feedback');

exports.createFeedBack = async (requestFields) => {
    return await FeedBackDataAccess.createFeedBack(requestFields);
};

exports.getFeedBack = async (requestParams) => {
    return await FeedBackDataAccess.getFeedBack(requestParams);
};