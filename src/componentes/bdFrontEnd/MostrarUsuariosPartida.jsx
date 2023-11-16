import axios from 'axios';
import { useState, useEffect } from 'react';

const URI = 'http://localhost:8000/obtenerUsuariosPartidas/';

const CompShowUsuarioEnPartida = (props) => {
  const [usuario, setUsuario] = useState([]);

  var x = 0

  useEffect(() => {
    if (props.codigo) {
      getUsuarioPartida();
    }
  }, [props.codigo]);

  useEffect(() => {
    console.log("el usuario es ", usuario)
  }, [usuario]);

  const getUsuarioPartida = async () => {
    try {
      const res = await axios.post(URI, { partida: props.codigo });

      // Filtrar solo arrays en la respuesta
      const arraysPartida = res.data.filter(item => Array.isArray(item));

      // Tomar el primer array si existe
      const primerArray = arraysPartida.length > 0 ? arraysPartida[0] : [];
      setUsuario(primerArray);
    } catch (error) {
      console.error('Error fetching partidas:', error);
    }
  };

  return (
    <tbody className='cuerpoTabla'>
      {usuario.map((infoUsuario, i) => {
        <tr key={infoUsuario && infoUsuario[i] ? infoUsuario[i].email : 'N/A'} className='servidorcito'>
          <td className='a'>30</td>
          <td className='b'>{infoUsuario && infoUsuario[i] ? infoUsuario[i].conectado : 'N/A'}</td>
          <td className='d'>{infoUsuario && infoUsuario[i] ? infoUsuario[i].puntajeJugador : 'N/A'}</td>
          {console.log(infoUsuario && infoUsuario[i] ? infoUsuario[i] : null)}
        </tr>
      })}
    </tbody>
  );
};

export default CompShowUsuarioEnPartida;
