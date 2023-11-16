import "bootstrap"
import './App.css'
import Genero from "./Genero"

import pe from "../assets/generos/JhonWick.jpg"
import ed from "../assets/generos/educacion.jpg"
import se from "../assets/generos/series.jpg"
import li from "../assets/generos/libros.jpg"
import ju from "../assets/generos/juegos.jpg"
import an from "../assets/generos/anime.jpg"
import mu from "../assets/generos/musica.jpg"
import de from "../assets/generos/deporte.jpg"


function App(props) {

  return (
    <>
      <div className="app">
        <div className="box">
          <h1 className="h">Géneros</h1> 
        </div>

        <div className="row">
          <Genero toggleComponent={props.toggleComponent} img={pe} title="peliculas"/>
          <Genero toggleComponent={props.toggleComponent} img={ed} title="educación"/>
          <Genero toggleComponent={props.toggleComponent} img={se} title="series"/>
          <Genero toggleComponent={props.toggleComponent} img={li} title="libros"/>
        </div>
        
        <div className="row">
          <Genero toggleComponent={props.toggleComponent} img={ju} title="juegos"/>
          <Genero toggleComponent={props.toggleComponent} img={an} title="anime"/>
          <Genero toggleComponent={props.toggleComponent} img={mu} title="musica"/>
          <Genero toggleComponent={props.toggleComponent} img={de} title="deportes"/>
        </div>
        
      </div>
    </>
  )
}

export default App
