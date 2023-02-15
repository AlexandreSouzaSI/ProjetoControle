import "reflect-metadata";
import "./shared/container/index";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./documentation/swagger.json";

import express from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
