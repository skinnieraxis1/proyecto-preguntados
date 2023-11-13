import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/iniPar.css';

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
        <link rel="stylesheet" href="CSS/iniPar.css" />
        <title>Incognitiva</title>
      </head>
      <body>
        <form action="" method="get">
          <div className="car">
            <div>
              <h5 className="cardTitle">PEPALINDO</h5>
              <h6 className="subtitulo">GÉNEROS:</h6>
              <div className="input-group">
                <div className="carta">
                  <h1>Juego</h1>
                </div>
              </div>
              <div>
                <h6 className="subtitulo">CODIGO:</h6>
                <div className="input-group">
                  <div className="carta">
                    <h1>h5ekgls2</h1>
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
          <div className="col">
            NOMBRE
          </div>
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

export default App;
