import express from 'express';
import pool from '../../../database';

export const adminOrders = express();

adminOrders.get('/api/orders', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const query =
      'SELECT orderIndex, orderRequest, orderDeliveryAddress, orderPaymentCount, orderPaymentDatetime, orderIsOrderAccepted, orderPaymentPriceAtOrder, orderDeliveryDone, userIndex, prodIndex FROM orders';
    const rows = await conn.query(query);
    conn.release();

    res.json(rows);
  } catch (err) {
    res.status(500).send();
  }
});

adminOrders.patch('/api/orders/acceptance/:orderIndex', async (req, res) => {
  const { orderIndex } = req.params;
  const { isAccepted } = req.body; // true: 수락, false: 거절

  try {
    const conn = await pool.getConnection();
    const status = isAccepted ? 1 : 2; // 1: 수락, 2: 거절
    const updateQuery = 'UPDATE orders SET orderIsOrderAccepted = ? WHERE orderIndex = ?';
    await conn.query(updateQuery, [status, orderIndex]);
    conn.release();

    res.json({ success: true, message: '주문 상태 업데이트 성공' });
  } catch (err) {
    res.status(500).send('주문 상태 업데이트 실패: ' + err);
  }
});

// Express 서버에 배송 상태 변경 API 추가
adminOrders.patch('/api/orders/delivery/:orderIndex', async (req, res) => {
  const { orderIndex } = req.params;
  const { deliveryStatus } = req.body; // 0: 배송 준비, 1: 배송 완료

  try {
    const conn = await pool.getConnection();
    const updateQuery = 'UPDATE orders SET orderDeliveryDone = ? WHERE orderIndex = ?';
    await conn.query(updateQuery, [deliveryStatus, orderIndex]);
    conn.release();

    res.json({ success: true, message: '배송 상태 업데이트 성공' });
  } catch (err) {
    res.status(500).send('배송 상태 업데이트 실패: ' + err);
  }
});