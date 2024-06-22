import { Router } from "express";
import { register } from "../contollers/user.contoller.js";

const router = Router()

router.route("/register").post(register)

export default router