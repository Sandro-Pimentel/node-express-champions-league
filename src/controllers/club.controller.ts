import { Request, Response } from "express";
import { getClubService } from "../services/club.service";

export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubService();
    
    return res.status(response.statuscode).json(response.body);
}
