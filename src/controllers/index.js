import statusController from "./public/status";
import protectedStatusController from "./protected/status";
import createUserController from "./protected/user/create";
import createArticleController from "./protected/article/create";
import getArticleController from "./protected/article/get";

/**
 * @description Route Controllers
 */
export default {
  statusController,
  protectedStatusController,
  createUserController,
  createArticleController,
  getArticleController
};