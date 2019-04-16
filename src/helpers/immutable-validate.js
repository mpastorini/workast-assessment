import R from "ramda";

/**
 * @description Turns the validators immutable
 * @param validator validate.js {Schema}
 * @param object {Object}
 * @returns {Object}
 */
export default (validator, object) => validator.validate(R.clone(object));
