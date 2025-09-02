import { PlayerData, PlayerRequest, PlayerResponse } from "../models/Player";
import { Statistics } from "../models/Statistics";
import fs from "fs/promises";

export const findAllPlayers = async (filters: any): Promise<PlayerResponse[]> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    let players: PlayerResponse[] = JSON.parse(data);

    if(filters.name) players = players.filter(player => player.name.toLowerCase().includes(filters.name.toLowerCase()));
    
    if(filters.nationality) players = players.filter(player => player.nationality.toLowerCase().includes(filters.nationality.toLowerCase()));

    if(filters.position) players = players.filter(player => player.position.toLowerCase().includes(filters.position.toLowerCase()));
    
    return players;
}

export const findPlayerById = async (id: number): Promise<PlayerResponse | undefined> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const players: PlayerResponse[] = JSON.parse(data);
    
    return players.find(player => player.id === id);
}

export const createPlayer = async (playerData: PlayerRequest): Promise<void> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const players: PlayerResponse[] = JSON.parse(data);
    
    let id = 0;

    players.forEach(club => {
        if(club.id >= id) id = club.id + 1;
    })

    players.push({id, ...playerData});
    await fs.writeFile("./src/data/players.json", JSON.stringify(players));
}

export const removePlayer = async (id: number): Promise<boolean> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const players: PlayerResponse[] = JSON.parse(data);

    const index = players.findIndex(player => player.id === id);
    
    if(index !== -1) {
        players.splice(index, 1);
        await fs.writeFile("./src/data/players.json", JSON.stringify(players));
        return true;
    }

    return false;
}

export const updatePlayerStats = async (id: number, body: Statistics): Promise<PlayerResponse> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const players: PlayerResponse[] = JSON.parse(data);
    
    const index = players.findIndex(player => player.id === id);

    if(index !== -1) {
        players[index].statistics = body;
        await fs.writeFile("./src/data/players.json", JSON.stringify(players));
    }

    return players[index];
}

export const updatePlayerData = async (id: number, body: PlayerData): Promise<PlayerResponse> => {
    const data = await fs.readFile("./src/data/players.json", "utf-8");
    const players: PlayerResponse[] = JSON.parse(data);
    
    const index = players.findIndex(player => player.id === id);

    if(index !== -1) {
        //players[index] = {id, ...body, statistics: players[index].statistics};
        players[index] = {...players[index], ...body};
        await fs.writeFile("./src/data/players.json", JSON.stringify(players));
    }

    return players[index];
}
