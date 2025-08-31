import express from "express";
import playerRouter from "./routes/player.router";
import clubRouter from "./routes/club.router";
import cors from "cors";

export default function createApp() {
    const app = express();

    app.use(express.json());
    
    const baseUrl = "/api/v1/";

    app.use(baseUrl, playerRouter);
    app.use(baseUrl, clubRouter);

    // const corsOptions = {
    //     origin: ["http://sandro.system.com", "http://gov.br"],
    //     methods: ["GET", "UPDATE"],
    // }

    //app.use(cors(corsOptions));
    app.use(cors());

    return app;
}
