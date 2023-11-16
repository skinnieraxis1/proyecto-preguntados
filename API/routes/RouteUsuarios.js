import  express  from "express";
import { obtenerUsuarios, crearUsuarios } from "../IncognitivoControllers/Controller.js";
import { Usuarios } from "../IncognitivoModels/Model.js";

export const routerUsuarios= express.Router();

routerUsuarios.get('/', obtenerUsuarios)
routerUsuarios.get('/', crearUsuarios)