import React, { useState, useEffect, useRef } from 'react';
import backgroundImage from './assets/background.jpg'; 

const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextGrey: '#222222',
    TextWhite: '#FFFFFF', 
    CTAHover: '#E47900',
    Overlay: 'rgba(0, 0, 0, 0.4)', 
    CardTranslucent: 'rgba(255, 255, 255, 0.9)', 
    LightShadow: 'rgba(0, 0, 0, 0.2)', 
    LightningBlue: 'rgba(100, 180, 255, 0.9)', 
};

const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

const differentiators = [
    { icon: '🥇', title: '100+ Years Legacy', detail: 'A century of experience in sourcing & grading fruit and vegetables.', color: COLORS.BananaYellow },
    { icon: '✅', title: 'Strict Quality Control', detail: 'Complete checks from farm to container sealing.', color: COLORS.BananaYellow },
    { icon: '🗓️', title: 'Consistent Supply', detail: 'Strong farmer network ensures year-round availability.', color: COLORS.BananaYellow },
    { icon: '📜', title: 'Expert Documentation', detail: 'Phytosanitary, Certificate of Origin, Invoice, Fumigation & more.', color: COLORS.BananaYellow },
    { icon: '💬', title: 'Transparent Communication', detail: 'Regular updates, packing proofs & accurate ETA.', color: COLORS.BananaYellow },
    { icon: '📦', title: 'Fully Customizable Packaging', detail: 'Branding, printing & carton size tailor-made for buyers.', color: COLORS.BananaYellow },
];

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false); 
    const [isHovering, setIsHovering] = useState(false); 
    const [columns, setColumns] = useState(3); 
    const sectionRef = useRef(null);

    useEffect(() => {
        
        const updateColumns = () => {
            if (window.innerWidth >= 1024) setColumns(3);
            else if (window.innerWidth >= 768) setColumns(2);
            else setColumns(1);
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);

        const observer = new IntersectionObserver(
            ([entry]) => { setIsVisible(entry.isIntersecting); },
            { root: null, rootMargin: '0px', threshold: 0.1 } 
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            window.removeEventListener('resize', updateColumns);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);
    
    
    const disperseCardTransition = (index, baseDelay = 0.1) => {
        const DURATION = '1.2s'; 
        const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)'; 
        const delay = baseDelay + (index * 0.08); 
        
        const colIndex = index % columns;
        const rowIndex = Math.floor(index / columns);

        
        const translateXOffset = columns === 1 ? 0 : (colIndex - (columns / 2)) * 150;
        const translateYOffset = (rowIndex + 1) * 80;

        return {
            opacity: isVisible ? 1 : 0, 
            transform: isVisible 
                ? `translateY(0) translateX(0) scale(1)` 
                : `translateY(${translateYOffset}px) translateX(${translateXOffset}px) scale(0.9)`,
            transition: `transform ${DURATION} ${EASE} ${delay}s, opacity ${DURATION} ease-out ${delay}s`,
            willChange: 'transform, opacity',
        };
    };

    const slideUpTransition = (delay = 0) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)', 
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
    });

    const ANIMATION_CSS = `
        @keyframes cta-pulse {
            0% { box-shadow: 0 0 0 0 ${COLORS.BananaYellow}; }
            70% { box-shadow: 0 0 0 10px rgba(244, 196, 48, 0); }
            100% { box-shadow: 0 0 0 0 rgba(244, 196, 48, 0); }
        }
        @keyframes lightning-flash {
            0%, 5%, 50%, 55%, 80%, 85%, 100% { text-shadow: none; }
            1%, 51%, 81% { text-shadow: 0 0 10px ${COLORS.LightningBlue}, 0 0 20px ${COLORS.LightningBlue}; }
        }
        .lightning-animate { animation: lightning-flash 3s infinite; }
    `;

    return (
        <section 
            className="py-20 overflow-hidden" 
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', 
                position: 'relative'
            }}
            ref={sectionRef} 
        > 
            <style>{ANIMATION_CSS}</style> 
            
            <div className="absolute inset-0 z-0" style={{ backgroundColor: COLORS.Overlay }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 lightning-animate text-white" 
                    style={{ ...FONT_STYLES.heading, ...slideUpTransition(0.1) }}
                >
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {differentiators.map((item, index) => (
                        <div 
                            key={index}
                            className="p-8 rounded-xl transform transition duration-300 hover:scale-[1.03]"
                            style={{ 
                                backgroundColor: COLORS.CardTranslucent, 
                                borderTop: `4px solid ${item.color}`,
                                boxShadow: `0 10px 25px rgba(0,0,0,0.3)`, 
                                ...disperseCardTransition(index) 
                            }} 
                        >
                            <span className="text-5xl mb-4 inline-block">{item.icon}</span>
                            <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.DarkForest, ...FONT_STYLES.heading }}>{item.title}</h3>
                            <p className="text-base" style={{ color: COLORS.TextGrey, ...FONT_STYLES.body }}>{item.detail}</p>
                            <div className="mt-4 h-1 w-1/4 rounded-full" style={{ backgroundColor: COLORS.BananaYellow }}></div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto pt-16 text-center">
                    <h2 
                        className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-wide" 
                        style={{ ...FONT_STYLES.heading, ...slideUpTransition(0.4) }} 
                    >
                        Delivering Export-Quality Produce Worldwide
                    </h2>
                    <p 
                        className="text-lg md:text-xl mb-12 text-white leading-relaxed" 
                        style={{ ...FONT_STYLES.body, ...slideUpTransition(0.6) }}
                    >
                        Uniform size, strong shelf life, smooth peel, and perfect maturity for long-distance sea shipments.
                    </p>
                    <a href="/Products" className="inline-block" >
                    <button
                        className="py-4 px-10 font-semibold rounded-full shadow-xl transition duration-300 uppercase tracking-wider"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        style={{
                            backgroundColor: isHovering ? COLORS.CTAHover : COLORS.BananaYellow,
                            color: COLORS.DarkForest,
                            animation: 'cta-pulse 2s infinite',
                            ...slideUpTransition(0.8)
                        }}
                    > 
                        View Product Specifications
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;