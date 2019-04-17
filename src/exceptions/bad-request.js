import httpStatus from "http-status";

/**
 * @description Bad Request exception
 * @param errorCode {String}
 * @param errors {Object}
 */
module.exports = function BadRequest(errorCode, errors) {
  Error.captureStackTrace(this, this.constructor);

  this.name = httpStatus["400_NAME"];
  this.message = httpStatus["400_MESSAGE"];
  this.statusCode = httpStatus.BAD_REQUEST;
  this.errorCode = errorCode;
  if(errors) this.errors = errors;
};