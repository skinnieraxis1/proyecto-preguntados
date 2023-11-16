import "bootstrap"
import './Genero.css'

function Genero(props) {
  return (
    <>
      <div className="genero" onClick={() => props.toggleComponent("Servidor", props.title)}>
        <img className="imagen" src={props.img} alt=""/>
        <div className="textDiv">
          <h5 className="genTitle">{props.title}</h5>
        </div>
      </div>
    </>
  );
}

export default Genero;
