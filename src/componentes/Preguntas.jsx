import './Partida.css'
import './Preguntas.css'
import "bootstrap"
import CardPregunta from './microComponentes/CardPregunta'
import CardPreguntaD from './microComponentes/CardPreguntaD'


function Preguntas(props) {


  return (
    <>
        <div className='zonaPreguntas'>
            <div className='contenedorPregunta'>
                <div className='contenedorPuntuacion'>
                    <h2 className='puntuacion'>Puntuacion: 1800</h2>
                </div>  
            </div>
            <div className='contenedorPregunta'>

                {props.tipoPregunta === "multiplesRespuestas" && 

                <div className="container cuadro">
                    <table>
                        <p className='a pregunta'>¿Cuál es el cultivo tratado artesanalmente que tiene el mayor precio?</p> 
                        <tr className='trPreguntas'><td className='widtha'><button type="button" className="btn btn-light">Respuesta 1</button></td> <td><button type="button" class="btn btn-light">Respuesta 2</button></td></tr>
                        <tr className='trPreguntas'><td className='widtha'><button type="button" className="btn btn-light">Respuesta 3</button></td> <td><button type="button" className="btn btn-light">Respuesta 4</button></td></tr>
                    </table>
                </div>
                
                }
                {props.tipoPregunta === "TrueOrFalse" && 
                
                <div className="container-fluid">
                    <div className="container cuadro">
                        <table>
                        <p className='pregunta'>¿Cuál es el cultivo tratado artesanalmente que tiene el mayor precio?</p>
                        <tr className='trPreguntas'>
                            <td className='tdPreguntas'><button type="button" class="btn btn-light">Respuesta 1</button></td>
                            <td className='tdPreguntas'><button type="button" class="btn btn-light">Respuesta 2</button></td>
                        </tr>
                        </table>
                    </div>
                </div>

                }

                {props.tipoPregunta === "ordenar" && 
                
                <div className="container-fluid">
                    <div className="container cuadro">
                        <table>
                            <p className='pregunta'>¿En qué temporada del año se pueden comprar semillas de frutilla en un festival?</p>
                            <tr className='trPreguntas'><td className='tdPreguntas'><CardPregunta></CardPregunta></td></tr>
                            <tr className='trPreguntas'><td className='tdPreguntas'><CardPreguntaD></CardPreguntaD></td></tr>
                        </table>
                    </div>
                </div>
                
                }
                
            </div>
        </div>
        
    </>
    )
}

export default Preguntas