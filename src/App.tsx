import HeroSection from './components/HeroSection';
import About from './components/About';
import Personal from './components/Personal';
import Meds from './components/Meds';
import Contact from './components/Contact';
import ServiceTitle from './components/ServiceTitle';
import Service from './components/Service';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Personal />
            <Meds />
            <ServiceTitle />
            <Service/>
            <Contact /> 
            <Footer />
        </div>
    );
};

export default App;