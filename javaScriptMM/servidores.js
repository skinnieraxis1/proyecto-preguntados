import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/stylesServer.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="IMG/logo.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="CSS/stylesServer.css" />
        <title>Incognitiva</title>
      </head>
      <body>
        <form action="" method="get">
          <div className="car">
            <div>
              <h5 className="cardTitle">SERVIDORES</h5>
              <h6 className="subtitulo">GÉNEROS:</h6>
              <div className="input-group">
                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                  <option selected>Selecciona un Genero</option>
                  <option value="peli">Peliculas</option>
                  <option value="edu">Educación</option>
                  <option value="serie">Series</option>
                  <option value="lib">Libros</option>
                  <option value="jue">Juegos</option>
                  <option value="ani">Anime</option>
                  <option value="music">Musica</option>
                </select>
                <div className="input-group">
                  <h6 className="subtitulo">SERVIDORES:</h6>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">🔍︎</span>
                    <input type="text" className="form-control" placeholder="Servidores" aria-label="Servidores" aria-describedby="basic-addon1" />
                    <button className="btn btn-danger" type="reset">X</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col">
            <img src="IMG/wifi.png" alt="" className="img" />
          </div>
          <div className="col"><img src="IMG/blanco.jpg" alt="" className="blanco" /></div>
          <div className="col">NOMBRE</div>
          <div className="col"><img src="IMG/blanco.jpg" alt="" className="blanco" /></div>
          <div className="col">JUGADORES</div>
          <div className="col"><img src="IMG/blanco.jpg" alt="" className="blanco" /></div>
          <div className="col">JUEGO</div>
          <div className="col"><img src="IMG/blanco.jpg" alt="" className="blanco" /></div>
        </div>
      </body>
    </html>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
