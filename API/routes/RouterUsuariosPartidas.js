import  express  from "express";
import { obtenerUsuariosPartidas } from "../IncognitivoControllers/Controller.js";
import { Jugars } from "../IncognitivoModels/Model.js";

export const routerUsuariosPartidas = express.Router();

routerUsuariosPartidas.post('/', obtenerUsuariosPartidas)

