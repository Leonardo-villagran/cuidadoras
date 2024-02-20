import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/HeroSection.css'; // Archivo de estilos para el componente

const HeroSection: React.FC = () => {
    const [menuHeight, setMenuHeight] = useState<number>(0);

    useEffect(() => {
        const menu = document.getElementById('navbarNav');
        if (menu) {
            const height = menu.offsetHeight;
            setMenuHeight(height);
        }
    }, []);

    const handleButtonClick = () => {
        const serviceTitleSection = document.getElementById('serviceTitle');
        if (serviceTitleSection) {
            const topPosition = serviceTitleSection.offsetTop;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    };

    return (
        <Container id="hero" className='pb-4 mt-6' style={{ marginTop: menuHeight }}>
            <div className="hero-section" style={{ backgroundImage: `url('./images/01.jpg')` }}>
                <div className="hero-content">
                    <h1 className="hero-section__title">Descubre tu equipo ideal de cuidadoras</h1>
                    <p className="hero-section__subtitle">Brindando cuidado y apoyo de calidad para tus seres queridos.</p>
                    <button className="hero-section__button" onClick={handleButtonClick}>¡Empieza ahora!</button>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;

