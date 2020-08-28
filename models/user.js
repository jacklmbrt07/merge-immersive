const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

const cohortSchema = new Schema(
  {
    discipline: {
      type: String,
      enum: ["UXI", "SEI", "DSI"], // the JSX <form> will display the whole name like <option value="UXI">User Experience Immersive</option>
      required: true,
    },
    classNo: {
      type: String,
      // validate: {
      //   validator: (v) => {
      //     return /d{3}/.test(v);
      //   },
      //   message: (props) => `${props.value} is not a valid class number`,
      // },
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNum: {
      type: String,
      maxlength: 10,
      // // min: 1000000000,
      // // max: 9999999999,
      // validate: {
      //   validator: (v) => {
      //     return /d{10}/.test(v);
      //   },
      //   message: (props) => `${props.value} is not a valid phone number!`,
      // },
      // required: false,
    },
    avatar: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    location: {
      city: String,
      unitedState: String,
    },
    favEmoji: String, // this might need an install
    projects: [{ type: String }],
    hobbies: [{ type: String }],
    publications: [{ type: String }],
    website: String,
    cohort: cohortSchema,
    password: String,
    bio: String,
    githubUsername: String,
    twitter: String,
    repo: String,
    followers: String,
    following: String,
    githubId: String,
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    } else {
      cb(null, isMatch);
    }
  });
};

module.exports = mongoose.model("User", userSchema);
