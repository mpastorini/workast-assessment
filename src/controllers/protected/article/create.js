import { createArticleService } from "app/services/articles";

/**
 * @description Article creation route controller
 * @returns {Promise<{Article}>}
 */
export default async (request, response) =>
  response.json(await createArticleService(request.body));