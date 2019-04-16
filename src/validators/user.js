import Validate from "validate";
import EXCEPTIONS from "app/constants/exceptions";
import convertToErrorObject from "app/helpers/convert-to-error-object";
import immutableValidate from "app/helpers/immutable-validate";

let schema = {
  name: {
    type: String,
    required: true,
    message: {
      type: EXCEPTIONS.BAD_REQUEST.USER.NAME_MUST_BE_STRING,
      required: EXCEPTIONS.BAD_REQUEST.USER.NAME_REQUIRED
    }
  },
  avatar: {
    type: String,
    required: true,
    message: {
      type: EXCEPTIONS.BAD_REQUEST.USER.AVATAR_MUST_BE_STRING,
      required: EXCEPTIONS.BAD_REQUEST.USER.AVATAR_REQUIRED
    }
  }
};

const createSchema = new Validate({
  name: schema.name,
  avatar: schema.avatar
});

const create = (body) => convertToErrorObject(immutableValidate(createSchema, body));

export default {
  create
};
