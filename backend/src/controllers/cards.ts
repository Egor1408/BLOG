import { Request, Response } from 'express';
import Card from '../models/cards';
import errorsHandler from '../middlewares/errorsHandler';
import { ICard } from 'interfaces/cards';

const VALID_ERROR = 400;
const NOT_FOUND_ERROR = 404;
const UNDEFINED_ERROR = 500;

class CardController {
  static createCard(req: Request, res: Response) {
    const { name, link } = req.body;
    const owner = req.user._id;

    Card.create({ name, link, owner })
      .then((card: ICard) => res.status(201).send(card))
      .catch((err: Error) => {
        if (err.name === 'ValidationError') {
          errorsHandler(res, VALID_ERROR);
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      });
  }

  static getCardsList(req: Request, res: Response) {
    Card.find()
      .then((cardsList: ICard[]) => res.send(cardsList))
      .catch(() => {
        errorsHandler(res, UNDEFINED_ERROR);
      });
  }

  static deleteCardById(req: Request, res: Response) {
    const { id } = req.params;

    Card.findByIdAndDelete(id)
      .orFail(new Error('Not found'))
      .then((card: ICard) => res.send(card))
      .catch((err: Error) => {
        if (err.message === 'Not found') {
          errorsHandler(res, NOT_FOUND_ERROR, 'Карточка с таким ID не найдена');
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      });
  }

  static likeCard(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.user._id;

    Card.findByIdAndUpdate(id, { $addToSet: { likes: userId } }, { new: true })
      .orFail(new Error('Not found'))
      .then((card: ICard) => res.send(card))
      .catch((err: Error) => {
        if (err.name === 'ValidationError') {
          errorsHandler(res, VALID_ERROR);
        } else if (err.message === 'Not found') {
          errorsHandler(res, NOT_FOUND_ERROR, 'Карточка с таким ID не найдена');
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      });
  }

  static dislikeCard(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.user._id;

    Card.findByIdAndUpdate(id, { $addToSet: { likes: userId } }, { new: true })
      .orFail(new Error('Not found'))
      .then((card: ICard) => res.send(card))
      .catch((err: Error) => {
        if (err.name === 'ValidationError') {
          errorsHandler(res, VALID_ERROR);
        } else if (err.message === 'Not found') {
          errorsHandler(res, NOT_FOUND_ERROR, 'Карточка с таким ID не найдена');
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      });
  }
}

export default CardController;
