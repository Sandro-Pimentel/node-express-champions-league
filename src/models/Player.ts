import { Statistics } from "./Statistics";

export interface Player {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
    statistics: Statistics;
}
