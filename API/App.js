import express from "express";
import cors from 'cors';

import conexionDb from "./database/db.js";

import { routerUsuarios } from "./routes/RouteUsuarios.js";
import { routerUsuariosPartidas } from "./routes/RouterUsuariosPartidas.js";
import { routerPartidas } from "./routes/RouterPartida.js";
import { routerGeneros } from "./routes/RouterGeneros.js";
import { routerUpdate } from "./routes/RouterUpdate.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/obtenerUsuarios ', routerUsuarios);
app.use('/obtenerPartidas', routerPartidas);
app.use('/obtenerUsuariosPartidas', routerUsuariosPartidas)
app.use('/obtenerGeneros', routerGeneros)
app.use('/actualizarJugars', routerUpdate)

try {
    await conexionDb.authenticate();
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/');
});
// http://localhost:8000/obtenerUsuario: 
// npm install nodemon -y
// npx nodemon App

/*
DELIMITER //

CREATE PROCEDURE obtenerPartidasPorGenero(IN genreName VARCHAR(60))
BEGIN
    SELECT *
    FROM partidas
    JOIN cuestionarios ON cuestionarios.id = partidas.cuestionario
    JOIN generos ON generos.id = cuestionarios.genero
    WHERE generos.nombres = genreName;
END //

DELIMITER ;
*/


//Node.js v18.16.0
//npm i express sequelize cors mysql2


/*
    {
        "puntaj":4000 
    }


*/

/*
const TablaJugadores: React.FC = () => {
  const [jugadores, setJugadores] = useState<Jugador[]>([]);

  useEffect(() => {
    
    const obtenerJugadores = async () => {
      try {
        const response = await axios.get<Jugador[]>('http://tu-api.com/jugars');
        setJugadores(response.data);
      } catch (error) {
        console.error('Error al obtener jugadores:', error);
      }
    };

    // Llamada a la función para obtener datos cuando el componente se monta
    obtenerJugadores();
  }, []); // El array vacío asegura que la llamada solo se realice una vez al montar el componente

  return (
    <div>
      <h1>Tabla de Jugadores</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puntaje</th>
            {}
            </tr>
            </thead>
            <tbody>
              {jugadores.map((jugador) => (
                <tr key={jugador.id}>
                  <td>{jugador.id}</td>
                  <td>{jugador.nombre}</td>
                  <td>{jugador.puntaje}</td>
                  {}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default TablaJugadores;
*/