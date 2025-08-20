import { Request, Response } from "express";
import { getPlayerService } from "../services/player.service";

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    return res.status(httpResponse.statuscode).json(httpResponse.body);
}
