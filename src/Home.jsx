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
        <div 
            className="home-wrapper"
            style={{ 
                backgroundColor: 'black', 
                width: '100%', 
                maxWidth: '100vw', // Screen se bahar nahi jane dega
                overflowX: 'hidden', // Side scroll block
                position: 'relative',
                minHeight: '100vh'
            }}
        >
            {/* Video Background Layer */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', width: '100%' }}>
                {videoSources.map((src, index) => (
                    <video
                        key={index}
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ 
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'opacity 1s ease-in-out',
                            opacity: index === currentVideoIndex ? 1 : 0,
                            filter: 'blur(1px)'
                        }}
                    />
                ))}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1 }}></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 text-center" style={{ width: '100%' }}>
                
                {/* Dots Navigation */}
                <div className="absolute top-10 w-30 flex justify-center space-x-2 px-4">
                    {videoSources.map((_, i) => (
                        <div 
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === currentVideoIndex ? 'bg-white w-8' : 'bg-white/30 w-4'
                            }`}
                        />
                    ))}
                </div>

                <div className="mt-20 w-full max-w-4xl mx-auto px-2"> 
                    <h1 
                        className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white" 
                        style={{ 
                            fontFamily: 'Montserrat, sans-serif',
                            ...getAnimationStyles(0.2) 
                        }}
                    >
                        Premium Indian Bananas for Global Importers 
                    </h1>
                    
                    <p 
                        className="text-base sm:text-xl max-w-2xl mx-auto text-white mb-10"
                        style={{ 
                            fontFamily: 'Lato, sans-serif',
                            ...getAnimationStyles(0.4) 
                        }}
                    >
                        Reliable export of Cavendish bananas with premium quality control and global logistics.
                    </p>
                    
                    <div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        style={getAnimationStyles(0.6)}
                    >
                        <button 
                            className="w-64 sm:w-auto px-8 py-4 rounded-full text-lg font-bold shadow-2xl"
                            style={{ backgroundColor: COLORS.BananaYellow, color: COLORS.DarkForest }}
                        >
                            Get Price Quote
                        </button>
                        
                        <button className="w-64 sm:w-auto bg-transparent border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition">
                            Company Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;