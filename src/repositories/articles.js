import Article from "app/models/article";

/**
 * @description Creates an article
 * @param newArticle {Object}
 * @returns {Promise<{Article}>}
 */
const create = async (newArticle) => 
  await new Article(newArticle).save();

/**
 * @description User persistence layer
 */
export default {
  create
};