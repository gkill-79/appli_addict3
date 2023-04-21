

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to the SQLite database
const db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the in-memory SQLite database.");
});

// Create the counter table
db.run("CREATE TABLE counter (id INTEGER PRIMARY KEY AUTOINCREMENT, count INTEGER NOT NULL, price REAL NOT NULL)");

// Endpoint to save the counter data
app.post("/api/save", (req, res) => {
  const { count, price } = req.body;

  const sql = "INSERT INTO counter (count, price) VALUES (?, ?)";
  const params = [count, price];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "Counter data saved successfully", id: this.lastID });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






















