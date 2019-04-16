import httpStatus from "http-status";

module.exports = function UnauthorizedException(message) {
  Error.captureStackTrace(this, this.constructor);

  this.name = httpStatus[`${httpStatus.UNAUTHORIZED}_NAME`];
  this.statusCode = httpStatus.UNAUTHORIZED;
  this.message = message;
};