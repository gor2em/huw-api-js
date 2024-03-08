const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

dotenv.config();

const db = mysql.createConnection({
  user: process.env.DB_USER || "root",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "huw",
  password: process.env.DB_PASSWORD || "123",
  port: process.env.DB_PORT || "3306",
});

db.connect((err) => {
  if (err) {
    console.log("error connecting to db", err);
  }

  console.log("connected to db");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    
    res.json(results);
  });
});
