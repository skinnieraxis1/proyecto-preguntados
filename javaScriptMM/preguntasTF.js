import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloPTF.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="estiloPTF.css" />
        <title>Document</title>
      </head>
      <body>
        <div className="container-fluid">
          <div className="container cuadro">
            <div className="row pregunta">
              <p style={{ marginTop: '20px' }}>¿Cuál es el cultivo tratado artesanalmente que tiene el mayor precio?</p>
            </div>

            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-light">
                  Respuesta 1
                </button>
              </div>

              <div className="col">
                <button type="button" className="btn btn-light">
                  Respuesta 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
