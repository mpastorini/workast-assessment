import morgan from "morgan";
import { API_CONFIG } from "app/constants";

/**
 * @description Logs all data about requests
 */
export default morgan(API_CONFIG.REQUEST_LOG_FORMAT);