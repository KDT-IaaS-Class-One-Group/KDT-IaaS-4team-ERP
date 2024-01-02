const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '6892',
  database: 'test',
});

async function getData() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM users');
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
}

getData()
  .then((rows) => console.log(rows))
  .catch((err) => console.error(err));
