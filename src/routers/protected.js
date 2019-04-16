import express from "express";
require("express-async-errors"); // Technical Debt 
import ROUTES from "app/constants/routes";
import { protectedStatusController } from "app/controllers";
import { authenticationMiddleware } from "app/middlewares";

/**
 * @description privated resources router
 */
export default express.Router()
  .use(authenticationMiddleware)
  .get(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.STATUS.ROUTE, protectedStatusController);