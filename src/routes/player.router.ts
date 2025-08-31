import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer, deletePlayer, patchPlayer } from "../controllers/player.controller";

const router = Router();

router.get(`/players`, getPlayer);
router.get(`/players/:id`, getPlayerById);

router.post(`/players`, postPlayer);

router.delete(`/players/:id`, deletePlayer);

router.patch(`/players/:id`, patchPlayer);

export default router;
