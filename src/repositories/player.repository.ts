import { PlayerData, PlayerRequest, PlayerResponse } from "../models/Player";
import { Statistics } from "../models/Statistics";
import fs from "fs/promises";

export const findAllPlayers = async (): Promise<PlayerResponse[]> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: PlayerResponse[] = JSON.parse(data);

    return clubs;
}

export const findPlayerById = async (id: number): Promise<PlayerResponse | undefined> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: PlayerResponse[] = JSON.parse(data);
    
    return clubs.find(player => player.id === id);
}

export const createPlayer = async (playerData: PlayerRequest): Promise<void> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: PlayerResponse[] = JSON.parse(data);
    
    let id = 0;

    clubs.forEach(club => {
        if(club.id > id) id = club.id + 1;
    })

    clubs.push({...playerData, id});
    await fs.writeFile("./src/data/players.json", JSON.stringify(clubs));
}

export const removePlayer = async (id: number): Promise<boolean> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: PlayerResponse[] = JSON.parse(data);

    const index = clubs.findIndex(player => player.id === id);
    
    if(index !== -1) {
        clubs.splice(index, 1);
        await fs.writeFile("./src/data/players.json", JSON.stringify(clubs));
        return true;
    }

    return false;
}

export const updatePlayerStats = async (id: number, body: Statistics): Promise<PlayerResponse> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: PlayerResponse[] = JSON.parse(data);
    
    const index = clubs.findIndex(player => player.id === id);

    if(index !== -1) {
        clubs[index].statistics = body;
        await fs.writeFile("./src/data/players.json", JSON.stringify(clubs));
    }

    return clubs[index];
}

export const updatePlayerData = async (id: number, body: PlayerData): Promise<PlayerResponse> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const clubs: PlayerResponse[] = JSON.parse(data);
    
    const index = clubs.findIndex(player => player.id === id);

    if(index !== -1) {
        clubs[index] = {...body, ...clubs[index]};
        await fs.writeFile("./src/data/players.json", JSON.stringify(clubs));
    }

    return clubs[index];
}
