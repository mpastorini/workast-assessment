/**
 * @description If the param is an object, it returns it at an object
 * @param param {Object|Array|null}
 */
export default {
  toArray: param =>
    !param ? null : Array.isArray(param) ? param : [param]
};