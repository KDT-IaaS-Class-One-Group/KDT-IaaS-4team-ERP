import express from "express";
import pool from "../../../database";

const productcomment = express();

productcomment.get("/product/:prodIndex/reviews", async (req, res) => {
  const prodIndex = parseInt(req.params.prodIndex, 10);
  let conn;
  try {
    conn = await pool.getConnection();

    const result = await conn.query('SELECT * FROM reviews WHERE prodIndex = ?', [prodIndex]);
    res.status(200).json(result);

  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Error fetching reviews" });
  } finally {
    if (conn) conn.release();
  }
});

export default productcomment;
