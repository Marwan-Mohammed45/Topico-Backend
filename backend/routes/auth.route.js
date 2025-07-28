import express from "express";
import {
  signin,
  signup,
  signout,
  verifyOTP,
  forgotPassword,
  resetPassword,
  getAllUsers
} from "../controller/auth.controller.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.post("/verify-otp", verifyOTP);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/", verifyToken, isAdmin, getAllUsers);

export default router;
