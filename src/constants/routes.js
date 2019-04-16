/**
 * @description Routes and soubrutes of the API
 */
export default {
  API: {
    ROUTE: "/api",
    SUBROUTES: {
      PUBLIC: {
        ROUTE: "/",
        SUBROUTES: {
          STATUS: {
            ROUTE: "/status"
          }
        }
      },
      PROTECTED: {
        ROUTE: "/protected",
        SUBROUTES: {
          STATUS: {
            ROUTE: "/status"
          }
        }
      }
    }
  }
};