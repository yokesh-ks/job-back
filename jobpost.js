const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobPost = new Schema({
    companyname: String,
    companywebsite: String,
    description: String,
    joblocation: String,
    rolename: String,
    skills: String
});

module.exports = mongoose.model("jobs", jobPost);