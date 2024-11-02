import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import router from './articles/article.router.js';

const PORT = 5000;
const DB_URL = "mongodb://127.0.0.1:27017/mydb";

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use('/', router);
startApp();

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log('server start on' , '\x1b[36m', `http://localhost:5000/`);
        })
    } catch (err) {
        console.log(err);
    }
}