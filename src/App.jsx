import React, { useState } from 'react'; // Import useState
import WelcomeSplashPage from './WelcomeSplashPage';
import Header from './Header'; 
import AboutUs from './AboutUs';
import WhyChooseUs from './assets/WhyChooseUs';
import ProductSpecifications from './ProductSpecifications';
import FinalCTA from './FinalCTA';
import Home from './Home';
import SupplyCapacity from './SupplyCapacity';
import Markets from './Markets';
import Footer from './Footer';

function App() {
    // 1. State to track if the welcome/splash screen timer is complete
    const [isLoaded, setIsLoaded] = useState(false);

    // 2. Function passed to WelcomePage, called after 3 seconds
    const handleWelcomeLoaded = () => {
        setIsLoaded(true);
    };

    return (
        <div className="relative">
            {/* Conditional Rendering:
              If NOT loaded, display the WelcomePage (Splash Screen).
              The WelcomePage handles its own 3-second timer and calls handleWelcomeLoaded(). 
            */}
            {!isLoaded && <WelcomeSplashPage onLoaded={handleWelcomeLoaded} />}

            {/* If IS loaded, display the main website content.
              The main content will be fully visible after the WelcomePage fades out.
            */}
            {isLoaded && (
                <main>
                    <Header />
                    
                    {/* Assuming Home is your Video Background section */}
                    <Home /> 
                    
                    {/* Main Sections */}
                    <AboutUs />
                    <WhyChooseUs />
                    <ProductSpecifications />
                    <SupplyCapacity />
                    <Markets />
                    <FinalCTA />
                    
                    <div className="h-20"></div> {/* Replaces the <br /> tags */}
                    <Footer />
                </main>
            )}
        </div>
    );
}

export default App;