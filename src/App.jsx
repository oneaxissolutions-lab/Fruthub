import React, { useState } from 'react';
import WelcomeSplashPage from './WelcomeSplashPage';
import Header from './Header'; 
import Floating from './Floating'; 
import Get from './Get';           
import Home from './Home';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import SupplyCapacity from './SupplyCapacity';
import Frequent from './Frequent';
import Markets from './Markets';
import Gallery from './Gallery';       
import FinalCTA from './FinalCTA';
import TermsAndConditions from './TermsandCconditions';
import Footer from './Footer';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleWelcomeLoaded = () => {
        setIsLoaded(true);
    };

    return (
        <div className="relative smooth-scroll-container"> 
            {!isLoaded && <WelcomeSplashPage onLoaded={handleWelcomeLoaded} />}

            {isLoaded && (
                <main>
                    <Header />
                    
                    {/* Fixed UI Stacking */}
                    <Get />       
                    <Floating />  
                    
                    <Home /> 
                    <AboutUs />
                    <WhyChooseUs />
                    <SupplyCapacity />
                    <Frequent />       
                    <Markets />
                    <Gallery />
                    <FinalCTA />
                    <TermsAndConditions />
                    
                    <div className="h-20"></div> 
                    <Footer />
                </main>
            )}
        </div>
    );
}

export default App;