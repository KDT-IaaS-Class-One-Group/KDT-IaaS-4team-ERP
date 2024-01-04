const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const app = express();

// 데이터베이스 연결
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mariadb',
  database: 'teamproject_1'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
  } else {
    console.log('Connected to MariaDB');
  }
});

// 사용자 테이블 생성
const createUserTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

connection.query(createUserTable, (err) => {
  if (err) {
    console.error('Error creating user table:', err);
  } else {
    console.log('User table created or already exists');
  }
});

// 회원가입 API 엔드포인트
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  // 비밀번호 암호화
  const hashedPassword = await bcrypt.hash(password, 10);

  // 사용자 정보 저장
  const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(insertUserQuery, [username, hashedPassword], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('회원가입 실패');
    } else {
      console.log('User inserted:', results);
      res.status(201).send('회원가입 성공');
    }
  });
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});