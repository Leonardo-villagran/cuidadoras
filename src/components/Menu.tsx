import React from 'react';

const Menu: React.FC = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Cuidadoras</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#personal">Empresa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#serviceTitle">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menu;
