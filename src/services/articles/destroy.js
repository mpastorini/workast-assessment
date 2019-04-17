import { articlesRepository } from "app/repositories";
import { articleValidator } from "app/validators";
import { BadRequestException, NotFoundException } from "app/exceptions";
import EXCEPTIONS from "app/constants/exceptions";

/**
 * @description Article deletion business layer
 * @param newArticle {Object}
 * @return {Promise<Null>}
 */
export default async (_id) => {
  const errors = articleValidator.idParameter({ _id });
  if(errors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_PARAMS, errors);

  const dbArticle = await articlesRepository.destroy(_id);
  if(!dbArticle) throw new NotFoundException(EXCEPTIONS.NOT_FOUND.ARTICLE);

  return null;
};