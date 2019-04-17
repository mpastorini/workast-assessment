import { articlesRepository } from "app/repositories";
import { articleValidator } from "app/validators";
import { BadRequestException } from "app/exceptions";
import EXCEPTIONS from "app/constants/exceptions";
import articleDecorator from "app/decorators/article";

/**
 * @description User creation business layer
 * @param newArticle {Object}
 * @return {Promise<{User}>}
 */
export default async (_id) => {
  const errors = articleValidator.idParameter({ _id });
  if(errors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_PARAMS, errors);

  const dbArticle = await articlesRepository.get(_id);

  return articleDecorator.toReturn(dbArticle);
};