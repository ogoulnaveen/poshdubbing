const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name : String,
email : String,
password : String,
token: {
    type: String,
    required: false,
    default: null,
  },
});

module.exports = mongoose.model("users",userSchema);