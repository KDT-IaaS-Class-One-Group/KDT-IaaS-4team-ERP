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
    // 문자열로 받은 prodPrice와 prodStock를 숫자로 변환
    const numericPrice = Number(prodPrice);
    const numericStock = Number(prodStock);

    if (isNaN(numericPrice) || isNaN(numericStock)) {
      // 숫자로 변환할 수 없는 경우 에러 처리
      res.status(400).send('Invalid numeric values for prodPrice or prodStock');
      return;
    }

    const conn = await pool.getConnection();
    const query =
      'INSERT INTO products (prodName, prodDescription, prodCategory, prodImgUrl, prodPrice, prodStock) VALUES (?, ?, ?, ?, ?, ?)';

    const result = await conn.query(query, [
      prodName,
      prodDescription,
      prodCategory,
      prodImgUrl,
      numericPrice, // 숫자로 변환된 값으로 사용
      numericStock, // 숫자로 변환된 값으로 사용
    ]);
    conn.release();

    res.status(201).send({ prodIndex: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
