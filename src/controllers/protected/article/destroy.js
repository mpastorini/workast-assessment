import { deleteArticleService } from "app/services/articles";

/**
 * @description Article deletion by id route controller
 * @returns {Promise<{Article}>}
 */
export default async (request, response) => {
  const article = await deleteArticleService(request.params.id);
  return response.status(204).json(article);
};