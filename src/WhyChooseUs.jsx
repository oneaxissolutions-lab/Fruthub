import React, { useState, useEffect, useRef } from 'react';

import backgroundImage from './background.jpg'; 


const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextGrey: '#222222',
    
    CTAHover: '#E47900',
    
    Overlay: 'rgba(0, 0, 0, 0)', 
    
    CardTranslucent: 'rgba(255, 255, 255, 0.8)', 
    
    LightShadow: 'rgba(255, 255, 255, 0.4)',
    LightningBlue: 'rgba(100, 180, 255, 0.9)', 
};


const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};


const differentiators = [
    { 
        icon: '🥇', 
        title: '100+ Years Legacy', 
        detail: 'A century of experience in sourcing & grading bananas. ',
        color: COLORS.BananaYellow
    },
    { 
        icon: '✅', 
        title: 'Strict Quality Control ', 
        detail: 'Complete checks from farm to container sealing. ',
        color: COLORS.BananaYellow
    },
    { 
        icon: '🗓️', 
        title: 'Consistent Supply ', 
        detail: 'Strong farmer network ensures year-round availability. ',
        color: COLORS.BananaYellow
    },
    { 
        icon: '📜', 
        title: ' Expert Documentation', 
        detail: 'Phytosanitary, Certificate of Origin, Invoice, Fumigation & more.',
        color: COLORS.BananaYellow
    },
    { 
        icon: '💬', 
        title: 'Transparent Communication ', 
        detail: 'Regular updates, packing proofs & accurate ETA.',
        color: COLORS.BananaYellow
    },
    { 
        icon: '📦', 
        title: 'Fully Customizable Packaging ', 
        detail: 'Branding, printing & carton size tailor-made for buyers. ',
        color: COLORS.BananaYellow
    },
];

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); 
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
    
    const slideUpTransition = (delay = 0) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateZ(0)' : 'translateY(30px) translateZ(0)', 
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        willChange: 'transform, opacity', 
    });
    
    // --- UPDATED LIGHTNING ANIMATION CSS FOR CONTINUOUS BLINK ---
    const ANIMATION_CSS = `
        @keyframes lightning-flash {
            0% { 
                text-shadow: none; 
            }
            1% { 
                text-shadow: 0 0 10px ${COLORS.LightningBlue}, 0 0 20px ${COLORS.LightningBlue};
            }
            5% { 
                text-shadow: none; 
            }
            50% { 
                text-shadow: none; 
            }
            51% { 
                text-shadow: 0 0 10px ${COLORS.LightningBlue}, 0 0 20px ${COLORS.LightningBlue};
            }
            55% { 
                text-shadow: none; 
            }
            
            80% { 
                text-shadow: none; 
            }
            81% { 
                text-shadow: 0 0 10px ${COLORS.LightningBlue}, 0 0 20px ${COLORS.LightningBlue};
            }
            85% { 
                text-shadow: none; 
            }
            100% {
                text-shadow: none;
            }
        }

        .lightning-animate {
            animation: lightning-flash 1s infinite; /* Cycles every 1 second */
            will-change: text-shadow; 
        }
    `;
    // -------------------------------------------------------------

    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '600px',
        willChange: 'scroll-position', 
    };

    const customCardShadow = `0 10px 15px -3px ${COLORS.LightShadow}, 0 4px 6px -2px ${COLORS.LightShadow}`;
    
    const BASE_DELAY = 0.1;

    return (
        <section 
            className="py-20" 
            style={sectionStyle}
            ref={sectionRef} 
        > 
            <style>{ANIMATION_CSS}</style> 
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 
                    className="text-5xl font-extrabold text-center mb-16 lightning-animate" 
                    style={{ 
                        color: COLORS.DeepGreen, 
                        ...FONT_STYLES.heading, 
                        ...slideUpTransition(BASE_DELAY) 
                    }}
                >
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <div 
                            key={index}
                            className="p-8 rounded-xl transform transition duration-300 hover:scale-[1.03]"
                            style={{ 
                                backgroundColor: COLORS.CardTranslucent, 
                                borderTop: `4px solid ${item.color}`,
                                boxShadow: customCardShadow, 
                                ...slideUpTransition(BASE_DELAY + 0.15 + (index * 0.1)) 
                            }} 
                        >
                            <span className="text-5xl mb-4 inline-block">{item.icon}</span>
                            
                            <h3 
                                className="text-xl font-bold mb-3" 
                                style={{ color: COLORS.DarkForest, ...FONT_STYLES.heading }} 
                            >
                                {item.title}
                            </h3>
                            
                            <p 
                                className="text-base" 
                                style={{ color: COLORS.TextGrey, ...FONT_STYLES.body }}
                            >
                                {item.detail}
                            </p>
                            
                            <div 
                                className="mt-4 h-1 w-1/4 rounded-full" 
                                style={{ backgroundColor: COLORS.BananaYellow }}
                            ></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;