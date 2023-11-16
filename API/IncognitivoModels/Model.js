import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const Generos = db.define('generos', {
    nombres: { type: DataTypes.STRING }
}, {
    timestamps: false
});

export const Cuestionarios = db.define('cuestionarios', {
    tematica: { type: DataTypes.STRING }, 
    genero: { type: DataTypes.INTEGER}
}, {
    timestamps: false
});

export const Preguntas = db.define('preguntas', {
    descripcion: { type: DataTypes.STRING }, 
    puntaje: { type: DataTypes.INTEGER },
    tipo: { type: DataTypes.STRING },
    cuestionario: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});

export const Respuestas = db.define('respuestas', {
    descripcion: { type: DataTypes.STRING }, 
    correcta: { type: DataTypes.BOOLEAN },
    pregunta: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});

export const Usuarios = db.define('usuarios', {
    nombre: { type: DataTypes.STRING }, 
    email: { type: DataTypes.STRING,  primaryKey: true },
    contrasena: { type: DataTypes.STRING }
}, {
    timestamps: false
});

export const Partidas = db.define('partidas', {
    codigo: { type: DataTypes.STRING }, 
    nombre: { type: DataTypes.STRING }, 
    cantJugadores: { type: DataTypes.INTEGER },
    publicaPriv: { type: DataTypes.BOOLEAN },
    codigo: { type: DataTypes.STRING, primaryKey: true },
    cuestionario: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});

export const Jugars = db.define('jugars', {
    partida: { type: DataTypes.STRING }, 
    usuario: { type: DataTypes.INTEGER },
    conectado: { type: DataTypes.BOOLEAN },
    puntajeJugador: { type: DataTypes.INTEGER }
}, {
    timestamps: false
});