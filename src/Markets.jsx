import React, { useState, useEffect, useRef } from 'react';
// 1. useNavigate इम्पोर्ट करें
import { useNavigate } from 'react-router-dom'; 

const MarketsWeServe = () => {
    const sectionRef = useRef(null); 
    const navigate = useNavigate(); // 2. नेविगेट फंक्शन को इनिशियलाइज़ करें
    const primaryMarkets = ['UAE', 'Iran', 'Middle East'];
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    
    const combinedStyles = `
        :root { --glow-color: #38a169; }
        .flip-on-entry {
            transition: text-shadow 0.3s ease-in-out; 
            transform-style: preserve-3d;
            perspective: 1000px;
            backface-visibility: hidden; 
            transform: rotateY(0deg) scale(1);
        }
        @keyframes flip-zoom {
            0% { transform: rotateY(0deg) scale(1); }
            50% { transform: rotateY(180deg) scale(1.1); }
            100% { transform: rotateY(360deg) scale(1); } 
        }
        .do-flip-zoom { animation: flip-zoom 3s ease-in-out infinite; }
        .main-title-glow {
            text-shadow: 0 0 4px rgba(12, 102, 51, 0.7), 0 0 8px rgba(56, 161, 105, 0.3); 
            transition: transform 0.3s ease-out;
        }
        .main-title-glow:hover { transform: rotateZ(-1deg); }
    `;
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsSectionVisible(true); },
            { root: null, rootMargin: '0px', threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []); 

    const getStaggeredStyle = (delayInSeconds) => {
        return isSectionVisible ? { animationDelay: `${delayInSeconds}s` } : {};
    };

    return (
        <section className="py-16 bg-white" ref={sectionRef}> 
            <style>{combinedStyles}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 
                    className={`text-4xl font-bold mb-4 tracking-tight main-title-glow cursor-pointer flip-on-entry ${isSectionVisible ? 'do-flip-zoom' : ''}`}
                    style={getStaggeredStyle(0)}
                >
                    Markets We Serve
                </h2>
                
                <p 
                    className={`text-xl text-gray-600 mb-10 transition duration-300 ease-in-out hover:text-green-800 hover:scale-[1.02] cursor-default flip-on-entry ${isSectionVisible ? 'do-flip-zoom' : ''}`}
                    style={getStaggeredStyle(1)}
                >
                    Trusted suppliers to importers and wholesalers in:
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {primaryMarkets.map((market, index) => (
                        <div
                            key={market}
                            className={`bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out cursor-pointer text-lg z-20 relative flip-on-entry ${isSectionVisible ? 'do-flip-zoom' : ''}`}
                            style={getStaggeredStyle(2 + index)} 
                        >
                            {market}
                        </div>
                    ))}
                    
                    <div
                        className={`bg-green-900 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out cursor-pointer text-lg z-20 relative flip-on-entry ${isSectionVisible ? 'do-flip-zoom' : ''}`}
                        style={getStaggeredStyle(2 + primaryMarkets.length)} 
                    >
                        Other global markets on request
                    </div>
                </div>

               
            </div>
        </section>
    );
};

export default MarketsWeServe;