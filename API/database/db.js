import { Sequelize } from "sequelize";

const db = new Sequelize('incognitiva', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


  export default db