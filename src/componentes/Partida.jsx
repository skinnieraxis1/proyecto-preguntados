import './Partida.css'
import Info from './microComponentes/info'
import "bootstrap"
import Tabla from './microComponentes/tabla'

function Partida(props) {


  return (
    <>

        <div className='cuerpoServidores'>
            <div className='cuadradoServidores'>
                <h1 className='tituloServidores'>{props.nombre}</h1>
                <Info title="GÉNERO" subtitle={props.genero}></Info>
                <Info title="CÓDIGO" subtitle={props.codigo}></Info>
                <Tabla id="2"/>
                <div className="formThree">
                    <button type="submit" class="registerSubmit" onClick={() => props.toggleConteo()}>Iniciar Partida</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Partida