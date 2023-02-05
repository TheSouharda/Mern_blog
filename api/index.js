const express = require("express");
const app = express();
const cors = require("cors");
const { mongo, default: mongoose } = require("mongoose");
const User = require("./models/User");

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://blog:dBBw4P7hTiYaWxz3@cluster0.8smfzlq.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/test", (req, res) => {
  res.json("test 0k");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(4000);
