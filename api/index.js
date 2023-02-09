const express = require("express");
const app = express();
const cors = require("cors");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
const secret = "esygsbjfvhfdivnfvkndvbsdvkd";

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://blog:3ZkGBMNgNYQSPHYe@cluster0.iciiyhr.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/test", (req, res) => {
  res.json("test 0k");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) {
        throw err;
      }
      res.cookie("token", token).json("ok");
      // req.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong creds");
  }
});

app.listen(4000);

//3ZkGBMNgNYQSPHYe
