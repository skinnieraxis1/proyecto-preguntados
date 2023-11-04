import {BsIncognito} from 'react-icons/bs'
import './Navbar.css'

function Navbar() {


  return (
    <>
     <div className='navbar'>
        <div className='volver'><h2>VOLVER</h2></div>
        
        <div className='divicono'>
            <BsIncognito className='icono'/>
        </div>

        <div className='boton'><h2>INICIO</h2></div>
        <div className='boton'><h2>GÉNEROS</h2></div>
        <div className='boton'><h2>CREA TU CUESTIONARIO</h2></div>
        <div className='boton'><h2>ENTRA A UNA PARTIDA</h2></div>

        <div className='division'></div>

        <div className='boton'><h2>INICIAR SESIÓN</h2></div>
        <div className='boton'><h2>RESGISTRARSE</h2></div>
     </div>
    </>
  )
}

export default Navbar
