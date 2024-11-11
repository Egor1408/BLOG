import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import router from './articles/article.router.js';

const PORT = 8080;
const DB_URL = "mongodb://127.0.0.1:27017/mydb";

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:4200`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
app.use('/', router);
startApp();

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log('server start on' , '\x1b[36m', `http://localhost:${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}