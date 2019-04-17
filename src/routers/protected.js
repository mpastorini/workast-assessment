import express from "express";
require("express-async-errors");

import ROUTES from "app/constants/routes";
import { authenticationMiddleware } from "app/middlewares";
import { 
  protectedStatusController, 
  createUserController,
  createArticleController,
  getArticleController,
  listArticlesController,
  deleteArticleController
} from "app/controllers";

/**
 * @description privated resources router
 */
export default express.Router()
  .use(authenticationMiddleware)
  .post(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.ARTICLES.ROUTE, createArticleController)
  .get(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.ARTICLES.ROUTE, listArticlesController)
  .get(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.ARTICLES.ROUTE_BY_ID, getArticleController)
  .delete(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.ARTICLES.ROUTE_BY_ID, deleteArticleController)
  .post(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.USERS.ROUTE, createUserController)
  .get(ROUTES.API.SUBROUTES.PROTECTED.SUBROUTES.STATUS.ROUTE, protectedStatusController);