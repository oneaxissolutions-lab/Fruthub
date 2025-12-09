import React, { useState, useEffect } from 'react';

// Define consistent colors from your previous context
const COLORS = {
    DeepGreen: '#0B6A32',      // Primary Green
    BananaYellow: '#F4C430',  // Accent Yellow
    BackgroundLight: '#F7FBF8', // Very light, slightly green/white background
};

// 💡 CHANGE HERE: Set the display duration to 3500ms (3.5 seconds)
// This ensures the total time before onLoaded is called is 3.5s + 0.5s = 4 seconds.
const DISPLAY_DURATION = 3500; // 3.5 seconds
const FADE_DURATION = 500; // 0.5 seconds

/**
 * A full-screen splash/loading component with a light background and a simple spinner.
 */
const WelcomeSplashPage = ({ onLoaded }) => {
    // isFadingOut controls the opacity of the entire splash screen
    const [isFadingOut, setIsFadingOut] = useState(false);

    // --- Core Timer Logic ---
    useEffect(() => {
        const timer = setTimeout(() => {
            // 1. Start the fade-out transition
            setIsFadingOut(true);
            
            // 2. Wait for the fade-out transition (500ms duration) to complete 
            //    before calling the parent component's onLoaded.
            setTimeout(onLoaded, FADE_DURATION); 
        }, DISPLAY_DURATION); // Timer set for 3500ms

        return () => clearTimeout(timer);
    }, [onLoaded]); 

    return (
        <div 
            className="fixed inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500"
            // Light background shade
            style={{ 
                backgroundColor: COLORS.BackgroundLight, 
                zIndex: 9999, // Ensure it's on top of everything
                opacity: isFadingOut ? 0 : 1 // Control fade-out using state
            }}
        >
            <div className="text-center">
                
                {/* 1. Catchy Welcome Text */}
                <h1 
                    className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2" 
                    style={{ color: COLORS.DeepGreen }}
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
                
                {/* --- LOADING SPINNER --- */}
                <div className="flex items-center justify-center mb-10">
                    <div 
                        className="w-12 h-12 rounded-full border-4 animate-spin"
                        style={{ 
                            borderColor: COLORS.DeepGreen,
                            borderTopColor: COLORS.BananaYellow, 
                        }}
                    ></div>
                </div>

                {/* 3. Loading Tagline */}
                <p 
                    className="text-xl"
                    style={{ color: COLORS.DeepGreen }} 
                >
                    Sourcing the World's Best Bananas.
                </p>
                <p 
                    className="text-md"
                    style={{ color: COLORS.DeepGreen }}
                >
                    View loads in 4 seconds...
                </p>
            </div>
        </div>
    );
};

export default WelcomeSplashPage;