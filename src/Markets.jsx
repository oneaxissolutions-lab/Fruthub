import React, { useState, useEffect, useRef } from 'react';

const MarketsWeServe = () => {
    const sectionRef = useRef(null); 
    const primaryMarkets = ['UAE', 'Iran', 'Middle East'];
    
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    
    
    
    const combinedStyles = `
        :root {
            --glow-color: #38a169;
        }
        
        /* --------------------------------- */
        /* --- Flip & Zoom Setup --- */
        /* --------------------------------- */
        .flip-on-entry {
            text-shadow: 0 0 1px rgba(56, 161, 105, 0.5); 
            /* ट्रांसफॉर्म ट्रांज़िशन को हटा दें क्योंकि एनीमेशन अब इसे नियंत्रित करता है */
            transition: text-shadow 0.3s ease-in-out; 
            transform-style: preserve-3d;
            perspective: 1000px;
            backface-visibility: hidden; 
            transform: rotateY(0deg) scale(1);
        }

        /* --- Animation Keyframes: 2s Flip and Zoom In/Out --- */
        @keyframes flip-zoom {
            0% { 
                transform: rotateY(0deg) scale(1); 
            }
            50% { 
                /* 50% पर पूरा फ्लिप (180deg) और अधिकतम ज़ूम */
                transform: rotateY(180deg) scale(1.1); 
            }
            100% { 
                /* 360deg पर वापस स्थिर और ज़ूम आउट */
                transform: rotateY(360deg) scale(1); 
            } 
        }
        
        /* --- Trigger Class --- */
        .do-flip-zoom {
            /* अवधि 3s है: 2s एनीमेशन + 1s ठहराव */
            /* infinite: एनीमेशन को दोहराता है */
            /* ease-in-out: एनीमेशन के अंदर गति */
            animation: flip-zoom 3s ease-in-out infinite; 
        }

        /* --------------------------------- */
        /* --- TEXT GLOW & TITLE STYLES --- */
        /* --------------------------------- */
        .main-title-glow {
            text-shadow: 
                0 0 4px rgba(12, 102, 51, 0.7), 
                0 0 8px rgba(56, 161, 105, 0.3); 
            transition: transform 0.3s ease-out;
        }

        .main-title-glow:hover {
            transform: rotateZ(-1deg);
        }
    `;
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionVisible(true);
                   
                } else {
                    
                }
            },
            {
                root: null, 
                rootMargin: '0px',
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []); 

    
    const getStaggeredStyle = (delayInSeconds) => {
        if (isSectionVisible) {
            return {
               
                animationDelay: `${delayInSeconds}s`, 
            };
        }
        return {};
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

                
                <div 
                    className="flex flex-wrap justify-center gap-4"
                >
                    
                    
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