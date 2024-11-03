import { Router } from "express";
import ArticleController from "./article.controller.js";
const router = new Router();

router.post('/articles', ArticleController.createArticle);
router.get('/articles', ArticleController.getArticleList);
router.get('/articles/:id', ArticleController.getArticle);
router.put('/articles', ArticleController.updateArticle);
router.delete('/articles/:id', ArticleController.deleteArticle);

export default router;