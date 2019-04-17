import { createArticleService } from "app/services/articles";

/**
 * @description Article creation route controller
 * @returns {Promise<{Article}>}
 */
export default async (request, response) => {
  const newArticle = await createArticleService(request.body);
  return response.json(newArticle);
};