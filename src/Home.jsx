import React, { useState, useEffect } from 'react';

// Adjusted imports based on your file names
import video from './assets/video.mp4';
import video1 from './assets/video_2.mp4';
// Assuming a third one exists or reusing one for the 3-video requirement
import video2 from './assets/video_1.mp4'; 

const COLORS = {
    DeepGreen: '#0b6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    CTAHover: '#E47900',
};

const videoSources = [video, video1, video2];

const Home = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [contentVisible, setContentVisible] = useState(false);

    // This effect handles the 3-second rotation logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
        }, 3000); // Switches every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Trigger for text animations
    useEffect(() => {
        const delay = setTimeout(() => {
            setContentVisible(true);
        }, 50);
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
        <div 
            style={{ backgroundColor: 'black', scrollBehavior: 'smooth' }} 
            className="relative min-h-screen overflow-hidden"
        >
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
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
                        style={{ 
                            filter: 'blur(1px)',
                            backgroundColor: 'black' 
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                ))}
                {/* Dark Overlay for contrast */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 text-center">
                
                <nav className="absolute top-0 w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
                    <span 
                        className="text-xl sm:text-3xl font-bold" 
                        style={{ ...FONT_STYLES.heading, color: COLORS.BananaYellow }}
                    >
                        Fruthub Exports Pvt. Ltd.
                    </span>
                    
                    {/* Visual dots to show which video is playing */}
                    <div className="flex space-x-2">
                        {videoSources.map((_, i) => (
                            <div 
                                key={i}
                                className={`h-1.5 w-6 rounded-full transition-all duration-500 ${
                                    i === currentVideoIndex ? 'bg-white w-10' : 'bg-white/30'
                                }`}
                            />
                        ))}
                    </div>
                </nav>

                <div className="flex flex-col items-center justify-center mt-24"> 
                    <div className="max-w-5xl mx-auto p-4 sm:p-8 rounded-lg"> 
                        <h1 
                            className="text-4xl text-white sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-snug mb-6" 
                            style={{ 
                                ...FONT_STYLES.heading, 
                                ...getAnimationStyles(0.2) 
                            }}
                        >
                            Premium Indian Bananas for Global Importers 
                        </h1>
                        
                        <p 
                            className="mt-4 text-base sm:text-xl max-w-3xl mx-auto"
                            style={{ 
                                ...FONT_STYLES.body, 
                                color: 'white', 
                                ...getAnimationStyles(0.4) 
                            }}
                        >
                            Reliable export of Cavendish bananas with premium quality control and global logistics.
                        </p>
                    </div>
                    
                    <div 
                        className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
                        style={getAnimationStyles(0.6)}
                    >
                        <button 
                            className="px-8 py-3 rounded-full text-lg font-bold shadow-xl transform hover:scale-105 transition duration-300"
                            style={{ 
                                backgroundColor: COLORS.BananaYellow, 
                                color: COLORS.DarkForest,
                                fontFamily: FONT_STYLES.heading.fontFamily 
                            }}
                        >
                            Get Price Quote
                        </button>
                        
                        <button 
                            className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-medium transform transition duration-300 hover:bg-white/10"
                            style={{ fontFamily: FONT_STYLES.body.fontFamily }}
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