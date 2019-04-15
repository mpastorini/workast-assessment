/**
 * @description All related with the API server and Express
 */
export default {
  STARTING_MESSAGE: {
    TEXT: "Workast Assessment listening on port @@@PORT@@@!",
    REPLACEMENTS: {
      PORT: "@@@PORT@@@"
    }
  },
  REQUEST_LOG_FORMAT: ":method :url :status :res[content-length] - :response-time ms",
  STATUS_MESSAGE: "API Online",
  SERVER_PORT: 80,
  INTERNAL_ERROR_MESSAGE: "Oops internal error"
};