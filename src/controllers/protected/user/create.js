import { createUserService } from "app/services/users";

/**
 * @description User creation route controller
 * @returns {Promise<{User}>}
 */
export default async (request, response) =>
  response.json(await createUserService(request.body));