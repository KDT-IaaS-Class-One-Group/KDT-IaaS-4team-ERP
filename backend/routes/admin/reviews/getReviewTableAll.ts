import express from "express";
import pool from "../../../database";

export const getReviewTableAll = express();
getReviewTableAll.get("/api/reviewTable", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const query = "SELECT * FROM reviews";
    const rows = await conn.query(query);
    conn.release();

    res.json(rows);
  } catch (err) {
    res.status(500).send({ message: "getReviewTableAll 실패" });
  } finally {
    if (conn) conn.release();
  }
});
