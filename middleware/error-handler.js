const errorHandlerMiddleware = (err, req, res, next) => {
  return res
    .status(err.status)
    .json({ msg: "Something went wrong, Please try again" });
};

module.exports = errorHandlerMiddleware;
