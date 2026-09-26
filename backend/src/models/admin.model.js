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
{
        timestamps: true
    } 
);


adminSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("adminPassword")) return next();
        this.adminPassword = await bcrypt.hash(this.adminPassword, 10);
        next();
    } catch (error) {
        next(error);
    }
});


adminSchema.methods.isPasswordCorrect = async function(adminPassword){
    return await bcrypt.compare(adminPassword, this.adminPassword)
}


