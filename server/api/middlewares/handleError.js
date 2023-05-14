const error = require("http-errors");

const notFound = (req, res, next) => {
  next(error.NotFound(`This route doesn't exist!`));
};

const handleErr = (err, req, res, next) => {
  const { stack, status = 400, message } = err;
  if (stack) {
    res.status(status).json({ status, message });
  }
  next();
};

module.exports = { notFound, handleErr };
