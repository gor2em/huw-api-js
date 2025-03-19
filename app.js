const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Client } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

dotenv.config();

const db = new Client({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "huw",
  password: process.env.DB_PASSWORD || "123",
  port: process.env.DB_PORT || 5432,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to DB", err);
  }
  console.log("Connected to DB",db);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/products", (req, res) => {

  res.json({name:'cae'});
  
  // db.query("SELECT * FROM products", (err, results) => {
  //   if (err) {
  //     console.log("err",err);
  //     // throw err;
  //   }
  //   res.json(results.rows);  // PostgreSQL client returns 'rows' instead of 'results'
  // });
});
