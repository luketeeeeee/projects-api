import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import log from "./utils/logger";

import { projectsRoutes } from "./api/projects";

dotenv.config();
const port = 8080;
const url = `http://localhost:${port}/`;

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/projects", projectsRoutes);

app.listen(port, () => {
  log.info(`servidor iniciado em ${url}`);
});
