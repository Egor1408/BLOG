import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users';
import errorsHandler from '../middlewares/errorsHandler';
import { IUser } from 'interfaces/users';

const VALID_ERROR = 400;
const LOGIN_ERROR = 401;
const NOT_FOUND_ERROR = 404;
const UNDEFINED_ERROR = 500;

const WEEK_TIME = 1000 * 60 * 60 * 24 * 7;

class UserController {
  static createUser(req: Request, res: Response) {
    const { name, about, avatar, email, password } = req.body;
    console.log(password);

    bcrypt.hash(password, 10)
      .then(hash => User.create({
        name,
        about,
        avatar,
        email,
        password: hash })
      .then((user: IUser) => res.status(201).send(user))
      .catch((err: Error) => {
        if (err.name === 'ValidationError') {
          errorsHandler(res, VALID_ERROR);
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      })
    )
  }

  static getUserList(req: Request, res: Response) {
    User.find()
      .then((usersList) => res.json(usersList))
      .catch(() => {
        errorsHandler(res, UNDEFINED_ERROR);
      });
  }

  static getUserById(req: Request, res: Response) {
    const { id } = req.params;

    User.findById(id)
      .orFail(new Error('Not found'))
      .then((user: IUser) => res.send(user))
      .catch((err: Error) => {
        if (err.message === 'Not found') {
          errorsHandler(res, NOT_FOUND_ERROR);
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      });
  }

  static updateUser(req: Request, res: Response) {
    const { _id, name, about } = req.body;
    User.findByIdAndUpdate(_id, { name, about }, { new: true, runValidators: true })
      .orFail(new Error('Not found'))
      .then((updatedUser: IUser) => res.send(updatedUser))
      .catch((err: Error) => {
        if (err.name === 'ValidationError') {
          errorsHandler(res, VALID_ERROR);
        } else if (err.message === 'Not found') {
          errorsHandler(res, NOT_FOUND_ERROR);
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      });
  }

  static updateUserAvatar(req: Request, res: Response) {
    const { _id, avatar } = req.body;

    User.findByIdAndUpdate(_id, { avatar }, { new: true, runValidators: true })
      .orFail(new Error('Not found'))
      .then((updatedUser: IUser) => res.send(updatedUser))
      .catch((err: Error) => {
        if (err.name === 'ValidationError') {
          errorsHandler(res, VALID_ERROR);
        } else if (err.message === 'Not found') {
          errorsHandler(res, NOT_FOUND_ERROR);
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      });
  }

  static login(req: Request, res: Response) {
    const { email, password } = req.body;
    let token = '';

    User.findOne({ email })
      .orFail(new Error('Login error'))
      .then((user: IUser) => {
        token = jwt.sign({ _id: user._id}, 'some-secret-key', { expiresIn: '7d' });
        console.log(token);

        return bcrypt.compare(password, user.password)
      })
      .then((matched: any) => {
        if (!matched) {
          throw new Error('Login error')
        }

        res.cookie('jwt', token, { maxAge: WEEK_TIME, httpOnly: true })
          .send({ message: 'Авторизация прошла успешно' });
      })
      .catch((err: Error) => {
        if (err.message === 'Login error') {
          errorsHandler(res, LOGIN_ERROR);
        } else {
          errorsHandler(res, UNDEFINED_ERROR);
        }
      })
  }
}

export default UserController;
