import ArticleService from './article.service.js';

class ArticleController {
    async createArticle(req, res) {
        try {
            const article = await ArticleService.createArticle(req.body);
            return res.json(article);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getArticleList(req, res) {
        try {
            const articleList = await ArticleService.getArticleList();
            return res.json(articleList);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getArticle(req, res) {
        try {
            const article = await ArticleService.getArticle(req.params.id);
            return res.json(article);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateArticle(req, res) {
        try {
            const updatedArticle = await ArticleService.updateArticle(req.body)
            return res.json(updatedArticle);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }

    async deleteArticle(req, res) {
        const article = await ArticleService.deleteArticle(req.params.id);
        return res.json(article);
    } catch (err) {
        res.status(500).json(err);
    }
}

export default new ArticleController();