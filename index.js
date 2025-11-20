const express = require("express");
const app = express();
const connectDB = require("./data/mongoose"); 


connectDB();
app.use(express.json());

// ⭐ Call your DB connection here
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running and DB file imported successfully!");
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

