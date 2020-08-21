const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
    discipline: {
        type: String,
        enum: ['UXI', 'SEI', 'DSI'], // the JSX <form> will display the whole name like <option value="UXI">User Experience Immersive</option>
        required: true
    },
    classNo: {
        type: String,
        validate: {
            validator: (v) => {
                return /d{3}/.test(v)
            },
            message: props => `${props.value} is not a valid class number`
        },
        required: true,
    }
},{timestamps: true})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        validate: {
            validator: (v) => {
                return /d{10}/.test(v)
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: false
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    location: String,
    favEmoji: String, // this might need an install
    projects: [{type: String}],
    hobbies: [{type: String}],
    publications: [{type: String}],
    website: String,
    cohort: cohortSchema,
    password: String,

}, {timestamps: true})

module.exports = mongoose.model("User", userSchema);