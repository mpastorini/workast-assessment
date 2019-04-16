import httpStatus from "http-status";

module.exports = function badRequest(errorCode, errors) {
  Error.captureStackTrace(this, this.constructor);

  this.name = httpStatus["400_NAME"];
  this.message = httpStatus["400_MESSAGE"];
  this.statusCode = httpStatus.BAD_REQUEST;
  this.errorCode = errorCode;
  this.errors = errors;
};