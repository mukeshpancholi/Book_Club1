import express from "express";
import { body } from "express-validator";
import register from "../controllers/register.js";

const router = express.Router();

router.post(
  "/signup",
  [
    body("name", "Name must be at least 3 characters").isLength({ min: 3 }),
    body("email", "Invalid email").isEmail(),
    body("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],

  register
);

export default router;
