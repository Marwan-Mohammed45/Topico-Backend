import express from "express";
import { signin, signup, signout,verifyOTP } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.post("/verify-otp", verifyOTP);

export default router;