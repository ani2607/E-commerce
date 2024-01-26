import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cartItems : {
        type : [],
        }
},{timestamps : true})

const  UserModel = mongoose.model('UserModel',UserSchema);

export default UserModel;

