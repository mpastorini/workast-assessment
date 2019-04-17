import { getArticleService } from "app/services/articles";

/**
 * @description Article getting route controller
 * @returns {Promise<{Article}>}
 */
export default async (request, response) => {
  const article = await getArticleService(request.params.id);
  return response.json(article);
};