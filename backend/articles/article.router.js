import { Router } from "express";
import ArticleController from "./article.controller.js";
const router = new Router();

router.post('/', ArticleController.create);

router.get('/', ArticleController.getArticleList);
router.get('/:id', ArticleController.getArticle);
router.put('/:id', ArticleController.updateArticle);
router.delete('/:id', ArticleController.deleteArticle);

export default router;