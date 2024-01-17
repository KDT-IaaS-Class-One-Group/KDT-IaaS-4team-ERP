import mariadb from 'mariadb';

// MariaDB 연결 풀 설정
const pool = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rlagus1212!',
  database: 'forms',
  connectionLimit: 10,
  supportBigNumbers: true,
  bigNumberStrings: true,
});

export default pool;
