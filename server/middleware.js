exports.errorHandler = (err, req, res, next) => {
  if (err.status === 400) {
    return res.status(err.status).send('Dude, you should learn JSON');
  }
  return next(err);
};
