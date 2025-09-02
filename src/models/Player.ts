import { Statistics } from "./Statistics";

export interface PlayerResponse {
    id: number;
    name: string;
    clubId: number;
    nationality: string;
    position: string;
    statistics: Statistics;
}

export interface PlayerRequest {
    name: string;
    clubId: number;
    nationality: string;
    position: string;
    statistics: Statistics;
}

export interface PlayerData {
    name: string;
    clubId: number;
    nationality: string;
    position: string;
}
