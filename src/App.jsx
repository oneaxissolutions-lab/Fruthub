import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeSplashPage from './WelcomeSplashPage';
import Header from './Header'; 
import Floating from './Floating'; 
import Get from './Get';           
import Home from './Home';
import AboutUs from './AboutUs'; 
import About from './About';    
import Product from './Product';
import WhyChooseUs from './WhyChooseUs';
import SupplyCapacity from './SupplyCapacity';
import Frequent from './Frequent';
import Markets from './Markets';
import FinalCTA from './FinalCTA';
import TermsAndConditions from './TermsandCconditions';
import Footer from './Footer';
import BananaExportPage from './BananaExportPage';
import Fruit from './Fruit';
import EnquiryForm from './EnquiryForm';

// --- यहाँ Gallery को इम्पोर्ट करें ---
import Gallery from './Gallery'; 

const HomePage = () => (
    <>
        <Home /> 
        <AboutUs />
        <WhyChooseUs />
        <SupplyCapacity />
        <Frequent />       
        <Markets />
        <FinalCTA />
        <TermsAndConditions />
    </>
);

function App() {
    const [isLoaded, setIsLoaded] = useState(() => {
        const hasSeenSplash = sessionStorage.getItem('splashShown');
        return hasSeenSplash === 'true'; 
    });

    const handleWelcomeLoaded = () => {
        sessionStorage.setItem('splashShown', 'true');
        setIsLoaded(true);
    };

    return (
        <Router>
            <div className="relative smooth-scroll-container"> 
                {!isLoaded && <WelcomeSplashPage onLoaded={handleWelcomeLoaded} />}

                {isLoaded && (
                    <main>
                        <Header />
                        <Get />       
                        <Floating />  
                        
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Product />} />
                            <Route path="/banana-export" element={<BananaExportPage />} />
                            <Route path="/fruit" element={<Fruit />} />
                            
                            {/* --- Gallery का नया Route यहाँ जोड़ें --- */}
                            <Route path="/gallery" element={<Gallery />} />
                        </Routes>
                        
                        <div className="h-20"></div> 
                        <Footer />
                    </main>
                )}
            </div>
        </Router>
    );
}

export default App;