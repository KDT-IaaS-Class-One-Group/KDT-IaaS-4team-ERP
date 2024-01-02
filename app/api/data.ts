import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../databases';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM test');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (conn) conn.end();
  }
}
