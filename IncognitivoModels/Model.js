import conexionDb from "../conexionBd/db.js ";
import { DataTypes } from "sequelize";

export const genero = conexionDb.define('genero', {
    nombres: { type: DataTypes.STRING }
}, {
    timestamps: false
});

export const cuestionario = conexionDb.define('cuestionario', {
    tematica: { type: DataTypes.STRING }, 
    genero: { type: DataTypes.INTEGER}
}, {
    timestamps: false
});

export const pregunta = conexionDb.define('pregunta', {
    descripcion: { type: DataTypes.STRING }, 
    puntaje: { type: DataTypes.INTEGER },
    tipo: { type: DataTypes.STRING },
    cuestionario: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});

export const respuesta = conexionDb.define('respuesta', {
    descripcion: { type: DataTypes.STRING }, 
    correcta: { type: DataTypes.BOOLEAN },
    pregunta: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});

export const usuario = conexionDb.define('usuario', {
    nombre: { type: DataTypes.STRING }, 
    email: { type: DataTypes.STRING },
    contreseña: { type: DataTypes.STRING }
}, {
    timestamps: false
});

export const partida = conexionDb.define('partida', {
    codigo: { type: DataTypes.STRING }, 
    cantJugadores: { type: DataTypes.INTEGER },
    publicaPriv: { type: DataTypes.BOOLEAN },
    cuestionario: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});

export const jugar = conexionDb.define('jugar', {
    partida: { type: DataTypes.STRING }, 
    usuario: { type: DataTypes.INTEGER },
    conectado: { type: DataTypes.BOOLEAN },
    puntajeJugador: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});