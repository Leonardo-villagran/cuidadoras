import '../assets/css/Footer.css'

const FooterComponent: React.FC = () => {
    return (
        <div className="card-footer pt-4">
            <p>Dirección: Dirección de tu empresa</p>
            <p>Teléfono: Teléfono de contacto</p>
            <p>Email: correo@empresa.com</p>
        </div>
    );
};

export default FooterComponent;
