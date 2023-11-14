import { Sequelize } from "sequelize";
import { cuestionario, partida, pregunta } from "../IncognitivoModels/model";


export const obtenerPartidas = async (req, res) => {
  try {
    const listaPartidas = await partida.findAll({
      where: { id: req.params.id },
      include: [
        {
          mode: cuestionario,
          on: {
            y: Sequelize.where(
              Sequelize.col('cuestionario.y'),
              '=',
              Sequelize.col('id.y')
            )
          },
          attributes: ["genero"]
        }
      ]
    });
    res.status(200).json(pregunta);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const obtenerGeneros = async (req, res) => {
  try {
    const listaGeneros = await genero.findAll();
    res.status(200).json(listaIngredientes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }  
};

export const obtenerBuscarRecetas = async (req, res) => {
  try {
    const listaIR = await buscarrecetas.findAll({
      attributes: {exclude: ['id']},
    });
    res.status(200).json(listaIR);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const crearRecetas = async (req, res) =>{
  try {
    await recetas.create(req.body);
    res.status(200).json("insercion buena")
  } catch (error) {
    res.json({ message: error.message})
  }
}




