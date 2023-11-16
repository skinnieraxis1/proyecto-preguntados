import './Tabla.css';
import { FaWifi } from 'react-icons/fa';

import MostrarPartidas from '../bdFrontEnd/MostrarPartidas'
import MostrarUsuariosPartida from '../bdFrontEnd/MostrarUsuariosPartida'

function Tabla(props) {
  console.log(props.genero);

  return (
    <div className='cuerpoTabla'>
      <table className='tableTabla'>
        <thead>
          {props.id === "partidas" && (
            <tr>
              <th className='A'><FaWifi/></th>
              <th className='B'>Nombre</th>
              <th className='C'>Jugadores</th>
              <th className='D'>Juego</th>
            </tr>
          )}
          {props.id === "jugadores" && (
            <tr>
              <th className='A'><FaWifi/></th>
              <th className='B'>Nickname</th>
              <th className='D'>Puntaje</th>
            </tr>
          )}
        </thead>
        
          {props.id === "partidas" && <MostrarPartidas genero={props.genero} toggleComponent={props.toggleComponent} />}
          {props.id === "jugadores" && <MostrarUsuariosPartida codigo={props.codigo} />}
        
      </table>
    </div>
  );
}

export default Tabla;

