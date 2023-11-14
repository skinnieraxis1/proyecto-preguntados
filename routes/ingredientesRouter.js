import express from "express";
import { ingredientes } from "../RecetasModels/model.js";
import { obtenerIngredientes } from "../recetasControllers/controller.js";

export const routerIngredientes= express.Router();

routerIngredientes.get('/', obtenerIngredientes)