import R from "ramda";

/**
 * @description Format a validate.js output Error collection to a exception's errors object
 * @param error {Error}
 * @returns {Object}
 */
export default function (errors) {
  if (!errors || !errors.length) return null;
  
  const errorReducer = 
    (prev, curr) => R.assocPath(curr.path.split("."), curr.message, prev);
  return R.reduce(errorReducer, {}, errors);
}