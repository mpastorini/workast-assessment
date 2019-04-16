import express from "express";
require("express-async-errors"); // Technical Debt 
import ROUTES from "app/constants/routes";
import { protectedStatusController } from "app/controllers";

/**
 * @description privated resources router
 */
export default express.Router()
  .get(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.STATUS.ROUTE, protectedStatusController);