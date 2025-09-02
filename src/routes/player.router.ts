import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer, deletePlayer, patchPlayerStats, patchPlayerData } from "../controllers/player.controller";

const router = Router();

router.get(`/players`, getPlayer);
router.get(`/players/:id`, getPlayerById);

router.post(`/players`, postPlayer);

router.delete(`/players/:id`, deletePlayer);

router.patch(`/players/:id`, patchPlayerData);
router.patch(`/players/stats/:id`, patchPlayerStats);

export default router;
