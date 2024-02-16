import React from 'react';
import medsData from '../assets/data/data.json'; // Importa el archivo JSON con los datos de los medicamentos

const Meds: React.FC = () => {
    return (
        <div className="container ">
            {medsData.map((med, index) => (
                <div className="row" key={index} id={med.name}>
                    <div className="col-md-6 pb-4">
                        <div className="card h-100 bg-dark text-white">
                            <div className="card-body">
                                <h1 className="card-title">{med.title}</h1>
                                <p className="card-text">{med.text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="card h-100">
                            <img src={`./images/${med.image}`} className="card-img-top" alt={med.title} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Meds;




