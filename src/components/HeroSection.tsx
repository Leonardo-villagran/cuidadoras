import React from 'react';
import '../assets/css/HeroSection.css'; // Archivo de estilos para el componente

const HeroSection: React.FC = () => {
    const handleButtonClick = () => {
        const serviceTitleSection = document.getElementById('serviceTitle');
        if (serviceTitleSection) {
            serviceTitleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div id="hero" className='container pb-4'>
            <div className="hero-section" style={{ backgroundImage: `url('./images/01.jpg')` }}>
                <div className="hero-content">
                    <h1 className="hero-section__title">Descubre tu equipo ideal de cuidadoras</h1>
                    <p className="hero-section__subtitle">Brindando cuidado y apoyo de calidad para tus seres queridos.</p>
                    <button className="hero-section__button" onClick={handleButtonClick}>¡Empieza ahora!</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
