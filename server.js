const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const cloudinary = require("cloudinary");
const passport = require("passport");
const axios = require("axios");
const cors = require("cors");

const app = express();

require("dotenv").config();
require("./config/database");
require("./config/passport");

const userRouter = require("./routes/api/users");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use(require("./config/auth"));
app.use("/api/users", require("./routes/api/users"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(
  session({
    secret: "merge",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRouter);

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
