const express = require('express');
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
// 암호화해주는 모듈
const bcrypt = require('bcrypt');
// 개발환경이 개발환경일 때: development
// 개발환경이 배포단계 일 때: production
// dev변수는 지금 애플리케이션이 실행되는 환경이 개발환경일 때를 정의해준다.
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// 토큰?
// const jwt = require("jsonwebtoken");

// * MariaDB 연결 정보 설정
const pool = mariadb.createPool({
  host: 'localhost', // MariaDB 호스트 주소
  user: 'root', // MariaDB 사용자명
  password: 'mariadb', // MariaDB 비밀번호
  database: 'teamproject_1', // MariaDB 데이터베이스명
  connectionLimit: 5, // 연결 풀의 최대 연결 수
});

//? release()
pool
  .getConnection()
  .then((conn) => {
    console.log("데이터베이스 연결 성공");
    conn.release();
  })
  .catch((err) => {
    console.error("데이터베이스 연결 실패:", err.message);
  });

  

// * NEXT개발환경 파일들을 익스프레스 서버로 라우팅해주기
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
