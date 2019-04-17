import { articlesRepository } from "app/repositories";
import { articleValidator } from "app/validators";
import { BadRequestException } from "app/exceptions";
import EXCEPTIONS from "app/constants/exceptions";
import articleDecorator from "app/decorators/article";
import { map } from "ramda";

/**
 * @description Article getting business layer
 * @param newArticle {Object}
 * @return {Promise<{Article}>}
 */
export default async (tags) => {
  if(tags){
    const errors = articleValidator.tagsParameter({ tags });
    if(errors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_PARAMS, errors);
  }

  const listStrategy = tags ? 
    () => articlesRepository.listByTags(tags) : articlesRepository.list;
  const dbArticles = await listStrategy();
  
  return map(articleDecorator.toReturn, dbArticles);
};