import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const adminSchema = new Schema ( 
    {
        adminUserName:{
            type: String,
            required: true
        },
        adminFullName:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
                adminPhoneNumber:{
            type: String,
            required: true,
            unique: true,
        },
        adminEmail: {
            type: String,
            required: true,
            unique: true,
        },
                adminPassword: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        },
        

    }, 
    {
        timestamps: true
    } 
);

