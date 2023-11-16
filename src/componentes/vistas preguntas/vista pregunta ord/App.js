import './App.css';
import Cardd from '../../microComponentes/CardPregunta';
import CardD from '../../microComponentes/CardPreguntaD';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container cuadro">
            <table>
              <p className='pregunta'>¿En qué temporada del año se pueden comprar semillas de frutilla en un festival?</p>
              <tr><td><Cardd></Cardd></td></tr>
              <tr><td><CardD></CardD></td></tr>
            </table>
        </div>
      </div>
    </div>
  );
} 

export default App;
