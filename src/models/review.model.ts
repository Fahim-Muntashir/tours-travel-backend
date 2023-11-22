import { Schema } from "mongoose";
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
        loadcase: true
    } ,
    photo: String,
    role: {
        type:String,
    }
})