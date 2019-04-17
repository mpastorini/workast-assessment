import { articlesRepository, usersRepository } from "app/repositories";
import { articleValidator } from "app/validators";
import { BadRequestException, NotFoundException } from "app/exceptions";
import EXCEPTIONS from "app/constants/exceptions";
import articleDecorator from "app/decorators/article";

/**
 * @description Article update business layer
 * @param newArticle {Object}
 * @return {Promise<Null>}
 */
export default async (_id, articleChanges) => {
  const articleToDB = articleDecorator.toDb(articleChanges);

  const parameterErrors = articleValidator.idParameter({ _id });
  if(parameterErrors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_PARAMS, parameterErrors);

  const bodyErrors = articleValidator.update(articleToDB);
  if(bodyErrors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_BODY, bodyErrors);

  if(articleToDB.userId){
    const user = await usersRepository.get(articleToDB.userId);
    if(!user) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.ARTICLE.USER_NOT_EXISTS);
  }

  const dbArticle = await articlesRepository.update(_id, articleToDB);
  if(!dbArticle) throw new NotFoundException(EXCEPTIONS.NOT_FOUND.ARTICLE);

  return null;
};