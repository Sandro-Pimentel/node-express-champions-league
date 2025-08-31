import { Player } from "../models/Player";
import { Statistics } from "../models/Statistics";

const database: Player[] = [];

export const findAllPlayers = async (): Promise<Player[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<Player | undefined> => {
    return database.find(player => player.id === id);
}

export const createPlayer = async (playerData: Player): Promise<void> => {
    database.push(playerData);
}

export const removePlayer = async (id: number): Promise<boolean> => {
    const index = database.findIndex(player => player.id === id);
    
    if(index !== -1) {
        database.splice(index, 1);
        return true;
    }

    return false;
}

export const updatePlayer = async (id: number, body: Statistics): Promise<Player> => {
    const index = database.findIndex(player => player.id === id);

    if(index !== -1) {
        database[index].statistics = body;
    }

    return database[index];
}
