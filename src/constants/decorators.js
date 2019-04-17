export default {
  USER: {
    TO_RETURN: {
      PROPERTIES: ["_id", "name", "avatar"]
    },
    TO_DB: {
      PROPERTIES: ["name", "avatar"]
    }
  },
  ARTICLE: {
    TO_RETURN: {
      PROPERTIES: ["_id", "userId", "title", "text", "tags"]
    },
    TO_DB: {
      PROPERTIES: ["userId", "title", "text", "tags"]
    }
  }
};