import API_CONFIG from "app/constants/api-config";

/**
 * @description Public status route controller
 * @returns {Promise<{JSON}>}
 */
export default async (request, response) => 
  response.send(API_CONFIG.STATUS_MESSAGE);