import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import test from './routes/test';

// 관리자
import adminLogin from './routes/adminLogin';

// 고객페이지
import customerLogin from './routes/customerLogin';
import customerSignup from './routes/customerSignup';

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

// 테스트
app.get('/post', test);

// * admin
app.post('/admin/login', adminLogin);

//* customer
app.post('/login', customerLogin)
app.post('/signup', customerSignup)


app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
