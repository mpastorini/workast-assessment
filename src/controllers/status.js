import API_CONFIG from "app/constants/api-config";

/**
 * @description Controller of public route status
 */
export default async (request, response) => {
  return response.send(API_CONFIG.STATUS_MESSAGE);
};