// routes.js
import express from "express";
import pool from "./db.js";

const router = express.Router();

router.get("/legends", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM champions");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

export default router; // ✅ important
