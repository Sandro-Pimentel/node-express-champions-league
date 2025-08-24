import { Player } from "../models/Player";

const database: Player[] = [
    { 
        id: 1,
        name: "Ronaldo Fenômeno"
    },
    { 
        id: 2,
        name: "Cristiano Ronaldo"
    },
    { 
        id: 3,
        name: "Ronaldinho Gaúcho"
    },
]

export const findAllPlayers = async (): Promise<Player[]> => {
    return database;
}

export const findById = async (id: number): Promise<Player | undefined> => {
    return database.find(player => player.id === id);
}
