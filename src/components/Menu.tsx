import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu: React.FC = () => {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenuCollapse = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
    };

    useEffect(() => {
        const handleResize = () => {
            if (!isMenuCollapsed && menuRef.current) {
                const navbarHeight = menuRef.current.offsetHeight;
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                    const heroHeight = heroSection.offsetHeight;
                    const totalHeight = navbarHeight + heroHeight;
                    const currentScrollPosition = window.scrollY;
                    if (currentScrollPosition < totalHeight) {
                        window.scrollTo({
                            top: totalHeight,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuCollapsed]);

    return (
        <div className="sticky-top">
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top" ref={menuRef}>
                <Navbar.Brand href="#">Cuidadoras</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" onClick={toggleMenuCollapse} />
                <Navbar.Collapse id="navbarNav" className={`${isMenuCollapsed ? '' : 'show'}`}>
                    <Nav className="ml-auto">
                        <Nav.Link href="#personal">Empresa</Nav.Link>
                        <Nav.Link href="#serviceTitle">Servicios</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;

