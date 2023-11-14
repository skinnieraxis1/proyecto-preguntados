import './App.css';
import Cardd from './cardd';
import CardD from './cardd2';
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
