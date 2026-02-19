import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
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
import Gallery from './Gallery'; 

const HomePage = () => (
    <>
        <Helmet>
            <title>Frut Hub Exports | Fresh Pomegranate, Guava & Banana Exporters</title>
            <meta name="description" content="Trusted Indian exporters of premium Pomegranate, Guava, and Bananas. We ensure global delivery of fresh, high-quality agricultural products." />
            
            {/* Google Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Frut Hub Exports Pvt. Ltd.",
                    "url": "https://fruthubexports.com",
                    "logo": "https://fruthubexports.com/favicon-square.png",
                    "description": "Leading Indian exporter of fresh fruits like Pomegranate, Guava, and Banana.",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "sales",
                        "areaServed": "Worldwide"
                    }
                })}
            </script>
        </Helmet>
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
        <HelmetProvider>
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
                                <Route path="/gallery" element={<Gallery />} />
                            </Routes>
                            
                            <div className="h-20"></div> 
                            <Footer />
                        </main>
                    )}
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;