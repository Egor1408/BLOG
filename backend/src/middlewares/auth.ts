import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new Error('Требуется авторизация'));
  }

  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return next(new Error('Требуется авторизация'));
  }

  req.body.user = payload;

  return next();
};

export default auth;