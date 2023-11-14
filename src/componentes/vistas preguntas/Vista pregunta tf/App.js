import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container-fluid">
            <div className="container cuadro">
                <table>
                  <p className='pregunta'>¿Cuál es el cultivo tratado artesanalmente que tiene el mayor precio?</p>
                  <tr><td><button type="button" class="btn btn-light">Respuesta 1</button></td>
                  <td><button type="button" class="btn btn-light">Respuesta 2</button></td></tr>
                </table>
            </div>
        </div>
    </div>
  );
} 

export default App;