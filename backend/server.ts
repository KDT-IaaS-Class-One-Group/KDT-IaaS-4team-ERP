import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import adminLogin from './routes/adminLogin';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// 관리자 로그인
app.use('/admin/login', adminLogin);

app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
