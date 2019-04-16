import API_CONFIG from "app/constants/api-config";

/**
 * @description Protected status route controller
 * @returns {Promise<{String}>}
 */
export default async (request, response) =>
  response.send(API_CONFIG.PROTECTED_STATUS_MESSAGE);