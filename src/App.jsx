import "bootstrap"
import './App.css'
import Genero from "./componentes/Genero"

function App() {

  return (
    <>
      <div className="box">
        <h1 className="h">Géneros</h1> 
      </div>

      <div className="row">
        <div className="col-2">
          <Genero/>
        </div>
        <div className="col-2">
          <Genero/>
        </div>
        <div className="col-2">
          <Genero/>
        </div>
        <div className="col-2">
          <Genero/>
        </div>
      </div>
      
      <div className="row">
        <div className="col-2">
          <Genero/>
        </div>
        <div className="col-2">
          <Genero/>
        </div>
        <div className="col-2">
          <Genero/>
        </div>
        <div className="col-2">
          <Genero/>
        </div>
      </div>
    </>
  )
}

export default App
