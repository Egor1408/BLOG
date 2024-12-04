import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const handleAuthError = (res: Response) => {
  // напишите код здесь
    res
      .status(401)
      .send({ message: 'Необходима авторизация' });
};

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  // убеждаемся, что он есть или начинается с Bearer
  if (!authorization || !authorization.startsWith('Bearer ')) {

    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }


  // const token = req.cookies.jwt;

  // if (!token) {
  //   return next(new Error('Требуется авторизация'));
  // } else {
  //   console.log('token tut');

  // }

  // let payload;

  // try {
  //   payload = jwt.verify(token, 'some-secret-key');
  // } catch (err) {
  //   return next(new Error('Требуется авторизация'));
  // }

  // req.body.user = payload;

  return next();
};

export default authMiddleware;