import express from "express";
import { createCarreer } from "../controllers/CarrerController.js";

const router = express.Router();

router.post("/", createCarreer);

export default router;