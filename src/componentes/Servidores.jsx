import './Servidores.css'
import Info from './microComponentes/info'
import "bootstrap"
import Tabla from './microComponentes/tabla'

function Servidores(props) {


  return (
    <>

        <div className='cuerpoServidores'>
            <div className='cuadradoServidores'>
                <h1 className='tituloServidores'>SERVIDORES</h1>
                <Info title="GÉNERO" subtitle={props.genero}></Info>
                <div className='servidores'>
                    <h2 className='subtituloServidores'>Servidores:</h2>
                    <form className="formServidores" role="search">
                        <input className="buscadorServidores" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
                <Tabla toggleComponent={props.toggleComponent} id="1" genero={props.genero} />
            </div>
        </div>
    </>
    )
}

export default Servidores