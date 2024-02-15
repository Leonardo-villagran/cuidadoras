
import '../assets/css/AllDay.css'; // Importa el archivo de estilos personalizados para el componente

const  AllDay = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-column">
                    <h1>
Atención 24 horas</h1>
                    <p>Gracias a nuestro servicio de Atención 24 horas, los pacientes se sienten seguros de que sus problemas de salud se atenderán en tiempo y forma sin sacrificar sus rutinas diarias. En Cuidadoras, nos enfocamos en la salud y bienestar de nuestros pacientes y proporcionamos la mejor atención médica personalizada.</p>
                </div>
                <div className="col-md-6 image-column">
                    <img src="./images/05.jpg" alt="Image" className="therapy-image" />
                </div>
            </div>
        </div>
    );
};

export default AllDay;