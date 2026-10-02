import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const userSchema = new Schema(
    {
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        addressLine1: {
            type: String,
            required: false,
            trim: true, 
            index: true
        },
        
        addressLine2: {
            type: String,
            required: false,
            trim: true, 
            index: true
        },
        country: {
            type: String,
            required: false,
            trim: true, 
            index: true
        },
        
