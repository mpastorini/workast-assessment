import { pick } from "ramda";
import { DECORATORS } from "app/constants";

export default (user) => pick(DECORATORS.USER.PROPERTIES, user);