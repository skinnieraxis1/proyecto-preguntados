import './App.css';

function App() {return (
    <div className="fondo">
      <p className="title">Crear Cuestionario</p>
      <form action="" method="">
        <div className="0" id="0" style={{textAlign: 'center'}}>
          <table style={{marginTop: '50px'}}>
            <tr>
              <td className="td">NOMBRE:</td>
              <td className="td">GÉNERO:</td>
            </tr>
            <tr>
              <td><input className="itext" id="resetable" name="nombre" type="text" maxlength="15" placeholder="Ingrese nombre" /></td>
              <td><input className="itext" id="resetable" name="genero" type="text" maxlength="15" placeholder="Ingrese género" /></td>
            </tr>
            <tr>
              <td className="td">TEMÁTICA:</td>
              <td className="td">CÓDIGO:</td>
            </tr>
            <tr>
              <td><input className="itext" id="resetable" name="tematica" type="text" maxlength="15" placeholder="Ingrese temática" /></td>
              <td><input className="itext" id="resetable" name="codigo" type="text" maxlength="10" placeholder="Ingrese código" /></td>
            </tr>
          </table>
          <button type="button" className="s">SIGUIENTE</button>
        </div>
      
        <div className="0.5" id="0.5" style={{display: 'none'}}>
          <div className="image-upload">
            <a style={{color: 'white',fontsize: '25px'}}>Imagen fondo: </a>
            <label for="file-input">
              <img src="images/folder-icon.png" width="40px" height="40px" style={{position: 'absolute',marginLeft: '10px',cursor: 'pointer'}}/>
            </label>
            <input type="file" name="image" id="file-input" accept="image/*" style={{left: '0px',display: 'none'}} />
          </div>
          <select className="select_ctype" name="tipo" id="slct">
            <option value="0" selected disabled>+</option>
            <option value="1">TrueFalse</option>
            <option value="2">RespuestaCorrecta</option>
            <option value="3">Ordenar</option>
          </select>
          

          <div style={{position: 'relative'}}>
            <img src="images/stardew_valley.jpg" id="output" className="ifondo"></img>
            <textarea className="pregunta" name="pregunta" rows="4" cols="50" maxlength="54" placeholder="Ingrese pregunta" required></textarea>
        
              
              <div className="1" id="1" style={{display: 'none'}}>
                <input type="text" name="var11" id="r11" className="r1" maxlength="25" placeholder="Respuesta correcta" style={{top: '18%',backgroundColor: 'rgb(59, 210, 123)'}} required />
                <input type="text" name="var12" id="r12" className="r1" maxlength="25" placeholder="Respuesta incorrecta" style={{bottom: '13%',backgroundColor: 'rgb(246, 67, 41)'}} required />
              </div>

              <div className="2" id="2" style={{display: 'none'}}>
                <input type="text" name="var21" id="r21" className="r2" maxlength="20" placeholder="Respuesta 1" style={{top: '15%',right: '27%'}} />
                <input type="text" name="var22" id="r22" className="r2" maxlength="20" placeholder="Respuesta 2" style={{top: '15%',right: '3%'}} />
                <input type="text" name="var23" id="r23" className="r2" maxlength="20" placeholder="Respuesta 3" style={{top: '60%',right: '27%'}} />
                <input type="text" name="var24" id="r24" className="r2" maxlength="20" placeholder="Respuesta 4" style={{top: '60%',right: '3%',backgroundColor: 'rgb(56, 208, 127)'}} />
              </div>

              <div className="3" id="3" style={{display: 'none'}}>
                <textarea className="r3" name="var31" id="r3" maxlength="63" placeholder="Respuesta"></textarea>
                <div className="ecpss">
                  <label for="ecpss">En cuantas partes se separa: </label>
                  <input type="number" name="var32" id="ecpss" min="1" max="1" />
                </div>
              </div>


            <label for="reset_button">
              <img src="images/trashbin.png" className="tb"></img>
            </label>
            <button type="reset" id="reset_button" style={{display: 'none'}}></button>
          </div>
          <div style={{textAlign: 'center'}}><button type="submit">TERMINAR</button></div>
        </div>
      </form>
    </div>
  );
}

export default App;
