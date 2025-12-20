import React, { useState, useEffect } from 'react';

import video from './assets/video.mp4';
import video1 from './assets/video_2.mp4';
import video2 from './assets/video_1.mp4'; 

const COLORS = {
    BananaYellow: '#F4C430',
    DarkForest: '#064422',
};

const videoSources = [video, video1, video2];

const Home = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setContentVisible(true);
    }, []);

    const getAnimationStyles = (delay) => ({
        opacity: contentVisible ? 1 : 0,
        transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 1s ease-out ${delay}s, transform 1s ease-out ${delay}s`,
    });

    return (
        /* 1. Added max-w-full and overflow-x-hidden to the main container */
        <div 
            className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-black"
            style={{ scrollBehavior: 'smooth' }}
        >
        
            {/* 2. Video Container: Ensure it never exceeds viewport width */}
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                {videoSources.map((src, index) => (
                    <video
                        key={index}
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ filter: 'blur(1px)' }}
                    />
                ))}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            {/* 3. Content Wrapper: Use w-full instead of width based on content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 text-center">
                
                {/* 4. Navigation: Simplified to prevent side pushing */}
                <nav className="absolute top-0 left-0 right-0 w-full p-6 flex justify-between items-center max-w-7xl mx-auto pointer-events-none">
                    <div className="opacity-0">Logo Space</div>
                    <div className="flex space-x-2 pointer-events-auto">
                        {videoSources.map((_, i) => (
                            <div 
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                    i === currentVideoIndex ? 'bg-white w-8' : 'bg-white/30 w-4'
                                }`}
                            />
                        ))}
                    </div>
                </nav>

                <div className="w-full max-w-5xl mx-auto mt-12"> 
                    <h1 
                        className="text-3xl text-white sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 px-2" 
                        style={{ 
                            fontFamily: 'Montserrat, sans-serif',
                            ...getAnimationStyles(0.2) 
                        }}
                    >
                        Premium Indian Bananas for Global Importers 
                    </h1>
                    
                    <p 
                        className="mt-4 text-sm sm:text-xl max-w-2xl mx-auto text-white px-4"
                        style={{ 
                            fontFamily: 'Lato, sans-serif',
                            ...getAnimationStyles(0.4) 
                        }}
                    >
                        Reliable export of Cavendish bananas with premium quality control and global logistics.
                    </p>

                    <div 
                        className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center"
                        style={getAnimationStyles(0.6)}
                    >
                        <button 
                            className="w-64 sm:w-auto px-8 py-3 rounded-full text-lg font-bold shadow-xl transform active:scale-95 transition duration-300"
                            style={{ 
                                backgroundColor: COLORS.BananaYellow, 
                                color: COLORS.DarkForest 
                            }}
                        >
                            Get Price Quote
                        </button>
                        
                        <button 
                            className="w-64 sm:w-auto bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-medium transform active:scale-95 transition duration-300 hover:bg-white/10"
                        >
                            Company Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;