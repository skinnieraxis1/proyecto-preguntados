import  express  from "express";
import { obtenerBuscarRecetas } from "../recetasControllers/controller.js";
import { buscarrecetas} from "../RecetasModels/model.js";

export const routerBuscarRecetas= express.Router();

routerBuscarRecetas.get('/', obtenerBuscarRecetas)


