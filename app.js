console.log("Hello world")
console.log("hoidanit")
const express = require("express");

const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
  res.send ("Hello world")
})
app.get("/hoidanit", (req, res) => {
  res.send ("Hello nkhanhday")
})
app.listen(PORT, ()=> {
  console.log('My app is running on port: 8080')
})