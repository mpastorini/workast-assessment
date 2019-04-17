import statusController from "./public/status";
import protectedStatusController from "./protected/status";
import createUserController from "./protected/user/create";
import createArticleController from "./protected/article/create";

/**
 * @description Route Controllers
 */
export default {
  statusController,
  protectedStatusController,
  createUserController,
  createArticleController
};