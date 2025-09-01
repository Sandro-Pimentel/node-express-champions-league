import { findAllClubs } from "../repositories/club.repository";
import * as HttpResponse from "../utils/HttpHelper";

export const getClubService = async () => {
    const data = await findAllClubs();
    let response = null;

    if(!data) {
        response = HttpResponse.noContent();
    } else {
        response = HttpResponse.ok(data);
    }

    return response;
}
