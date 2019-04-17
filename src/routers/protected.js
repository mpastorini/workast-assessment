import express from "express";
require("express-async-errors");

import ROUTES from "app/constants/routes";
import { authenticationMiddleware } from "app/middlewares";
import { 
  protectedStatusController, 
  createUserController,
  createArticleController
} from "app/controllers";

/**
 * @description privated resources router
 */
export default express.Router()
  .use(authenticationMiddleware)
  .post(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.ARTICLES.ROUTE, createArticleController)
  .post(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.USERS.ROUTE, createUserController)
  .get(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.STATUS.ROUTE, protectedStatusController);