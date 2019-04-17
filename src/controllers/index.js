import statusController from "./public/status";
import protectedStatusController from "./protected/status";
import createUserController from "./protected/user/create";
import createArticleController from "./protected/article/create";
import getArticleController from "./protected/article/get";
import listArticlesController from "./protected/article/list";
import deleteArticleController from "./protected/article/destroy";

/**
 * @description Route Controllers
 */
export default {
  statusController,
  protectedStatusController,
  createUserController,
  createArticleController,
  getArticleController,
  listArticlesController,
  deleteArticleController
};