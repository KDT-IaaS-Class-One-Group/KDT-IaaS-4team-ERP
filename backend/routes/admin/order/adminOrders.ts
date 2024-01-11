import express from 'express';
import pool from '../../../database';

export const adminOrders = express();

adminOrders.get('/api/orders', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const query =
      'SELECT orderIndex, orderRequest, orderDeliveryAddress, orderPaymentCount, orderPaymentDatetime, orderPaymentPriceAtOrd, orderDeliveryDone, userIndex, prodIndex FROM orders';
    const rows = await conn.query(query);
    conn.release();

    res.json(rows);
  } catch (err) {
    res.status(500).send();
  }
});
