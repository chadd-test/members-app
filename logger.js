const logger = (req, res, next) => {
    console.log(`Currently Logging: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;
