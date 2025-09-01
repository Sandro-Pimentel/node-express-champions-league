import { Player } from "../models/Player";
import { Statistics } from "../models/Statistics";
import fs from "fs/promises";

export const findAllPlayers = async (): Promise<Player[]> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: Player[] = JSON.parse(data);

    return clubs;
}

export const findPlayerById = async (id: number): Promise<Player | undefined> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: Player[] = JSON.parse(data);
    
    return clubs.find(player => player.id === id);
}

export const createPlayer = async (playerData: Player): Promise<void> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: Player[] = JSON.parse(data);

    clubs.push(playerData);
}

export const removePlayer = async (id: number): Promise<boolean> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: Player[] = JSON.parse(data);

    const index = clubs.findIndex(player => player.id === id);
    
    if(index !== -1) {
        clubs.splice(index, 1);
        return true;
    }

    return false;
}

export const updatePlayer = async (id: number, body: Statistics): Promise<Player> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: Player[] = JSON.parse(data);
    
    const index = clubs.findIndex(player => player.id === id);

    if(index !== -1) {
        clubs[index].statistics = body;
    }

    return clubs[index];
}
