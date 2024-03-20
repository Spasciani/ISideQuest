const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {type:String},
    email: {type:String},
    password: {type:String},

    entryDate: {type:DataTransfer, default:Date.now}

})

const Users = mongoose.model('Users', userSchema, 'users')