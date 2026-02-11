import React, { useState, useEffect } from 'react';


const COLORS = {
    DeepGreen: '#0B6A32',      
    BananaYellow: '#F4C430',  
    BackgroundLight: '#F7FBF8', 
};


const DISPLAY_DURATION = 3500;
const FADE_DURATION = 500; 


const WelcomeSplashPage = ({ onLoaded }) => {
    
    const [isFadingOut, setIsFadingOut] = useState(false);

    
    useEffect(() => {
        const timer = setTimeout(() => {
            
            setIsFadingOut(true);
            
           
            setTimeout(onLoaded, FADE_DURATION); 
        }, DISPLAY_DURATION); 

        return () => clearTimeout(timer);
    }, [onLoaded]); 

    return (
        <div 
            className="fixed inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500"
            
            style={{ 
                backgroundColor: COLORS.BackgroundLight, 
                zIndex: 9999, 
                opacity: isFadingOut ? 0 : 1 
            }}
        >
            <div className="text-center">
                
               
                <h1 
                    className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2" 
                    style={{ color: COLORS.DeepGreen }}
                >
                    WELCOME TO
                </h1>

                
                <h2 
                    className="text-2xl sm:text-4xl font-bold tracking-wide mb-10" 
                    style={{ color: COLORS.BananaYellow }}
                >
                    FRUTSHUB EXPORT PVT LTD
                </h2>
                
                
                <div className="flex items-center justify-center mb-10">
                    <div 
                        className="w-12 h-12 rounded-full border-4 animate-spin"
                        style={{ 
                            borderColor: COLORS.DeepGreen,
                            borderTopColor: COLORS.BananaYellow, 
                        }}
                    ></div>
                </div>

                
                <p 
                    className="text-xl"
                    style={{ color: COLORS.DeepGreen }} 
                >
                    Sourcing the World's Best Fruits and Vegetables .
                </p>
                <p 
                    className="text-md"
                    style={{ color: COLORS.DeepGreen }}
                >
                    
                </p>
            </div>
        </div>
    );
};

export default WelcomeSplashPage;