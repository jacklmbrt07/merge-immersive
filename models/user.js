const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
    discipline: {
        type: String,
        enum: ['UXI', 'SEI', 'DSI'] // the JSX <form> will display the whole name like <option value="UXI">User Experience Immersive</option>
    },
    classNo: {
        type: Number,
        min: 100,
        max: 999,
    }
},{timestamps: true})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNum: {
        type: Number,
        min: 1000000000,
        max: 9999999999
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    location: String,
    favEmoji: String, // this might need an install
    projects: [String],
    hobbies: [String],
    publications: [String],
    website: String,
    cohort: cohortSchema,
    password: String,

}, {timestamps: true})

module.exports = mongoose.model("User", userSchema);