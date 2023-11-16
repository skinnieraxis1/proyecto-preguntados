


/*
import { useNavigate } from "react-router-dom";
import "./inicioSecion.css"
import axios from "axios"
const URI= 'http://localhost:8000/inicioSesion/'

export const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {email: email, password: password})
    navigate('/')
  }
  

  
  return (
    <section className="form-register">
        <div className="container"> 
        
        <h4> Bienvenido!</h4>
        <form action="login.php" method="post">
            <div className="input-wrapper">
                <input className="controls" type="email" name="mail" id="mail" required placeholder="Ingresa tu email"  minLength={4} value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <input className="controls" type="password" name="contrasena" id="contrasena" placeholder="Ingresa tu contraseña" minLength={4} />
            </div>
            <p> ¿No tenes cuenta aún? <a href="registro.html" className="registrate">Registrate</a></p>
            <input className="botons" type="submit" name="login" value="Iniciar Sesion" />
       </form>    
    </div>

    <tbody>
      {jugadores.map((jugador))=> (
        <td>{jugador.id}</td>
      )}

    </tbody>

    
    </section>
  )
}
*/
