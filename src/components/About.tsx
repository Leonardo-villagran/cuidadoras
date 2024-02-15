import React from 'react';
import '../assets/css/About.css'; // Importa el archivo de estilos para el componente

const About: React.FC = () => {
    return (
        <div className="about-section" style={{backgroundImage: `url('./images/02.jpg')`}}>
            <div className="about-content">
                <h2>Todo sobre Cuidadoras</h2>
                <p><em>Profesionales de atención domiciliaria de primera</em></p>
                <p>Cuidadoras es el(la) Agencia del cuidado de la salud en el hogar más confiable en Santiago, que le ofrece excelentes soluciones del cuidado en el hogar a pacientes convalecientes o enfermos. Estamos comprometidos con satisfacer todas sus necesidades de salud e ir más allá para cerciorarnos de que reciba el mejor cuidado posible.</p>
            </div>
        </div>
    );
};

export default About;
