import "bootstrap"
import './Inicio.css'
import Card from "./card"
import Card2 from "./card2"

function Inicio(props) {


  return (
    <>  
        <div className="cuerpoInicio">
            <div className="zonaCard1">
                <Card toggleInicio={props.toggleInicio} toggleComponent={props.toggleComponent} ></Card>
            </div>
            <div className="zonaCard2">
                <Card2 toggleInicio={props.toggleInicio} toggleComponent={props.toggleComponent} ></Card2>
            </div>
        </div>
    </>
  )
}

export default Inicio
