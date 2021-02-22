const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  update,
};

async function signup(req, res) {
  const user = new User(req.body);
  const cohort = { discipline: req.body.discipline, classNo: req.body.classNo };
  user.cohort = cohort;
  try {
    await user.save();
    const token = createJWT(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ err: "bad credentials" });
    }
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}

// functions to change the users  profile

function update(req, res) {
  User.findById(req.params.id, function (err, student) {
    student.name = req.body.name;
    student.phoneNum = req.body.phoneNum;
    student.location = req.body.location;
    student.website = req.body.website;
    student.bio = req.body.bio;
    student.avatar = req.body.avatar;
    student.favEmoji = req.body.favEmoji;
    student.projects =
      req.body.projects === "" ? "" : req.body.projects.split(",");
    student.hobbies =
      req.body.hobbies === "" ? "" : req.body.hobbies.split(",");
    student.publications =
      req.body.publications === "" ? "" : req.body.publications.split(",");
    student.save((err, student) => {
      if (err) res.json(student);
    });
  });
}
