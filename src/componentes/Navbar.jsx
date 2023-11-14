import {BsIncognito} from 'react-icons/bs'
import './Navbar.css'

function Navbar(props) {


  return (
    <>
     <div className='navbar'>
        <div className='volver' onClick={() => props.toggleInicio(true, 'App')} ><h2>VOLVER</h2></div>
        
        <div className='divicono'>
            <BsIncognito className='icono'/>
        </div>
        <button className='boton a' onClick={() => props.toggleInicio(true, 'App')}>INICIO</button>
        <button className='boton a' onClick={() => props.toggleComponent('App')}>GÉNEROS</button>
        <button className='boton b'>CREA TU CUESTIONARIO</button>
        <button className='boton b' onClick={() => props.toggleComponent('Servidor', "Terror")}>ENTRA A UNA PARTIDA</button>


        <div className='division'></div>

        <button className='boton b' onClick={() => props.toggleComponent('IniciarSesion')} >INICIAR SESION</button>
        <button className='boton b' onClick={() => props.toggleComponent('Registrarse')} >REGISTRARSE</button>
     </div>
    </>
  )
}

export default Navbar
