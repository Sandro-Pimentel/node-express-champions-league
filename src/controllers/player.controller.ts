import { Request, Response } from "express";
import { getPlayerByIdService, getPlayerService, patchPlayerService } from "../services/player.service";
import { Statistics } from "../models/Statistics";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const { id } = parseInt(req.params);
    const httpResponse = await getPlayerByIdService(id);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const { body } = req;
    const httpResponse = await postPlayerService(body);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const deletePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const httpResponse = await deletePlayerService(id);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}

export const patchPlayer = async (req: Request, res: Response) => {
    const { id } = parseInt(req.params);
    const { body }: Statistics = req;
    const httpResponse = await patchPlayerService(id, body);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}
