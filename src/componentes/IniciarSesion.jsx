import "bootstrap"
import './IniciarSesion.css'

function IniciarSesion() {


  return (
    <>  
    <div className="cuerpoIniciarSesion">
        <div className="cuadradoIniciarSesion">
            <h1 className='tituloIniciarSesion'>INICIAR SESIÓN</h1>
            <form className="formulario">
                <div class="formOne">
                    <div className="contenedorForm">
                        <label for="user" class="sesionLabel">USUARIO:</label>
                        <input type="text" className="sesionInput" id="user" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div class="formTwo">
                    <div className="contenedorForm">
                        <label for="contraseña" className="sesionLabel">CONTRASEÑA:</label>
                        <input type="password" className="sesionInput" id="contraseña"/>
                    </div>
                    <div id="emailHelp" className="sesionText">Nunca compartas tu contraseña con nadie.</div>
                </div>
                <div className="formThree">
                    <button type="submit" class="sesionSubmit">Iniciar Sesion</button>
                </div>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default IniciarSesion
