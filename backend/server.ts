import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import { adminLogin } from './routes/admin/login/adminLogin';
import { adminProducts } from './routes/admin/product/adminProducts';
import pool from './database';

const app = express();
const port = 3560;

app.use(
  session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // HTTPS를 사용할 경우 true로 설정
  }),
);
app.use(cors());
app.use(bodyParser.json());

app.post('/admin/login', adminLogin);
app.get('/api/products', adminProducts);

app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
