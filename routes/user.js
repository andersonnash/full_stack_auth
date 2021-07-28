import { Router } from "express";
import { signUp, signIn, verify } from "../contollers/users.js";

const router = Router();

//sign up : post
router.post("/sign-up", signUp);
//sign in : post
router.post("/sign-in", signIn);
//verify : get
router.get("/verify", verify);
//change PW : post
router.post("/change-password");

export default router;
