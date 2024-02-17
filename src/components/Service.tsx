import services from '../assets/data/service.json'; // Importa el archivo JSON
import '../assets/css/Service.css'; // Importa el archivo CSS

const CardComponent = () => {
    return (
        <div id="service" className="container pb-4">
            <div className="row">
                {services.map(service => (
                    <div className="col-md-4" key={service.id}>
                        <div className="card">
                            <img src={`./images/${service.imageTop}`}  className="card-img-top" alt="Imagen superior" />
                            <div className="card-body">
                                <ul className="list-group list-group-flush pb-4">
                                    {service.datos.map((dato, index) => (
                                        <li className="list-group-item" key={index}>
                                            <span className="circle"></span> {/* Círculo */}
                                            {dato}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center"> {/* Agregamos esta clase para centrar el botón */}
                                    <button className="btn btn-primary">Más información</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;

