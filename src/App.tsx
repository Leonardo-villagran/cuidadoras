import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import Menu from './components/Menu'; // Importa el componente de menú
import Up from './components/Up'; // Importa el componente de botón de ir arriba

// Importa los componentes de manera perezosa
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const About = React.lazy(() => import('./components/About'));
const Personal = React.lazy(() => import('./components/Personal'));
const Meds = React.lazy(() => import('./components/Meds'));
const Contact = React.lazy(() => import('./components/Contact'));
const ServiceTitle = React.lazy(() => import('./components/ServiceTitle'));
const Service = React.lazy(() => import('./components/Service'));
const Footer = React.lazy(() => import('./components/Footer'));

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Márgenes de observación
    });

    return (
        <div ref={ref} className={`fade-in ${inView ? 'visible' : 'invisible'}`}>
            {children}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div>
            {/* Renderiza el componente de menú fuera de Suspense */}
            <Menu />
            <Suspense fallback={<div>Loading...</div>}>
                <FadeInSection><HeroSection /></FadeInSection>
                <FadeInSection><About /></FadeInSection>
                <FadeInSection><Personal /></FadeInSection>
                <FadeInSection><Meds /></FadeInSection>
                <FadeInSection><ServiceTitle /></FadeInSection>
                <FadeInSection><Service /></FadeInSection>
                <FadeInSection><Contact /></FadeInSection>
                <FadeInSection><Footer /></FadeInSection>
            </Suspense>
            <Up />
        </div>
    );
};

export default App;
