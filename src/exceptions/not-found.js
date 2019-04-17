import httpStatus from "http-status";

/**
 * @description Bad Request exception
 * @param errorCode {String}
 * @param errors {Object}
 */
module.exports = function BadRequest(errorCode) {
  Error.captureStackTrace(this, this.constructor);

  this.name = httpStatus["404_NAME"];
  this.message = httpStatus["404_MESSAGE"];
  this.statusCode = httpStatus.NOT_FOUND;
  this.errorCode = errorCode;
};