/*
const TablaJugadores: React.FC = () => {
const [jugadores, setJugadores] = useState<Jugador[]>([]);

useEffect(() => {
    // Función para obtener datos de la API utilizando Axios
    const obtenerJugadores = async () => {
    try {
        const response = await axios.get<Jugador[]>('http://tu-api.com/jugars');
        setJugadores(response.data);
    } catch (error) {
        console.error('Error al obtener jugadores:', error);
    }
    };

    // Llamada a la función para obtener datos cuando el componente se monta
    obtenerJugadores();
}, []); // El array vacío asegura que la llamada solo se realice una vez al montar el componente

return (
    <div>
    <h1>Tabla de Jugadores</h1>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puntaje</th>
            {}
            </tr>
            </thead>
            <tbody>
            {jugadores.map((jugador) => (
                <tr key={jugador.id}>
                <td>{jugador.id}</td>
                <td>{jugador.nombre}</td>
                <td>{jugador.puntaje}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };
    
    export default TablaJugadores;
    */