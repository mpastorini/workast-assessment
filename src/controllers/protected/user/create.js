import { createUserService } from "app/services/users";

/**
 * @description User creation route controller
 * @returns {Promise<{User}>}
 */
export default async (request, response) => {
  const newUser = await createUserService(request.body);
  return response.json(newUser);
};