import { Request, Response } from "express";
import { getClubService } from "../services/club.service";

export const getClubs = async (req: Request, res: Response) => {
    const { query } = req;

    const response = await getClubService(query);
    
    return res.status(response.statuscode).json(response.body);
}
