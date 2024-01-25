import express from "express";
import pool from "../../../database";

const removeCart = express();

removeCart.delete("/api/cartTable/:cartIndex", async (req, res) => {
  console.log("요청이 옴");
  const { cartIndex } = req.params;
  console.log("cartIndex :", cartIndex);
  let conn;

  try {
    conn = await pool.getConnection();
    // * 장바구니에서 해당 상품을 삭제하는 쿼리문
    // userIndex와 cartIndex를 검사하여 해당 상품을 삭제한다.
    await conn.query(
      // `DELETE FROM cart WHERE userIndex = ? AND cartIndex = ?`,
      // [userIndex, cartIndex] // 유저 인덱스와 카트 인덱스를 받아와서 검증하는 쿼리문
      `DELETE FROM cart WHERE cartIndex = ?`,
      [cartIndex]
    );

    res
      .status(201)
      .json({ success: true, message: "장바구니에 상품이 삭제되었습니다." });
  } catch (error) {
    console.error("Error during removeCart:", error);
    res.status(500).json({
      success: false,
      message: "장바구니에서 상품을 삭제하는 중에 오류가 발생했습니다.",
    });
  } finally {
    if (conn) conn.release();
  }
});

export default removeCart;
