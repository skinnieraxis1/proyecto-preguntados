import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/stylesIndex.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="CSS/stylesIndex.css" />
        <link rel="stylesheet" href="CSS/a.html" />
        <link rel="icon" href="IMG/logo.png" />
        <title>Incognitiva</title>
      </head>
      <body>
        <form action="" method="get">
          <div className="row">
            <div className="col uno">
              <div className="card primero">
                <div className="frame">
                  <div className="content">
                    <p>Busque interesantes cuestionarios</p>
                    <a href="servidores.html">
                      <img src="IMG/flecha.png" alt="" className="my-button" />
                    </a>
                  </div>
                </div>
                <p className="contents">Si te estás uniendo a un cuestionario privado... .</p>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    #
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Codigo"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                  <button className="btn btn-success" type="button" id="button-addon2">
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
            <div className="col dos">
              <div className="card sengundo">
                <div className="frame">
                  <div className="content">
                    <p>Busque interesantes cuestionarios</p>
                    <a href="a.html">
                      <img src="IMG/pincel.png" alt="" className="my-button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </body>
    </html>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
