import { Router } from "express";
import { getPlayer } from "../controllers/player.controller";

const playersUrl = "/players/";

const router = Router();

router.get(playersUrl, getPlayer);

export default router;
