import express from 'express';
import pool from '../../../database';

export const adminUpdateProduct = express();
// 상품 정보 업데이트 라우트
adminUpdateProduct.patch('/api/updateproduct/:prodIndex', async (req, res) => {
  const { prodIndex } = req.params;
  const {
    prodName,
    prodDescription,
    prodPrice,
    prodCategory,
    prodStock,
    prodImgUrl,
  } = req.body;

  try {
    const conn = await pool.getConnection();
    const updateQuery = `
      UPDATE products SET 
      prodName = ?, 
      prodDescription = ?, 
      prodPrice = ?, 
      prodCategory = ?, 
      prodStock = ?, 
      prodImgUrl = ?
      WHERE prodIndex = ?`;
    await conn.query(updateQuery, [
      prodName,
      prodDescription,
      prodPrice,
      prodCategory,
      prodStock,
      prodImgUrl,
      prodIndex,
    ]);
    conn.release();

    res.json({ success: true, message: '상품 정보 업데이트 성공' });
  } catch (err) {
    res.status(500).send('상품 정보 업데이트 실패: ' + err);
  }
});
