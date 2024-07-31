import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import connect from "./DB/connnection.js";
import register from "./Models/signup.js";

const app = express();
const port = 1100;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", async (req, res) => {
  const users = await register.find({});
  res.json({ success: true, users });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  register.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "hell0-im-under-water",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          res.json("Success");
        } else {
          res.json({ message: "Incorrect Password" });
        }
      });
    } else {
      res.json({ message: "Email does not exist" });
    }
  });
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      register
        .create({ name, email, password: hash })
        .then((user) => res.json("Success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server is running in port: ${port}`);
      });
    } catch (error) {
      console.error("Server is Not Running");
    }
  })
  .catch((error) => {
    console.error("Invalid Database Connection", error);
  });
