//setState the GOAT

import React, {useState} from 'react';
import './App.css';
import folder_icon from './images/folder_icon.png';
import stardew_valley from './images/stardew_valley.jpg';
import trashbin from './images/trashbin.png';

function App() {
  const [selectValue, setSelectedValue] = useState('1');
  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
    event.target.value = '0';
  };

  const [image, setImage] = useState(stardew_valley);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [maxNum, setMaxNum] = useState(1);
  const partsChange = (event) => {
    var value = event.target.value;
    value = value.trim();
    value = value.split(/\s+/);
    value = value.length;
    setMaxNum(value);
  }

  return (
    <div className="fondo">
      <p className="title">Crear Cuestionario</p>
      <form action="" method="">
        <div id='b0'><a className='s' href='#b0'>SIGUIENTE</a></div>
        <div className="p0" id="p0">
          <table style={{marginTop: '50px'}}>
            <tr>
              <td className="td">NOMBRE:</td>
              <td className="td">GÉNERO:</td>
            </tr>
            <tr>
              <td><input className="itext" id="resetable" name="nombre" type="text" maxlength="15" placeholder="Ingrese nombre" required /></td>
              <td><input className="itext" id="resetable" name="genero" type="text" maxlength="15" placeholder="Ingrese género" required /></td>
            </tr>
            <tr>
              <td className="td">TEMÁTICA:</td>
              <td className="td">CÓDIGO:</td>
            </tr>
            <tr>
              <td><input className="itext" id="resetable" name="tematica" type="text" maxlength="15" placeholder="Ingrese temática" required /></td>
              <td><input className="itext" id="resetable" name="codigo" type="text" maxlength="10" placeholder="Ingrese código" required /></td>
            </tr>
          </table>
        </div>

        <div className="p05" id="p05">
          <div className="image-upload">
            <a style={{color: 'white',fontsize: '25px'}}>Imagen fondo: </a>
            <label for="file-input">
              <img src={folder_icon} width="40px" height="40px" style={{position: 'absolute',marginLeft: '10px',cursor: 'pointer'}} />
            </label>
            <input type="file" name="image" id="file-input" accept="image/*" style={{left: '0px',display: 'none'}} onChange={onImageChange} />
          </div>

          <select className="select_ctype" name="tipo" id="slct" onChange={handleValueChange}>
            <option value='0' selected>+</option>
            <option value="1">TrueFalse</option>
            <option value="2">RespuestaCorrecta</option>
            <option value="3">Ordenar</option>
          </select>

          <div style={{position: 'relative'}}>
            <img src={image} id="output" className="ifondo"></img>
            <textarea className="pregunta" name="pregunta" rows="4" cols="50" maxlength="54" placeholder="Ingrese pregunta" required></textarea>

              {selectValue === '1' && 
                <div className="p1" id="p1">
                  <input type="text" name="var11" id="r11" className="r1" maxlength="25" placeholder="Respuesta correcta" style={{top: '18%',backgroundColor: 'rgb(59, 210, 123)'}} required />
                  <input type="text" name="var12" id="r12" className="r1" maxlength="25" placeholder="Respuesta incorrecta" style={{bottom: '13%',backgroundColor: 'rgb(246, 67, 41)'}} required />
                </div>
              }
              
              {selectValue === '2' && 
                <div className="p2" id="p2">
                  <input type="text" name="var21" id="r21" className="r2" maxlength="20" placeholder="Respuesta 1" style={{top: '15%',right: '27%'}} required />
                  <input type="text" name="var22" id="r22" className="r2" maxlength="20" placeholder="Respuesta 2" style={{top: '15%',right: '3%'}} required />
                  <input type="text" name="var23" id="r23" className="r2" maxlength="20" placeholder="Respuesta 3" style={{top: '60%',right: '27%'}} required />
                  <input type="text" name="var24" id="r24" className="r2" maxlength="20" placeholder="Respuesta 4" style={{top: '60%',right: '3%',backgroundColor: 'rgb(56, 208, 127)'}} required />
                </div>
              }

              {selectValue === '3' && 
                <div className="p3" id="p3">
                  <textarea className="r3" name="var31" id="r3" maxlength="63" placeholder="Respuesta" onChange={partsChange} required></textarea>
                  <div className="ecpss">
                    <label for="ecpss">En cuantas partes se separa: </label>
                    <input type="number" name="var32" id="ecpss" min="1" max={maxNum} required />
                  </div>
                </div>
              }

            <label for="reset_button">
              <img src={trashbin} className="tb"></img>
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
