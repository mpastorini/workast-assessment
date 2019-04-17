import { listArticlesService } from "app/services/articles";
import { arrayQueryParameterDecorator } from "app/decorators";
/**
 * @description Articles getting route controller
 * @returns {Promise<{Article}>}
 */
export default async (request, response) => {
  const tags = arrayQueryParameterDecorator.toArray(request.query.tags);

  const articles = await listArticlesService(tags);
  return response.json(articles);
};