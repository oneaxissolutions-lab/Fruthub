import React from 'react';

// --- Import all five required images from assets (Ensure these paths are correct in your project) ---
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

// --- CONSTANT COLOR VALUES (Matching site theme) ---
const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextGrey: '#222222',
    Background: '#FAF8F0',
    CTAHover: '#E47900',
};

// --- Inline Style for Custom Fonts ---
const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

// --- Data for the 5 Small Images ---
const keyDifferentiators = [
    { image: image1, alt: 'Farm Sourcing' },
    { image: image2, alt: 'Reefer Packaging' },
    { image: image3, alt: 'Container Loading' },
    { image: image4, alt: 'Quality Control' },
    { image: image5, alt: 'Family Legacy' },
];


const AboutUs = () => {
    
    // Function to handle button hover in
    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = COLORS.CTAHover;
    };

    // Function to handle button hover out
    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = COLORS.BananaYellow;
    };

    // --- Custom CSS for the Glowing and Sliding Animations ---
    const ANIMATION_CSS = `
        /* 1. GLOWING ANIMATION KEYFRAMES (The "Lights Effect") */
        @keyframes text-glow {
            0%, 100% { 
                text-shadow: 0 0 5px rgba(244, 196, 48, 0.4); 
            }
            50% { 
                text-shadow: 0 0 10px ${COLORS.BananaYellow}, 0 0 20px rgba(244, 196, 48, 0.6); 
            }
        }

        .glow-animate {
            animation: text-glow 3s ease-in-out infinite;
        }

        /* 2. SLIDE-IN-LEFT KEYFRAMES */
        @keyframes slide-in-left {
            0% {
                opacity: 0;
                transform: translateX(-30px);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .slide-animate {
            opacity: 0; 
            animation: slide-in-left 0.7s ease-out forwards;
        }
    `;

    // Base delay for the first text element
    const BASE_DELAY = 0.5;

    return (
        <section className="py-20" style={{ backgroundColor: COLORS.Background }}>
            
            {/* Inject the custom CSS animation styles */}
            <style>{ANIMATION_CSS}</style>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Two-Column Layout (Images Left, Text Right) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* LEFT COLUMN: 5 Small Image Grid */}
                    <div className="relative p-4" style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                        <div className="grid grid-cols-3 gap-4">
                            
                            {keyDifferentiators.map((img, index) => (
                                <div key={index} className="aspect-w-1 aspect-h-1">
                                    <img 
                                        src={img.image} 
                                        alt={img.alt} 
                                        className="w-full h-full object-cover rounded-lg transform transition duration-300 hover:scale-105"
                                        style={{ border: `3px solid ${COLORS.DeepGreen}`, outline: `3px solid ${COLORS.BananaYellow}` }}
                                    />
                                </div>
                            ))}
                            
                            <div className="hidden sm:block"></div> 

                        </div>
                    </div>

                    {/* RIGHT COLUMN: Text Content (Animations Applied) */}
                    <div>
                        
                        {/* Heading: GLOW ANIMATION + SLIDE-IN (Delay 1) */}
                        <h2 
                            className="text-4xl font-extrabold mb-6 glow-animate slide-animate" 
                            style={{ 
                                color: COLORS.DarkForest, 
                                ...FONT_STYLES.heading,
                                animationDelay: `${BASE_DELAY}s` 
                            }}
                        >
                            About Fruthub Exports
                        </h2>
                        
                        {/* Paragraph 1 (SLIDE-IN, Delay 2) */}
                        <p 
                            className="text-lg leading-relaxed mb-4 slide-animate" 
                            style={{ 
                                color: COLORS.TextGrey, 
                                ...FONT_STYLES.body,
                                animationDelay: `${BASE_DELAY + 0.2}s` 
                            }}
                        >
                            Fruthub Exports Pvt. Ltd. is built on a family legacy of over 100 years in the banana trade in India.
                        </p>
                        
                        {/* Paragraph 2 (SLIDE-IN, Delay 3) */}
                        <p 
                            className="text-lg leading-relaxed mb-4 slide-animate" 
                            style={{ 
                                color: COLORS.TextGrey, 
                                ...FONT_STYLES.body,
                                animationDelay: `${BASE_DELAY + 0.4}s` 
                            }}
                        >
                            From sourcing at the farm level to final container loading, we manage the complete supply chain to deliver bananas that meet international standards in color, size, and shelf life.
                        </p>
                        
                        {/* Paragraph 3 (SLIDE-IN, Delay 4) */}
                        <p 
                            className="text-lg leading-relaxed mb-8 slide-animate" 
                            style={{ 
                                color: COLORS.TextGrey, 
                                ...FONT_STYLES.body,
                                animationDelay: `${BASE_DELAY + 0.6}s` 
                            }}
                        >
                            We source from high-yield banana belts in Madhya Pradesh, Maharashtra and South India, ensuring round-the-year availability.
                        </p>

                        {/* Button (SLIDE-IN, Delay 5) */}
                        <a href="/about" className="inline-block slide-animate" 
                           style={{ animationDelay: `${BASE_DELAY + 0.8}s` }}>
                          <button 
                            className={`px-8 py-3 rounded-xl text-lg font-bold shadow-md transform hover:scale-105 transition duration-300`}
                            style={{ 
                                backgroundColor: COLORS.BananaYellow, 
                                color: COLORS.DarkForest, 
                                fontFamily: FONT_STYLES.heading.fontFamily,
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            Know More About Us
                          </button>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;