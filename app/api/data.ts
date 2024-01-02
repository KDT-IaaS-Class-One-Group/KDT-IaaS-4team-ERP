import type { NextApiRequest, NextApiResponse } from 'next';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '6892',
  database: 'test',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (conn) conn.end();
  }
}
