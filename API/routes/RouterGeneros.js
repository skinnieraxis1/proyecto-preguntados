import  express  from "express";
import { obtenerGeneros } from "../IncognitivoControllers/Controller.js";
import { Generos } from "../IncognitivoModels/Model.js";

export const routerGeneros = express.Router();

routerGeneros.get('/', obtenerGeneros)