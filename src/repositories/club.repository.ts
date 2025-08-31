import { Club } from "../models/Club";
import fs from "fs/promises";

export const findAllClubs = async (): Promise<Club[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: Club[] = JSON.parse(data);

    return clubs;
}
