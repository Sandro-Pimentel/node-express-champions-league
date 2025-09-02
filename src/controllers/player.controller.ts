import { Request, Response } from "express";
import { deletePlayerService, getPlayerByIdService, getPlayerService, patchPlayerDataService, patchPlayerStatsService, postPlayerService } from "../services/player.service";
import { Statistics } from "../models/Statistics";
import { PlayerData, PlayerRequest } from "../models/Player";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await getPlayerByIdService(id);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const { body } = req;

    const httpResponse = await postPlayerService(body);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerService(id);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const patchPlayerStats = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body: Statistics = req.body;
    const httpResponse = await patchPlayerStatsService(id, body);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const patchPlayerData = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body: PlayerData = req.body;
    const httpResponse = await patchPlayerDataService(id, body);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}
