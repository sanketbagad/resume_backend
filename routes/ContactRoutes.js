import { createContact } from "../controllers/ContactController.js";

import express from "express";

const router = express.Router();

router.post("/", createContact);

export default router;