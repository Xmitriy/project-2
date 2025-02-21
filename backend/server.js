const express = require("express");
const connectDB = require("./db");

const app = express();

// MongoDB холбох
connectDB();

app.get("/", (req, res) => {
  res.send("MongoDB + Mongoose амжилттай холбогдлоо!");
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа 🚀`);
});
