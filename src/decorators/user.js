import { pick } from "ramda";
import { DECORATORS } from "app/constants";

export default {
  toReturn: pick(DECORATORS.USER.TO_RETURN.PROPERTIES),
  toDb: pick(DECORATORS.USER.TO_DB.PROPERTIES)
};