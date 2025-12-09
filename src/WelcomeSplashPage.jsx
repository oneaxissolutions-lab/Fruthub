import React, { useState, useEffect } from 'react';

// Define consistent colors from your previous context
const COLORS = {
    DeepGreen: '#0B6A32',      // Primary Green (now used for text/accents)
    BananaYellow: '#F4C430',  // Accent Yellow
    BackgroundLight: '#F7FBF8', // Very light, slightly green/white background
};

const DISPLAY_DURATION = 2000; // 2 seconds

/**
 * A full-screen splash/loading component with a light background and a simple spinner.
 */
const WelcomeSplashPage = ({ onLoaded }) => {
    // We only need 'isFadingOut' to control the final opacity and call the callback
    const [isFadingOut, setIsFadingOut] = useState(false);

    // --- Core Timer Logic ---
    useEffect(() => {
        const timer = setTimeout(() => {
            // 1. Start the fade-out transition
            setIsFadingOut(true);
            
            // 2. Wait for the fade-out transition (500ms duration) to complete 
            //    before calling the parent component's onLoaded.
            setTimeout(onLoaded, 500); 
        }, DISPLAY_DURATION);

        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <div 
            className="fixed inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500"
            // Light background shade
            style={{ 
                backgroundColor: COLORS.BackgroundLight, 
                zIndex: 9999, 
                opacity: isFadingOut ? 0 : 1 // Control fade-out using state
            }}
        >
            <div className="text-center">
                
                {/* 1. Catchy Welcome Text */}
                <h1 
                    className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2" 
                    style={{ color: COLORS.DeepGreen }} // Darker color for contrast
                >
                    WELCOME TO
                </h1>

                {/* 2. Full Company Name (Branding) */}
                <h2 
                    className="text-2xl sm:text-4xl font-bold tracking-wide mb-10" 
                    style={{ color: COLORS.BananaYellow }}
                >
                    FRUTHUB EXPORT PVT LTD
                </h2>
                
                {/* --- LOADING SPINNER (Replacing the Progress Bar) --- */}
                <div className="flex items-center justify-center mb-10">
                    <div 
                        className="w-12 h-12 rounded-full border-4 animate-spin"
                        style={{ 
                            borderColor: COLORS.DeepGreen,
                            borderTopColor: COLORS.BananaYellow, // Yellow top creates the spinner effect
                        }}
                    ></div>
                </div>

                {/* 3. Loading Tagline */}
                <p 
                    className="text-xl"
                    style={{ color: COLORS.DeepGreen }} // Darker color for contrast
                >
                    Sourcing the World's Best Bananas.
                </p>
                <p 
                    className="text-md"
                    style={{ color: COLORS.DeepGreen }}
                >
                    Your view is loading...
                </p>
            </div>
        </div>
    );
};

export default WelcomeSplashPage;