import  express  from "express";
import { obtenerPartidas, crearPartidas } from "../IncognitivoControllers/Controller.js";
import { Partidas } from "../IncognitivoModels/Model.js";

export const routerPartidas = express.Router();

routerPartidas.post('/', obtenerPartidas)
routerPartidas.get('/', crearPartidas)