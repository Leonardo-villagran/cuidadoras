import HeroSection from './components/HeroSection';
import About from './components/About';
import Personal from './components/Personal';
import Therapy from './components/Therapy';
import Meds from './components/Meds';
import AllDay from './components/AllDay';
import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <div className="App">
            <HeroSection />
            <About />
            <Personal />
            <Meds />
            <Therapy />
            <AllDay />  
            <Contact /> 
        </div>
    );
};

export default App;