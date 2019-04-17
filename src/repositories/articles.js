import Article from "app/models/article";

/**
 * @description Creates an article
 * @param newArticle {Object}
 * @returns {Promise<{Article}>}
 */
const create = async (newArticle) => 
  await new Article(newArticle).save();

/**
 * @description Get an article by id
 * @param id {String}
 * @returns {Promise<{User}>}
 */
const get = async (id) =>
  await Article.findById(id);

/**
 * @description User persistence layer
 */
export default {
  create,
  get
};