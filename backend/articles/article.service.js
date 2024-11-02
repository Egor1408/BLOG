import Article from './article.schema.js';

class ArticleService {
    async createArticle(article) {
        const createdArticle = await Article.create(article);
        return createdArticle;
    }

    async getArticleList() {
        const articleList = await Article.find();
        return articleList;
    }

    async getArticle(id) {
        if (!id) {
            throw new Error('ne ukazan ID');
        }
        const article = await Article.findById(id);
        return article;
    }

    async updateArticle(article) {
        if (!article._id) {
            throw new Error('ne ukazan ID');
        }
        const updatedArticle = await Article.findByIdAndUpdate(article._id, article, {new: true});
        return updatedArticle;
    }

    async deleteArticle(id) {
        if (!id) {
            throw new Error('ne ukazan ID');
        }
        const article = await Article.findByIdAndDelete(id);
        return article;
    }
}

export default new ArticleService();