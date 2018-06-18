const mongoose = require('../config/database');

//roles to create the data
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

//use the data
const userModel = mongoose.model('contact',userSchema);

module.exports = userModel;