import  express  from "express";
import {  actualizarJugars } from "../IncognitivoControllers/Controller.js";
import { Jugars } from "../IncognitivoModels/Model.js";

export const routerUpdate = express.Router();

routerUpdate.put('/', actualizarJugars)