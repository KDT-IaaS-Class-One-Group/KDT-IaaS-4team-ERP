import express, { Request, Response } from "express";
import pool from "../../../database";
// import jwt, { JwtPayload } from "jsonwebtoken";
import { tokenChecker } from "../utils/tokenChecker";

const cartToPaymentTransition = express();

cartToPaymentTransition.post(
  "/cart/cartToPayment",
  async (req: Request, res: Response) => {
    // 토큰 있는지 확인하는 로직
    const userIndex = tokenChecker(req, res);
    if (!userIndex) return console.error("토큰이 없습니다.");

    const orderData = req.body; // 클라이언트로부터 받은 주문 데이터
    console.log("받은 데이터 orderData:", orderData);

    const conn = await pool.getConnection();

    try {
      console.log("cartToPaymentTransition 정상 작동 예정");
      // todo 장바구니에서 구매버튼 누를 때 나오는 행동들
      // todo 1. 받은 데이터를 ordersTable에 추가한다.
      // 필요한 데이터들(넣을 ordersTable 필드명) : orderReceiver(orderReceiver),orderReceiverPhone(orderReceiverPhone : numberType), orderDeliveryAddress(orderDeliveryAddress),orderRequest(orderRequest),cartProductCount(orderPaymentCount), userIndex(userIndex), prodIndex(prodIndex)
      // todo 2. 모든 cartList가 올바르게 ordersTable에 추가되면 해당 userIndex의 cart Table의 레코드들을 모두 삭제한다.
      // 단, 위의 작업들이 모두 성공적으로 이루어져야 한다. 중간에 실패할 때는 모두 롤백되어야 한다.

      await conn.beginTransaction(); // 트랜잭션 시작
      // * 연결하는 파트

      // TODO: orderData를 사용하여 ordersTable에 데이터 추가
      for (const item of orderData) {
        // ordersTable에 데이터 추가
        const insertQuery = `INSERT INTO orders (orderReceiver, orderReceiverPhone, orderDeliveryAddress, orderRequest, orderPaymentCount, userIndex, prodIndex) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [
          item.orderReceiver,
          item.orderReceiverPhone,
          item.orderDeliveryAddress,
          item.orderRequest,
          item.cartProductCount,
          userIndex, // tokenChecker 함수로부터 받은 userIndex
          item.prodIndex,
        ];
        await conn.query(insertQuery, values);
      }

      // TODO: userIndex를 사용하여 cartTable에서 해당 레코드 삭제
      const deleteQuery = "DELETE FROM cart WHERE userIndex = ?";
      await conn.query(deleteQuery, [userIndex]);

      await conn.commit(); // 트랜잭션 커밋
      res.json({
        success: true,
        message: "주문 처리 및 장바구니 비우기 성공! 주문이 완료됐습니다.",
      });
    } catch (error) {
      // 오류 발생 시 트랜잭션 롤백
      if (conn) await conn.rollback();
      console.error("Error during payment process:", error);
      res.status(500).json({
        success: false,
        message: "주문 처리 중 오류가 발생했습니다.",
      });
    } finally {
      if (conn) {
        console.log("Releasing database connection");
        await conn.release();
      }
    }
  }
);

export default cartToPaymentTransition;
