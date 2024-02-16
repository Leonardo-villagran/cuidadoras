import React from 'react';
import '../assets/css/About.css'; // Importa el archivo de estilos para el componente

const About: React.FC = () => {
    return (
        <div id="about" className='container pb-4'>
            <div className="about-section" style={{backgroundImage: `url('./images/02.jpg')`}}>
                <div className="about-content">
                    <div className="about-content-overlay"></div>
                    <h2 className="about-section__title">Todo sobre Cuidadoras</h2>
                    <p className="about-section__subtitle"><em>Profesionales de atención domiciliaria de primera</em></p>
                    <p className="about-section__description">Cuidadoras es la agencia de cuidado de la salud en el hogar más confiable en Santiago, que ofrece soluciones excelentes para el cuidado en el hogar a pacientes convalecientes o enfermos. Estamos comprometidos con satisfacer todas sus necesidades de salud e ir más allá para asegurarnos de que reciba el mejor cuidado posible.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
