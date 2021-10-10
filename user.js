const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAccount = new Schema({
    username: String,
    email: String,
    password: String,
    date_of_birth: Date,
    gender: String,
    contact_number: Number,
    user_image: String,
});

module.exports = mongoose.model("Users", userAccount);