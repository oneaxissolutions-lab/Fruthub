import React, { useState, useEffect } from 'react';

import video1 from './assets/video_1.mp4';
import video2 from './assets/video_2.mp4';
import video3 from './assets/video_3.mp4';


const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextGrey: '#222222',
    Background: '#FAF8F0',
    CTAHover: '#E47900',
};

const CONSTANT_TIMING = {
    DISPLAY_DURATION: 3000,
    FADE_DURATION: 1000
};

const timedVideoSources = [
    { id: 0, src: video1, title: "Video 1" },
    { id: 1, src: video2, title: "Video 2" },
    { id: 2, src: video3, title: "Video 3" }
];

const Home = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [contentVisible, setContentVisible] = useState(false);
    
    const { DISPLAY_DURATION, FADE_DURATION } = CONSTANT_TIMING;

    
    useEffect(() => {
      
        const totalTime = DISPLAY_DURATION + FADE_DURATION;
        const timer = setTimeout(() => {
            const nextIndex = (currentVideoIndex + 1) % timedVideoSources.length;
            setCurrentVideoIndex(nextIndex);
        }, totalTime);
        return () => clearTimeout(timer);
    }, [currentVideoIndex]); 

    
    useEffect(() => {
        const delay = setTimeout(() => {
            setContentVisible(true);
        }, 500); 
        return () => clearTimeout(delay);
    }, []);

    
    const FONT_STYLES = {
        heading: { fontFamily: 'Montserrat, sans-serif' },
        body: { fontFamily: 'Lato, sans-serif' },
    };

    
    const getAnimationStyles = (delay) => ({
        opacity: contentVisible ? 1 : 0,
        transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 1s ease-out ${delay}s, transform 1s ease-out ${delay}s`,
    });

    return (
       
        <div style={{ backgroundColor: COLORS.Background }} className="relative min-h-screen overflow-hidden">
            
          
            <div className="absolute inset-0 z-0">
                
                {timedVideoSources.map((video, index) => (
                    <video
                        key={video.id}
                        src={video.src}
                        autoPlay
                        loop
                        muted 
                        playsInline 
                       
                        className={`
                            absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] 
                            ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'}
                        `}
                        style={{ 
                            transitionDuration: `${FADE_DURATION}ms`, 
                            zIndex: index === currentVideoIndex ? 1 : 0,
                            filter: 'blur(1px)'
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                ))}
            </div>

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            
           
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 text-center">
                
                
                <nav className="absolute top-0 w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
                   
                    <span 
                        className={`text-xl sm:text-3xl font-bold text-[${COLORS.BananaYellow}]`} 
                        style={FONT_STYLES.heading}
                    >
                        Fruthub Exports Pvt. Ltd.
                    </span>
                    
                 
                    <div className="space-x-4">
                        <span className="text-xs sm:text-sm border border-white text-white px-2 py-1 rounded" style={FONT_STYLES.body}>
                            Video {currentVideoIndex + 1} / {timedVideoSources.length}
                        </span>
                    </div>
                </nav>

               
                <div className="max-w-4xl mx-auto pt-20 pb-20"> {/* Added vertical padding to ensure space for nav and buttons */}
                   
                    <h1 
                        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-snug mb-6" 
                        style={{ 
                            ...FONT_STYLES.heading, 
                            color: 'white', 
                            ...getAnimationStyles(0.2) 
                        }}
                    >
                        Premium Indian Bananas for Global Importers
                    </h1>
                    
                   
                    <p 
                        className={`mt-4 text-base sm:text-xl max-w-3xl mx-auto`}
                        style={{ 
                            ...FONT_STYLES.body, 
                            color: 'white', 
                            ...getAnimationStyles(0.4) 
                        }}
                    >
                        Fruthub Exports Pvt. Ltd. supplies export-grade Cavendish bananas from India to ports across the world with consistent quality, professional packing, and on-time shipments.
                    </p>
                </div>
                
               
                <div 
                    className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
                    style={getAnimationStyles(0.6)}
                >
                   
                    <button 
                        className={`text-[${COLORS.DarkForest}] px-8 py-3 rounded-xl text-lg font-bold shadow-xl transform hover:scale-105 transition duration-300`}
                        style={{ backgroundColor: COLORS.BananaYellow, fontFamily: FONT_STYLES.heading.fontFamily }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = COLORS.CTAHover}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = COLORS.BananaYellow}
                    >
                        Get Export Price Quote
                    </button>
                    
                    
                    <button 
                        className={`bg-transparent border border-white text-white px-8 py-3 rounded-xl text-lg font-medium transform hover:bg-[${COLORS.TradeBlue}] transition duration-300`}
                        style={{ fontFamily: FONT_STYLES.body.fontFamily }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = COLORS.TradeBlue}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        Download Company Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;