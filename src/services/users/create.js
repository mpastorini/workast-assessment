import { usersRepository } from "app/repositories";
import { userValidator } from "app/validators";
import { BadRequestException } from "app/exceptions";
import EXCEPTIONS from "app/constants/exceptions";

/**
 * @description User creation business layer
 * @param newUser {Object}
 * @return {Promise<{User}>}
 */
export default async (newUser) => {
  const errors = await userValidator.create(newUser);
  if(errors) throw new BadRequestException(EXCEPTIONS.BAD_REQUEST.INVALID_BODY, errors);
  
  return await usersRepository.create(newUser);
};