import { articlesRepository, usersRepository } from "app/repositories";
import { articleValidator } from "app/validators";
import { BadRequestException } from "app/exceptions";
import EXCEPTIONS from "app/constants/exceptions";
import articleDecorator from "app/decorators/article";

/**
 * @description Article creation business layer
 * @param newArticle {Object}
 * @return {Promise<{Article}>}
 */
export default async (newArticle) => {
  const articleToDB = articleDecorator.toDb(newArticle);

  const errors = articleValidator.create(articleToDB);
  if(errors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_BODY, errors);

  const user = await usersRepository.get(articleToDB.userId);
  if(!user) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.ARTICLE.USER_NOT_EXISTS);

  const dbArticle = await articlesRepository.create(articleToDB);
  return articleDecorator.toReturn(dbArticle);
};