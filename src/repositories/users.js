import User from "app/models/user";

/**
 * @description Creates a new User
 * @param newUser {Object}
 * @returns {Promise<{User}>}
 */
const create = async (newUser) => 
  await new User(newUser).save();

/**
 * @description Get a user by id
 * @param id {String}
 * @returns {Promise<{User}>}
 */
const get = async (id) => 
  await User.findById(id);

/**
 * @description User persistence layer
 */
export default {
  create,
  get
};