import { Sequelize, QueryTypes} from "sequelize";
import { Cuestionarios, Jugars, Partidas, Preguntas, Usuarios, Generos } from "../IncognitivoModels/Model.js";



export const obtenerPartidas = async (req, res) => {
  try {
    const listaPartidas = await Partidas.sequelize.query(
      'CALL obtenerPartidasPorGenero(:genero)',
      {
        replacements: { genero: req.body.genero },
        type: Sequelize.QueryTypes.SELECT
      }
    );
   return res.status(200).json(listaPartidas);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuarios.findAll();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }  
};

//Obtener la informacion del usuario en la partida

export const obtenerUsuariosPartidas = async (req, res) => {
  try {
    const listaUsuariosPartidas = await Partidas.sequelize.query(
      'CALL obtenerUsuarioPorPartida(:partida)',
      {
        replacements: { partida: req.body.partida },
        type: Sequelize.QueryTypes.SELECT
      }
    );
   return res.status(200).json(listaUsuariosPartidas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }  
};

export const obtenerGeneros = async (req, res) => {
  try {
    const listaGeneros = await Generos.findAll();
    res.status(200).json(listaGeneros);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }  
};

// Crear



export const crearUsuarios = async (req, res) =>{
  try {
    await Usuarios.create(req.body);
    res.status(200).json("insercion buena")
  } catch (error) {
    res.json({ message: error.message})
  }
}



export const crearPartidas = async (req, res) =>{
  try {
    await Partidas.create(req.body);
    res.status(200).json("insercion buena")
  } catch (error) {
    res.json({ message: error.message})
  }
}

export const crearCuestionarios = async (req, res) =>{
  try {
    await Cuestionarios.create(req.body);
    res.status(200).json("insercion buena")
  } catch (error) {
    res.json({ message: error.message})
  }
}

export const crearJugars = async (req, res) =>{
  try {
    await Jugars.create(req.body);
    res.status(200).json("insercion buena")
  } catch (error) {
    res.json({ message: error.message})
  }
}

export const actualizarJugars = async (req, res) => {
  try {
    const { puntajeJugador, id } = req.body;

    const resultado = await Jugars.update(
      { puntajeJugador },
      { where: { id } }
    );

    if (resultado[0] === 0) {
  
      return res.status(404).json({ message: 'No se encontró el jugador para actualizar' });
    }

    res.status(200).json({ message: 'Se actualizó el puntaje del jugador' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar jugars' });
  }
};






