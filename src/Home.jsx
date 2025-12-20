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
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoSources.length
      );
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
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
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
            playsInline
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
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />
      </div>

      {/* CONTENT (Navbar safe) */}
      <div className="relative z-20 min-h-screen pt-[80px]">

        {/* Dots */}
        <div className="absolute top-10 w-full flex justify-center space-x-2">
          {videoSources.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentVideoIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 w-4'
              }`}
            />
          ))}
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <div className="mt-20 max-w-4xl">
            <h1
              className="text-3xl sm:text-6xl font-extrabold text-white mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                ...getAnimationStyles(0.2),
              }}
            >
              Premium Indian Bananas for Global Importers
            </h1>

            <p
              className="text-base sm:text-xl text-white mb-10 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Lato, sans-serif',
                ...getAnimationStyles(0.4),
              }}
            >
              Reliable export of Cavendish bananas with premium quality control
              and global logistics.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={getAnimationStyles(0.6)}
            >
              <button
                className="px-8 py-4 rounded-full font-bold"
                style={{
                  backgroundColor: COLORS.BananaYellow,
                  color: COLORS.DarkForest,
                }}
              >
                Get Price Quote
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white">
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