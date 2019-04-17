import { pick } from "ramda";
import { DECORATORS } from "app/constants";

export default {
  toReturn: pick(DECORATORS.ARTICLE.TO_RETURN.PROPERTIES),
  toDb: pick(DECORATORS.ARTICLE.TO_DB.PROPERTIES)
};