import httpStatus from "http-status";
import { API_CONFIG } from "../constants";

/**
 * @description Centralize exceptions thrown by express controllers
 */
export default async function (error, request, response, next) {
  const errorString = (error && error.statusCode) ? error : API_CONFIG.INTERNAL_ERROR_MESSAGE;
  await response.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json(errorString);
  next();
}