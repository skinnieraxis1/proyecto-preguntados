import { Sequelize } from "sequelize";

const conexionDb = new Sequelize('recetas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


  export default conexionDb