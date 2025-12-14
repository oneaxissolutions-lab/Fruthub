import React, { useState, lazy, Suspense } from 'react';
import WelcomeSplashPage from './WelcomeSplashPage';
import Header from './Header'; 
import Floating from './Floating';
import Home from './Home';
 import FAQ from './FAQ';
 import TermsAndConditions from './TermsandCconditions';


// Lazy load components below the fold for performance optimization
const LazyAboutUs = lazy(() => import('./AboutUs'));
const LazyWhyChooseUs = lazy(() => import('./assets/WhyChooseUs'));
const LazyProductSpecifications = lazy(() => import('./ProductSpecifications'));
const LazySupplyCapacity = lazy(() => import('./SupplyCapacity'));
const LazyMarkets = lazy(() => import('./Markets'));
const LazyFinalCTA = lazy(() => import('./FinalCTA'));

const LazyFooter = lazy(() => import('./Footer'));

function App() {
    // State to track if the welcome/splash screen timer is complete
    const [isLoaded, setIsLoaded] = useState(false);

    // Function passed to WelcomePage, called after the splash screen finishes
    const handleWelcomeLoaded = () => {
        setIsLoaded(true);
    };

    return (
        // The 'smooth-scroll-container' class needs to be defined in your global CSS
        <div className="relative smooth-scroll-container"> 
            
            {/* Conditional Rendering for Splash Screen */}
            {!isLoaded && <WelcomeSplashPage onLoaded={handleWelcomeLoaded} />}

            {/* Main website content (rendered after splash screen fades) */}
            {isLoaded && (
                <main>
                    <Header />
                    <Floating />
                    <Home /> 
                    
                    {/* Use Suspense for the Lazy Loaded Sections */}
                    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Content...</div>}>
                        <LazyAboutUs />
                        <LazyWhyChooseUs />
                        <LazyProductSpecifications />
                        <LazySupplyCapacity />
                              <FAQ />       

                        <LazyMarkets />
                        <LazyFinalCTA />
                        <TermsAndConditions />
                        <div className="h-20"></div> 
                        <LazyFooter />
                    </Suspense>
                </main>
            )}
        </div>
    );
}

export default App;