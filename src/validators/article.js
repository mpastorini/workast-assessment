import Validate from "validate";
import EXCEPTIONS from "app/constants/exceptions";
import convertToErrorObject from "app/helpers/convert-to-error-object";
import immutableValidate from "app/helpers/immutable-validate";

let schema = {
  _id: {
    type: String,
    required: true,
    use: {
      format: id => id.match(/^[0-9a-fA-F]{24}$/)
    },
    message: {
      type: EXCEPTIONS.BAD_REQUEST.ARTICLE.ID_MUST_BE_STRING,
      required: EXCEPTIONS.BAD_REQUEST.ARTICLE.ID_REQUIRED,
      format: EXCEPTIONS.BAD_REQUEST.ARTICLE.ID_INVALID_FORMAT
    }
  },
  userId: {
    type: String,
    required: true,
    use: {
      format: id => id.match(/^[0-9a-fA-F]{24}$/)
    },
    message: {
      type: EXCEPTIONS.BAD_REQUEST.ARTICLE.USER_ID_MUST_BE_STRING,
      required: EXCEPTIONS.BAD_REQUEST.ARTICLE.USER_ID_REQUIRED,
      format: EXCEPTIONS.BAD_REQUEST.ARTICLE.USER_ID_INVALID_FORMAT
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
    each: { type: String, message: EXCEPTIONS.BAD_REQUEST.ARTICLE.TAG_MUST_BE_STRING },
    required: true,
    message: {
      type: EXCEPTIONS.BAD_REQUEST.ARTICLE.TAGS_MUST_BE_ARRAY,
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

const idParameterSchema = new Validate({
  _id: schema._id
});

const create = (body) => 
  convertToErrorObject(immutableValidate(createSchema, body));

const idParameter = (body) =>
  convertToErrorObject(immutableValidate(idParameterSchema, body));

export default {
  create,
  idParameter
};
