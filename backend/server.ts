import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import adminLogin from './routes/adminLogin';
import adminLogout from './routes/adminLogout';
import session from 'express-session';

const app = express();
const port = 3001;

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
app.get('/admin/logout', adminLogout);

app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
