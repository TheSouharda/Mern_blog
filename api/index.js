const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);
app.use(express.json());

app.get("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
  res.json("test ok");
  console.log(requestData);
});

app.listen(4000);
