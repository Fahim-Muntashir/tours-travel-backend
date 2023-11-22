import { Schema, model } from "mongoose";
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Please Tell Use your Name"]
    },
    age:{
    type: Number,
        required:[true,"Please Tell us your email"]
    },
    email: {
        type: String,
        uniqe: true,
        required:[true,"Please Tell us Your Email"],
        loawercase: true
    } ,
    photo: String,
    role: {
        type:String,
        enum: ['user','admin'],
        default:"user",
    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default: "active",
    }
})

const User=model<IUser>("User",userSchema)

export default User;