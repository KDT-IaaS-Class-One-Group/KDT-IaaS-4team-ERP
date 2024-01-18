import mariadb from "mariadb";

// MariaDB 연결 풀 설정
const pool = mariadb.createPool({
  // 집에서 하기 위해 잠깐 바꿧습니다.
  host: "192.168.100.83",
  port: 3309,
  user: "root",
  password: "root",
  database: "form",
  connectionLimit: 5,
  supportBigNumbers: true,
  bigNumberStrings: true,
});

export default pool;
