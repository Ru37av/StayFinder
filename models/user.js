const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passporrtLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type :  String,
        required : true
    }
});

userSchema.plugin(passporrtLocalMongoose);

module.exports = mongoose.model("User", userSchema);