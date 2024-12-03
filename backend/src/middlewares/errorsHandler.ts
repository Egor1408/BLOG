import { Response } from 'express';

export default function errorsHandler(res:Response, statusCode:number, message:string = 'Пользователь с таким ID не найден') {
  switch(statusCode) {
  case 400:
    res.status(400).send({ message: 'Переданы некорректные данные' });
    break;
  case 401:
    res.status(401).send({ message: 'Неправильные почта или пароль'});
    break;
  case 404:
    res.status(404).send({ message });
    break;
  default:
    res.status(500).send({ message: 'Неизвестная ошибка сервера' });
    break;
  };
}
