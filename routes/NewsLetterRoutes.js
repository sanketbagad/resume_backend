import express from "express";
import { createNewsLetter } from "../controllers/NewsLetterController.js";

const router = express.Router();

router.post("/", createNewsLetter);

export default router;