import express from "express";
import mainRoutes from "./routes/index";

const server = express();
server.use(mainRoutes);

var port = process.env.PORT || 3000;
server.listen(port);