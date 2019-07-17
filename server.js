require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});


console.log("process.env", process.env);
console.log("process.env.YOUR_API_KEY", process.env.YOUR_API_KEY);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`Server listening on ${PORT}`);
