
import '../assets/css/Therapy.css'; // Importa el archivo de estilos personalizados para el componente

const Therapy = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-column">
                    <h1>Distribución de medicamento</h1>
                    <p>Los servicios de nuestro Distribución de medicamento nos permiten responder de inmediato a emergencias o problemas. En Cuidadoras, nos dedicamos día y noche a proporcionar servicios de cuidados médicos en su hogar para cerciorarnos de que nuestros clientes reciban la atención que merecen. Contáctenos hoy y conozca los beneficios de los servicios de nuestro Distribución de medicamento.</p>
                </div>
                <div className="col-md-6 image-column">
                    <img src="./images/04.jpg" alt="Image" className="therapy-image" />
                </div>
            </div>
        </div>
    );
};

export default Therapy;


