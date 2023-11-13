
import "bootstrap"
import './Registrarse.css'

function Registrarse() {


  return (
    <>  
    <div className="cuerpoRegistrarse">
        <div className="cuadradoRegistrarse">
            <h1 className='tituloRegistrarse'>REGISTRARSE</h1>
            <form className="formulario">
                <div class="formOne">
                    <div className="contenedorForm">
                        <label for="user" class="registerLabel">USUARIO:</label>
                        <input type="text" className="registerInput" id="user" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div class="formOneHalf">
                    <div className="contenedorForm">
                        <label for="correoElectronico" class="registerLabel">CORREO ELECTRONICO:</label>
                        <input type="email" className="registerInput" id="correoElectronico" aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div class="formTwo">
                    <div className="contenedorForm">
                        <label for="contraseña" className="registerLabel">CONTRASEÑA:</label>
                        <input type="password" className="sesionInput" id="contraseña"/>
                    </div>
                    <div id="emailHelp" className="registerText">Nunca compartas tu contraseña con nadie.</div>
                </div>
                <div className="formThree">
                    <button type="submit" class="registerSubmit">Crear Usuario</button>
                </div>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Registrarse
