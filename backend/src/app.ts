import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/users';
import cardRouter from './routes/cards';
import authMiddleware from './middlewares/auth';
import cors from 'cors';

const PORT = 3000;
const DB_URL = 'mongodb://127.0.0.1:27017/mydb';

const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.options('*', cors({ origin: true, credentials: true }))
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
})

// app.use(authMiddleware);
app.use('/', userRouter);
app.use('/', cardRouter);
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});
async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log('server start on', '\x1b[36m', `http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
