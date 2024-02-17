import React, { useState } from 'react';

const Menu: React.FC = () => {
    // Estado para controlar si el menú está colapsado o expandido
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

    // Función para alternar entre colapsado y expandido
    const toggleMenuCollapse = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
    };

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand ps-2" href="#">Cuidadoras</a>
                    <button className="navbar-toggler" type="button" onClick={toggleMenuCollapse} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuCollapsed ? '' : 'show'}`} id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link ps-2" href="#personal">Empresa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-2" href="#serviceTitle">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ps-2" href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    );
};

export default Menu;
