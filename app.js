// app.js 파일

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 미들웨어: POST 데이터를 파싱하기 위한 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 루트 경로로 접근 시 user.html 파일 렌더링
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'user.html'));
});

// POST 요청 시 데이터를 a.json 파일에 기록하고 admin.html 파일에 내용 표시
app.post('/submit', (req, res) => {
  // POST로 받은 데이터
  const postData = req.body.key;
  const superdata = req.body.data.value;
  console.log(postData)
  // a.json 파일에 데이터 추가
  fs.appendFileSync(path.join(__dirname, 'public/a.json'), postData + '\n');

  // admin.html 파일에 현재까지의 a.json 내용 표시
  const jsonData = fs.readFileSync(path.join(__dirname, 'public/a.json'), 'utf8');
  res.send(`<h2>Admin Page</h2><pre>${jsonData}</pre>`);
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
