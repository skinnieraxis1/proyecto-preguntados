// Tabla.jsx

import './Tabla.css';
import { FaWifi } from 'react-icons/fa';

function Tabla(props) {
  return (
    <>
      <div className='cuerpoTabla'>
        <table className='tableTabla'>
          <thead>
            <tr>
                {props.id === "1" && 
                    <>
                    <th className='A'><FaWifi/></th>
                    <th className='B'>Nombre</th>
                    <th className='C'>Jugadores</th>
                    <th className='D'>Juego</th>
                    </>
                }
                {props.id === "2" && 
                    <>
                    <th className='A'><FaWifi/></th>
                    <th className='B'>Nickname</th>
                    <th className='D'>Puntaje</th>
                    </>
                }
            </tr>
          </thead>
          <tbody className='listaServidores'>
                {props.id === "1" && 
                    <>
                    <tr className='servidorcito'  onClick={() => props.toggleComponent("Partida", props.genero, "A243GFcasW", "Pepa Lindo")}>
                        <td className='a'>32</td>
                        <td className='b'>Pepa Lindo</td>
                        <td className='c'>2/4</td>
                        <td className='d'>Stardew Valley</td>
                    </tr>
                    </>
                }
                {props.id === "2" && 
                    <>
                    <tr className='servidorcito'>
                        <td className='a'>30</td>
                        <td className='b'>JuanitoGames123</td>
                        <td className='d'>2400</td>
                    </tr>
                    </>
                }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tabla;
