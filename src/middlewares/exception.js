import httpStatus from "http-status";
import { API_CONFIG } from "../constants";

/**
 * @description Centralize exceptions thrown by express controllers
 */
export default async function (error, request, response, next) {
  if (API_CONFIG.ENVIRONMENT !== API_CONFIG.ENVIRONMENTS.TEST) console.error("Exception middleware: ", error);
  if (API_CONFIG.ENVIRONMENT !== API_CONFIG.ENVIRONMENTS.DEVELOPMENT) delete error.stack;
  const errorString = (error && error.statusCode) ? error : API_CONFIG.INTERNAL_ERROR_MESSAGE;

  await response.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json(errorString);
  next();
}