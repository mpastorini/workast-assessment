import { updateArticleService } from "app/services/articles";

/**
 * @description Article creation route controller
 * @returns {Promise<Null>}
 */
export default async (request, response) => {
  await updateArticleService(request.params.id, request.body);
  return response.status(204).send();
};