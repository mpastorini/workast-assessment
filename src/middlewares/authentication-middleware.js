// import httpStatus from "http-status";
import { API_CONFIG, EXCEPTIONS } from "app/constants";
import UnauthorizedException from "app/exceptions/unauthorized";

/**
 * @description Centralize exceptions thrown by express controllers
 */
export default async function(request, response, next) {
  if(!request.headers["authorization"])
    throw new UnauthorizedException(EXCEPTIONS.UNAUTHORIZED.TOKEN_REQUIRED);

  if(request.headers["authorization"] !== API_CONFIG.AUTH_TOKEN)
    throw new UnauthorizedException(EXCEPTIONS.UNAUTHORIZED.TOKEN_UNAUTHORIZED);

  next();
}