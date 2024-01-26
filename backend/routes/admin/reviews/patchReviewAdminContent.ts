import express from "express";
import pool from "../../../database";

export const patchReviewAdminContent = express();

patchReviewAdminContent.patch(
  "/api/reviewReplySubmit/:reviewIndex",
  async (req, res) => {
    const { reviewIndex } = req.params;
    const { reply } = req.body;

    console.log(reviewIndex);
    console.log(reply);

    try {
      const conn = await pool.getConnection();
      const updateQuery =
        "UPDATE reviews SET reviewAdminContent = ? WHERE reviewIndex = ?";
      await conn.query(updateQuery, [reply, reviewIndex]);
      conn.release();

      res.json({ success: true, message: "어드민 답변 작성 완료" });
    } catch (err) {
      res.status(500).send("어드민 답변 작성 실패: " + err);
    }
  }
);
