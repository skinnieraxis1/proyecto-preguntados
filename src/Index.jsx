import {BsIncognito} from 'react-icons/bs'
import App from './componentes/App.jsx'
import Navbar from './componentes/Navbar.jsx'
import Servidores from './componentes/Servidores.jsx'
import Registrarse from './componentes/Registrarse.jsx'
import Partida from './componentes/Partida.jsx'
import { useState, useCallback, useEffect} from 'react'
import IniciarSesion from './componentes/iniciarSesion.jsx'
import Inicio from './componentes/Inicio.jsx'
import Preguntas from './componentes/Preguntas.jsx'

function Index() {
    const [partidaInfo, setPartidaInfo] = useState({ genero: '', codigo: '', nombre: '' });
    const [componentes, setComponentes] = useState("App");
    const [inicio, setInicio] = useState(true);
    const [countdown, setCountdown] = useState(3);
    const [intervalId, setIntervalId] = useState(null);
    const [empezarConteo, setEmpezarConteo] = useState(false);
    const [navbarActivo, setNavbarActivo] = useState(false)

    useEffect(() => {
        console.log('Componente actual:', componentes);
        console.log('Genero actual:', partidaInfo);
    }, [componentes]);

    useEffect(() => {
        console.log('Inicio actual:', inicio);
    }, [inicio]);

    useEffect(() => {
        console.log('Navbar actual:', navbarActivo);
    }, [navbarActivo]);

    const toggleComponent = useCallback((newComponent, genero, codigo, nombre) => {
        setPartidaInfo({ genero, codigo, nombre });
        setNavbarActivo(true);
        if (newComponent !== componentes) {
            setComponentes(newComponent);
        }
    }, [componentes, navbarActivo]);

    const toggleInicio = useCallback((newInicio, newComponent, genero) => {
        // Limpieza del intervalo al cambiar de Inicio a otro componente
        if (!newInicio && intervalId) {
            clearInterval(intervalId);
        }
        toggleComponent(newComponent, genero);
        setInicio(newInicio);
    }, [intervalId, toggleComponent]);

    const toggleConteo = useCallback(() => {
        setEmpezarConteo(true)
    }, [empezarConteo]);

    useEffect(() => {
        if (empezarConteo){
            const id = setInterval(() => {
                setCountdown((prevCountdown) => {
                    const newCountdown = prevCountdown - 1;
                    console.log(newCountdown);
                    if (newCountdown === 0) {
                        clearInterval(id);
                        console.log('Comienza la partida');
                        toggleComponent( "IniciarPartida", partidaInfo.genero, partidaInfo.codigo, partidaInfo.nombre )
                        setEmpezarConteo(false)
                        setNavbarActivo(false)
                    }
                    return newCountdown;
                });
            }, 1000);

            // Limpieza del intervalo al desmontar el componente
            return () => clearInterval(id);
        }
    }, [empezarConteo]); // El efecto se ejecutará solo al montar el componente

    return (
        <>
            {inicio === true && <Inicio toggleComponent={toggleComponent} toggleInicio={toggleInicio} />}
            {inicio === false &&
                <div>
                    {navbarActivo === true && <Navbar toggleComponent={toggleComponent} toggleInicio={toggleInicio} />}
                    
                    <div className='zonaDeApp'>
                        {componentes === 'App' && <App toggleComponent={toggleComponent} />}
                        {componentes === 'Servidor' && <Servidores toggleComponent={toggleComponent} genero={partidaInfo.genero} />}
                        {componentes === 'Partida' && <Partida genero={partidaInfo.genero} codigo={partidaInfo.codigo} nombre={partidaInfo.nombre} intervalId={intervalId} toggleConteo={toggleConteo} />}
                        {componentes === 'IniciarSesion' && <IniciarSesion />}
                        {componentes === 'Registrarse' && <Registrarse />}
                    </div>
                    {componentes === 'IniciarPartida' &&
                        <Preguntas genero={partidaInfo.genero} codigo={partidaInfo.codigo} nombre={partidaInfo.nombre} tipoPregunta="TrueOrFalse" />
                    }
                </div>
            }
        </>
    );
}

export default Index;
