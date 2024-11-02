import Article from './article.schema.js';

class ArticleController {
    async create(req, res) {
        try {
            const {author, title, description, imageUrl, createdAt} = req.body
            const article = await Article.create({
                author, title, description, imageUrl, createdAt
            });
            res.json(article);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getArticleList(req, res) {
        try {
            const articleList = await Article.find();
            return res.json(articleList);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getArticle(req, res) {
        try {
            const {id} = req.params;
            const article = await Article.findById(id);
            return res.json(article);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateArticle(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteArticle(req, res) {
        try {

        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default new ArticleController();