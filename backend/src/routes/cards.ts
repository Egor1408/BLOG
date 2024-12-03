import { Router } from 'express';
import CardController from '../controllers/cards';

const cardRouter = Router();

cardRouter.post('/cards', CardController.createCard);
cardRouter.get('/cards', CardController.getCardsList);
cardRouter.delete('/cards/:id', CardController.deleteCardById);
cardRouter.put('/cards/:id/likes', CardController.likeCard);
cardRouter.delete('/cards/:id/likes', CardController.dislikeCard);

export default cardRouter;
