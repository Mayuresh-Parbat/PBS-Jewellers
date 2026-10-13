import { Router } from "express";
import { loginAdmin, logoutAdmin, refreshAccessTokenAdmin, getCurrentAdmin, registerAdmin, getAllUsers } from "../controllers/admin.controller.js"
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const adminRouter = Router()

// for Admin
adminRouter.route("/register-admin").post(registerAdmin)
