import { Statistics } from "./Statistics";

export interface Player {
    id: number;
    name: string;
    clubId: number;
    nationality: string;
    position: string;
    statistics: Statistics;
}
