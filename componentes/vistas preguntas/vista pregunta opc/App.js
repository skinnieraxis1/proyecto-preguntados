import './App.css';

function App() {
  return (
    <div className="App">
            <div className="container cuadro">
              <table>
                  <p className='a pregunta'>¿Cuál es el cultivo tratado artesanalmente que tiene el mayor precio?</p> 
                <tr><td className='widtha'><button type="button" className="btn btn-light">Respuesta 1</button></td> <td><button type="button" class="btn btn-light">Respuesta 2</button></td></tr>
                <tr><td className='widtha'><button type="button" className="btn btn-light">Respuesta 3</button></td> <td><button type="button" className="btn btn-light">Respuesta 4</button></td></tr>
              </table>
            </div>
        </div>
  );
} 

export default App;