import './Info.css'

function Info(props) {


  return (
    <>

        <div className='cuerpoInfo'>

          <h2 className="tituloInfo">
            {props.title} :
          </h2>

          <div className="zonaB">
            <h3 className="subtituloInfo">{props.subtitle}</h3>
          </div>
        </div>
    </>
    )
}

export default Info