import { Router } from 'express';
import UserController from '../controllers/users';

const userRouter = Router();

userRouter.post('/signup', UserController.createUser);
userRouter.get('/users', UserController.getUserList);
userRouter.get('/users/:id', UserController.getUserById);
userRouter.patch('/users/me', UserController.updateUser);
userRouter.patch('/users/me/avatar', UserController.updateUserAvatar);
userRouter.post('/signin', UserController.login);

export default userRouter;
