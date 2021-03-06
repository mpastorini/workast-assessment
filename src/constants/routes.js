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
          },
          USERS: {
            ROUTE: "/users"
          },
          ARTICLES: {
            ROUTE: "/articles",
            ROUTE_BY_ID: "/articles/:id"
          }
        }
      }
    }
  }
};