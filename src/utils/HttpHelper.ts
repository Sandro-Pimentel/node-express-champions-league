import { HttpResponse } from "../types/HttpResponse";

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statuscode: 200,
        body: data,
    };
}

export const created = async (): Promise<HttpResponse> => {
    return {
        statuscode: 201,
        body: { message: "Successfull" },
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statuscode: 204,
        body: null,
    };
}

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statuscode: 400,
        body: null,
    }
}
