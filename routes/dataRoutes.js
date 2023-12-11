const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// POST 요청: 데이터 저장
router.post("/data", (req, res) => {
  const newData = req.body;
  const filePath = path.join(__dirname, "..", "data", "a.json");

  fs.readFile(filePath, (err, fileData) => {
    if (err && err.code !== "ENOENT") {
      return res.status(500).send("Server Error");
    }

    let data = fileData.length ? JSON.parse(fileData) : [];
    data.push(newData);

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Server Error");
      }
      res
        .status(201)
        .send({ message: "Data added successfully", data: newData });
    });
  });
});

// GET 요청: 데이터 조회
router.get("/data", (req, res) => {
  const filePath = path.join(__dirname, "..", "data", "a.json");

  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(200).json([]);
      }
      return res.status(500).send("Server Error");
    }

    let data = JSON.parse(fileData);
    res.status(200).json(data);
  });
});

module.exports = router;
