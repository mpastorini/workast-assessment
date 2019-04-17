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
 * @returns {Promise<{Article}>}
 */
const get = async (id) =>
  await Article.findById(id);

/**
 * @description List articles
 * @param id {String}
 * @returns {Promise<{Article}>}
 */
const list = async () =>
  await Article.find({});

/**
 * @description List articles by tags
 * @param id {String}
 * @returns {Promise<{Array<{Article}>}>}
 */
const listByTags = async (tags) =>
  await Article.find({ tags: {$in: tags} });

/**
 * @description Article persistence layer
 */
export default {
  create,
  get,
  list,
  listByTags
};