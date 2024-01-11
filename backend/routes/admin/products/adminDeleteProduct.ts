import express from 'express';
import session from 'express-session';
import pool from '../../../database';

export const adminDeleteProduct = express();

adminDeleteProduct.delete('/api/deleteproduct/:prodIndex', async (req, res) => {
  try {
    const prodIndex = req.params.prodIndex;
    const conn = await pool.getConnection();
    const query = 'DELETE FROM products WHERE prodIndex = ?';
    await conn.query(query, [prodIndex]);
    conn.release();

    res
      .status(200)
      .send(`Product with index ${prodIndex} deleted successfully.`);
  } catch (err) {
    res.status(500).send();
  }
});
