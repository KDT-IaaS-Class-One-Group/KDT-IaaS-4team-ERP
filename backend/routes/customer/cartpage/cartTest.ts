import express, { Request, Response } from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";
import { tokenChecker } from "../utils/tokenChecker";

const cartTest = express();

cartTest.post("/cart/cartToPayment", async (req: Request, res: Response) => {
  // 토큰 있는지 확인하는 로직
  const userIndex = tokenChecker(req, res);
  if (!userIndex) return console.error("토큰이 없습니다.");

  try {
    console.log("cartTest 정상 작동 예정");
    // todo 장바구니에서 구매버튼 누를 때 나오는 행동들
    // todo 1. 받은 데이터를 ordersTable에 추가한다.
    // 필요한 데이터들(넣을 ordersTable 필드명) : orderReceiver(orderReceiver),orderReceiverPhone(orderReceiverPhone : numberType), orderDeliveryAddress(orderDeliveryAddress),orderRequest(orderRequest),cartProductCount(orderPaymentCount), userIndex(userIndex), prodIndex(prodIndex)
    // todo 2. 모든 cartList가 올바르게 ordersTable에 추가되면 해당 userIndex의 cart Table의 레코드들을 모두 삭제한다.
    // 단, 위의 작업들이 모두 성공적으로 이루어져야 한다. 중간에 실패할 때는 모두 롤백되어야 한다.
  } catch (error) {
    // 오류 로깅
    console.error("Error during fetching cartTest:", error);
    res.status(500).json({
      success: false,
      message: "cartTest 오류",
    });
  }
  // finally {
  //   if (conn) {
  //     console.log("Releasing database connection");
  //     // conn.release();
  //   }
  // }
});

export default cartTest;
