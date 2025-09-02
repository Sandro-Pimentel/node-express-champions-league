import { Club } from "../models/Club";
import fs from "fs/promises";

export const findAllClubs = async (filters: any): Promise<Club[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    let clubs: Club[] = JSON.parse(data);

    if(filters.name) clubs = clubs.filter(club => club.name.toLowerCase().includes(filters.name.toLowerCase()));

    if(filters.country) clubs = clubs.filter(club => club.country.toLowerCase().includes(filters.country.toLowerCase()));

    return clubs;
}
