import axios from 'axios';
import { useState, useEffect } from 'react';

const URI = 'http://localhost:8000/obtenerPartidas/';

const CompShowPartidas = (props) => {
  const [partidass, setPartidass] = useState([]);

  useEffect(() => {
    if(props.genero){
    getPartida();
    console.log(props.genero)
    }
  }, [props.genero]);
  
  const getPartida = async () => {
    try {
      const res = await axios.post(URI, {genero: props.genero});
      setPartidass(res.data);  // Actualiza el estado con los datos obtenidos
    } catch (error) {
      console.error('Error fetching partidas:', error);
    }
  };

  return (
    <tbody className='cuerpoTabla'>
    {partidass.map((infoPartida, i) => (
      i % 2 === 0 ? (
        <tr key={infoPartida[0].codigo} className='servidorcito' onClick={() => props.toggleComponent("Partida", props.genero, infoPartida[0].codigo, infoPartida[0].nombre)} >
          <td className='a'>32</td>
          {console.log("La info es ", infoPartida)}
          <td className='b'>{infoPartida[0].cantJugadores}</td>
          <td className='c'>{infoPartida[0].cantJugadores}</td>
          <td className='d'>{infoPartida[0].tematica}</td>
        </tr>
      ) : null
    ))}
  </tbody>
  );
};

export default CompShowPartidas;
