exports.handler = (controller) => async (req, res, next) => {
    try {
        const result = await controller(req);

        res.send(result);
    } catch (error) {
        const { message, statusCode = 500 } = JSON.parse(error.message);

        res.status(statusCode).send(message);
    }

    return next();
}
