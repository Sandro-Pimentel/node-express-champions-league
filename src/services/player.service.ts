import { noContent, ok } from "../utils/HttpHelper";

export const getPlayerService = async () => {
    const data = { player: "Ronaldo Fenômeno" };
    let response = null;

    if(data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}
