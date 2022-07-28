const { handler } = require('../../utils/requestHelper');
const FeedBackService = require('../../services/v1/feedback');

exports.createFeedBack = handler(( request ) => {
    const { body = {}, headers } = request;
    
    const { host } = headers;

    if (!host) {
        throw new Error(JSON.stringify({ statusCode: 400, message: {error: "Missing host field"} }))
    }

    const { feedback } = body;
    if (!feedback) {
        throw new Error(JSON.stringify({ statusCode: 400, message: {error: "Missing feedback field"} }))
    }

    
    const requestFields = { feedback: body.feedback, host }
    return FeedBackService.createFeedBack(requestFields);
});

exports.getFeedBack = handler(( request ) => {
    const { host } = request.params;

    if (!host) {
        throw new Error(JSON.stringify({ statusCode: 400, message: { error: 'Missing feedback host field' } }));
    }

    return FeedBackService.getFeedBack(host);
});

