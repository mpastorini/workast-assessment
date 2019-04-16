import { pick } from "ramda";
import { DECORATORS } from "app/constants";

export default (article) => pick(DECORATORS.ARTICLE.PROPERTIES, article);