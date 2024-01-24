import express from 'express';
import pool from '../../../database';

export const adminProducts = express();

adminProducts.get('/api/products', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const query =
      'SELECT prodIndex, prodName, prodPrice, prodImgUrl, prodStock, prodDescription, prodCategory, prodStatus FROM products';
    const rows = await conn.query(query);
    conn.release();

    res.json(rows);
  } catch (err) {
    res.status(500).send();
  }
});
