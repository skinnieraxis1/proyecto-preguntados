import flecha from '../assets/imagenes/flecha.png'
import './App.css';

function Card2(props){
    return(
        <>
        <div className="card2">
            <div className="borde_Interior">
                <p className="txt">Busque interesantes cuestionarios</p>
                <img className="imagenInicio" src={flecha} alt="" onClick={() => props.toggleInicio(false, "App")}></img>
            </div>
            <p className="txt2" >Si te estas uniendo a un cuestionario privado...</p>
            <div className="input-group flex-nowrap">    
                <input className="AgregCode inputInicio" type="text" name="codigo" placeholder="Agregar un codigo"/>
            </div>
        </div>
        </>
    );
}

export default Card2