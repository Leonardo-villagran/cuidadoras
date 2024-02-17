import React from 'react';

const ScrollToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="btn btn-success" style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={scrollToTop}>
            Ir Inicio
        </button>
    );
};

export default ScrollToTopButton;
