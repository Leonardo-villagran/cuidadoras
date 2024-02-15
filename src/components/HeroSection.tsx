import '../assets/css/HeroSection.css'; // Archivo de estilos para el componente

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section" style={{ backgroundImage: `url('./images/01.jpg')`}}>
            <h1>Cuidadoras</h1>
        </div>
    );
};

export default HeroSection;