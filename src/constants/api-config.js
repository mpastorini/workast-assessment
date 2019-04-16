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
  SERVER_PORT: process.env.PORT,
  ENVIRONMENT: process.env.ENVIRONMENT,
  AUTH_TOKEN: process.env.ENVIRONMENT === "test" ? "1234" : process.env.AUTH_TOKEN,
  INTERNAL_ERROR_MESSAGE: "Oops internal error",
  MONGOOSE_URL: "mongodb://mongo:27017/workast-assessment",
  "PROTECTED_STATUS_MESSAGE": "Logged in",
  ENVIRONMENTS: {
    DEVELOPMENT: "development",
    PRODUCTION: "production",
    "STAGE": "stage",
    "TEST": "test"
  }
};