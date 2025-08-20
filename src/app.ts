import express from "express";
import playerRouter from "./routes/player.router";

export default function createApp() {
    const app = express();

    app.use(express.json());
    
    const baseUrl = "/api/v1/";

    app.use(baseUrl, playerRouter);

    return app;
}
