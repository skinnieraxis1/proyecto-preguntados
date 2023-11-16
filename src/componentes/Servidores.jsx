import './Servidores.css'
import Info from './microComponentes/info'
import "bootstrap"

import Tabla from './microComponentes/Tabla'

// te
// Assuming Partida is the correct type

//ESTO DA ERROR
 // esto nos e importa, la api se corre en uns ervidor y lo del node, en toro servidor



function Servidores(props) {

    // ya lo corri va perfecto, lo que pasa que despuies en la consola tira eror // Si no funca, ahi dale bola
    //si funca, la consola no le des bola, primero haz esto funcional
    // No No, no funciona, esta todo el componente vacio
    // pero no es un error de codigo va o por lo menos no lo tira
    // hmmmm probaste en el client, a ver?
    // donde? el thunder? va perfecto ahi
    // me voy a traer la comida ahi vuelvook
    // im back
 
    

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
                <Tabla toggleComponent={props.toggleComponent} id={"partidas"} genero={props.genero} />
            </div>
        </div>
    </>
    )
}

export default Servidores