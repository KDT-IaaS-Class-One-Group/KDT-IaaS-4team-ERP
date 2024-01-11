import express from 'express';
import pool from '../../../database';

export const adminAddProduct = express();

adminAddProduct.post('/api/addproduct', async (req, res) => {
  try {
    const {
      prodName,
      prodDescription,
      prodCategory,
      prodImgUrl,
      prodPrice,
      prodStock,
    } = req.body;
    console.log(req.body);
    console.log(typeof prodPrice);
    const conn = await pool.getConnection();
    const query =
      'INSERT INTO products (prodName, prodDescription, prodCategory, prodImgUrl, prodPrice, prodStock) VALUES (?, ?, ?, ?, ?, ?)';

    const test = Number(prodPrice);
    console.log(test);
    console.log(typeof test);

    const rows = await conn.query('SELECT * FROM products');
    console.log(rows);

    const result = await conn.query(query, [
      prodName,
      prodDescription,
      prodCategory,
      prodImgUrl,
      Number(prodPrice),
      Number(prodStock),
    ]);

    conn.release();

    res.status(201).send({ prodIndex: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
