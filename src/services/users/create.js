import { usersRepository } from "app/repositories";
import { userValidator } from "app/validators";
import { BadRequestException } from "app/exceptions";
import EXCEPTIONS from "app/constants/exceptions";
import userDecorator from "app/decorators/user";

/**
 * @description User creation business layer
 * @param newUser {Object}
 * @return {Promise<{User}>}
 */
export default async (newUser) => {
  const userToDb = userDecorator.toDb(newUser);
  const errors = userValidator.create(userToDb);
  if(errors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_BODY, errors);
  
  const dbUser = await usersRepository.create(userToDb);
  return userDecorator.toReturn(dbUser);
};