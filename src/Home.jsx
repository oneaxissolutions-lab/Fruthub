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
      style={{
        backgroundColor: 'black',
        position: 'relative',
        minHeight: '100vh', // Ensure it fills the screen on mobile
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Video Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {videoSources.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            muted
            loop
            playsInline // Crucial for iPhone/Android autoplay
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentVideoIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              filter: 'blur(1px)',
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', // Slightly darker for better text readability
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* Responsive Navbar Spacer */}
        <div className="h-[70px] sm:h-[80px]" />

        {/* Progress Dots - Moved slightly down to avoid notch/island on new iPhones */}
        <div className="w-full flex justify-center space-x-2 py-4">
          {videoSources.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentVideoIndex ? 'bg-white w-8' : 'bg-white/30 w-4'
              }`}
            />
          ))}
        </div>

        {/* Hero Text - Centered vertically and horizontally */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-20">
          <div className="max-w-4xl w-full">
            <h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                ...getAnimationStyles(0.2),
              }}
            >
              Premium Indian Bananas <br className="hidden sm:block" /> 
              for Global Importers
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'Lato, sans-serif',
                ...getAnimationStyles(0.4),
              }}
            >
              Reliable export of Cavendish bananas with premium quality control
              and global logistics.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              style={getAnimationStyles(0.6)}
            >
              <button
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-transform"
                style={{
                  backgroundColor: COLORS.BananaYellow,
                  color: COLORS.DarkForest,
                }}
              >
                Get Price Quote
              </button>

              <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white text-white font-bold text-lg hover:bg-white/10 active:scale-95 transition-all">
                Company Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;