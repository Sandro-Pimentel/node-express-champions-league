import { Request, Response } from "express";
import { deletePlayerService, getPlayerByIdService, getPlayerService, patchPlayerService, postPlayerService } from "../services/player.service";
import { Statistics } from "../models/Statistics";

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

export const patchPlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { body } = req;
    const httpResponse = await patchPlayerService(id, body);

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}
