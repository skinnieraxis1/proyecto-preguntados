import  express  from "express";
import { obtenerRecetas, crearRecetas } from "../recetasControllers/controller.js";
import { recetas} from "../RecetasModels/model.js";

export const routerRecetas= express.Router();

routerRecetas.get('/', obtenerRecetas)
routerRecetas.post('/', crearRecetas)




