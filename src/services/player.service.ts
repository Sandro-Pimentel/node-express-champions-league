import { findAllPlayers } from "../repositories/player.repository";
import { noContent, ok } from "../utils/HttpHelper";

export const getPlayerService = async () => {
    const data = await findAllPlayers();
    let response = null;

    if(data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}
