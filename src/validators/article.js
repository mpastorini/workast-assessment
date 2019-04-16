import Validate from "validate";
import EXCEPTIONS from "app/constants/exceptions";
import convertToErrorObject from "app/helpers/convert-to-error-object";
import immutableValidate from "app/helpers/immutable-validate";

let schema = {
  userId: {
    type: String,
    required: true,
    message: {
      type: EXCEPTIONS.BAD_REQUEST.ARTICLE.USER_ID_MUST_BE_STRING,
      required: EXCEPTIONS.BAD_REQUEST.ARTICLE.USER_ID_REQUIRED
    }
  },
  title: {
    type: String,
    required: true,
    message: {
      type: EXCEPTIONS.BAD_REQUEST.ARTICLE.TITLE_MUST_BE_STRING,
      required: EXCEPTIONS.BAD_REQUEST.ARTICLE.TITLE_REQUIRED
    }
  },
  text: {
    type: String,
    required: true,
    message: {
      type: EXCEPTIONS.BAD_REQUEST.ARTICLE.TEXT_MUST_BE_STRING,
      required: EXCEPTIONS.BAD_REQUEST.ARTICLE.TEXT_REQUIRED
    }
  },
  tags: {
    type: Array,
    each: { type: String },
    required: true,
    message: {
      type: EXCEPTIONS.BAD_REQUEST.ARTICLE.TAGS_MUST_BE_STRING_ARRAY,
      required: EXCEPTIONS.BAD_REQUEST.ARTICLE.TAGS_REQUIRED
    }
  }
};

const createSchema = new Validate({
  userId: schema.userId,
  title: schema.title,
  text: schema.text,
  tags: schema.tags
});

const create = (body) => convertToErrorObject(immutableValidate(createSchema, body));

export default {
  create
};
