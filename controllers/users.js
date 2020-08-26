const User = require("../models/user");
const jwt = require("jsonwebtoken");
// const {
//   default: EditProfile,
// } = require("../src/components/EditProfile/EditProfile");

const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  update,
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
    console.log(token);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ err: "bad credentials" });
    }
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        console.log("token: " + token);
        res.json({ token });
      } else {
        console.log(err);
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}

// functions to change the users  profile

function update(req, res) {
  User.findById(req.params.id, function(err, student) {
    console.log("current user: ", student);
    console.log("req.body: ", req.body);
    student.name = req.body.name;
    student.save();
  });
}
