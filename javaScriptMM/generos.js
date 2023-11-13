import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
import './estilo.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Generos</title>
        <link rel="stylesheet" type="text/css" href="estilo.css" />
      </head>
      <body className="body">
        <div className="box">
          <h1 className="h">Géneros</h1>
        </div>

        {/* Cartas */}
        <div className="row">
          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/musica.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Musica</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/educación.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Educación</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/anime.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Anime</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/juegos.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Juegos</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/libros.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Libros</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/series.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Series</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/peliculas.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Peliculas</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" style={{ width: '15rem' }}>
              <img src="./imagenes/proximamente.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Próximamente</h5>
                <a href="#" className="btn btn-primary stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
