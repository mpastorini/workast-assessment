import { deleteArticleService } from "app/services/articles";

/**
 * @description Article deletion by id route controller
 * @returns {Promise<Null>}
 */
export default async (request, response) => {
  await deleteArticleService(request.params.id);
  return response.status(204).send();
};