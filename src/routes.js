import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";

const routes = Router();

routes.get("/", UserController.index);
routes.post("/users", UserController.create);

routes.get("/sessions", SessionController.index);

export default routes;
