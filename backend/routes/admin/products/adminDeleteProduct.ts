import express from 'express';
import session from 'express-session';
import pool from '../../../database';

export const adminDeleteProduct = express();

adminDeleteProduct.patch('/api/deleteproduct/:prodIndex', async (req, res) => {
  try {
    const { prodIndex } = req.params;
    const conn = await pool.getConnection();
    const query = 'UPDATE products SET prodStatus = 0 WHERE prodIndex = ?';
    const result = await conn.query(query, [prodIndex]);

    conn.release();

    if (result.affectedRows === 0) {
      // prodIndex에 해당하는 상품이 없는 경우
      return res.status(404).send({ error: 'Product not found' });
    }

    res.status(200).send({ message: 'Product deactivated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal server error' });
  }
});
