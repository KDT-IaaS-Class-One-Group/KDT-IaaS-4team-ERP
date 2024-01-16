import mariadb from 'mariadb';

// MariaDB 연결 풀 설정
const pool = mariadb.createPool({
  host: '192.168.100.83',
  port: 3360,
  user: 'root',
  password: 'root',
  database: 'form',
  connectionLimit: 5,
});

export default pool;
