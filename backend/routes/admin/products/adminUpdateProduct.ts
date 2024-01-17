import express from 'express';
import pool from '../../../database';

export const adminUpdateProduct = express();

adminUpdateProduct.put('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      prodName,
      prodDescription,
      prodCategory,
      prodImgUrl,
      prodPrice,
      prodStock,
    } = req.body;

    const conn = await pool.getConnection();
    const query =
      'UPDATE products SET prodName = ?, prodDescription = ?, prodCategory = ?, prodImgUrl = ?, prodPrice = ?, prodStock = ? WHERE prodId = ?';

    await conn.query(query, [
      prodName,
      prodDescription,
      prodCategory,
      prodImgUrl,
      Number(prodPrice),
      Number(prodStock),
      id
    ]);

    conn.release();

    res.status(200).send({ message: 'Product updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});