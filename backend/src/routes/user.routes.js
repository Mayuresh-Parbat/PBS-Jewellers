import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateUser, refreshAccessToken, getCurrentUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";



