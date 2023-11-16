import pincel from '../assets/imagenes/pincel.png'
import './App.css';

function Card(props){
    return(
        <>
        <div className="card">
            <div className="borde_Interiorr">
                <h1 className="txt">Cree sus propios cuestionarios</h1>
                <img className="imagenInicio" src={pincel} alt="" onClick={() => props.toggleInicio(false, "App")}></img>
            </div>
        </div>
        </>
    );
}

export default Card