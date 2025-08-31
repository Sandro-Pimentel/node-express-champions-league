import { Player } from "../models/Player";
import { Statistics } from "../models/Statistics";
import { createPlayer, findAllPlayers, findPlayerById, removePlayer, updatePlayer } from "../repositories/player.repository";
import * as HttpResponse from "../utils/HttpHelper";

export const getPlayerService = async () => {
    const data = await findAllPlayers();
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayerById(id);
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const postPlayerService = async (playerData: Player) => {
    let response = null;

    if(Object.keys(playerData).length !== 0) {
        await createPlayer(playerData);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await removePlayer(id);

    if(isDeleted) response = await HttpResponse.ok({ message: "Successfull"});
    else response = await HttpResponse.badRequest();

    return response;
}

export const patchPlayerService = async (id: number, body: Statistics) => {
    let response = null;

    const data = await updatePlayer(id, body);

    if(Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
}
