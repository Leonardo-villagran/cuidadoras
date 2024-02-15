
import '../assets/css/Meds.css'; // Importa el archivo de estilos personalizados para el componente

const  Meds = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-column">
                    <h1>Terapia de rehabilitación</h1>
                    <p>En Cuidadoras, ofrecemos servicios profesionales y confiables de Terapia de rehabilitación a todos nuestros pacientes. Nuestros servicios médicos de atención en el hogar escuchan todas sus peticiones y le garantizan atención personalizada. Sin importar el horario, nuestros profesionales certificados estarán disponibles para ajustarse a sus necesidades médicas.</p>
                </div>
                <div className="col-md-6 image-column">
                    <img src="./images/03.jpg" alt="Image" className="therapy-image" />
                </div>
            </div>
        </div>
    );
};

export default Meds;


