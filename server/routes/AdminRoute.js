import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const email = req.body.email;
  const password = req.body.password;

  const checkEmailSql = "SELECT * FROM admin WHERE email = ?";
  con.query(checkEmailSql, [email], (err, result) => {
    if (err) {
      console.error("Query error:", err);
      return res.json({ loginStatus: false, Error: "Query error" });
    }

    if (result.length === 0) {
      return res.json({ loginStatus: false, Error: "Email not registered" });
    }

    const checkPasswordSql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    con.query(checkPasswordSql, [email, password], (err, result) => {
      if (err) {
        console.error("Query error:", err);
        return res.json({ loginStatus: false, Error: "Query error" });
      }

      if (result.length === 0) {
        return res.json({ loginStatus: false, Error: "Incorrect password" });
      }

      const token = jwt.sign(
        {
          role: "admin",
          email: email,
        },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie("token", token);
      return res.json({ loginStatus: true });
    });
  });
});

export { router as adminRouter };
