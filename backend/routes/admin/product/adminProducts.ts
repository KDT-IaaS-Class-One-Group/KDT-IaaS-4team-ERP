import express from 'express';
import session from 'express-session';
import pool from '../../../database';

export const adminProducts = express();

adminProducts.get('/api/products', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const query =
      'SELECT prodIndex, prodName, prodDescription, prodPrice, prodStock, prodImgUrl FROM products';
    const rows = await conn.query(query);
    conn.release();

    res.json(rows);
  } catch (err) {
    res.status(500).send();
  }
});
