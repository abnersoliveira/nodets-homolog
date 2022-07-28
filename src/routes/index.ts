import { Router } from "express";

import * as HomeController from "../controllers/homeController";

const router = Router();

// Home
router.get("/", HomeController.home);

export default router;