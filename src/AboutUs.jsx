import React, { useState, useEffect, useRef } from 'react';

import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextGrey: '#222222',
    Background: '#FAF8F0',
    CTAHover: '#E47900',
};

const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

const keyDifferentiators = [
    { image: image1, alt: 'Farm Sourcing' },
    { image: image2, alt: 'Reefer Packaging' },
    { image: image3, alt: 'Container Loading' },
    { image: image4, alt: 'Quality Control' },
    { image: image5, alt: 'Family Legacy' },
];

const differentiatorCards = [
    { title: 'Farm Selection', description: 'Quality checks begin at the source.' },
    { title: 'Maturity-Level Harvesting', description: 'Picked at the optimal stage for global transit.' },
    { title: 'Grading & Washing', description: 'Strict sorting and cleaning for international standards.' },
    { title: 'Protective Packing', description: 'High-quality primary and secondary packing.' },
    { title: 'Cold Chain & Reefer Loading', description: 'Maintained low temperatures until shipment.' },
    { title: 'Primary Sourcing Belts', description: 'Madhya Pradesh, Maharashtra & South India.', highlight: true },
    { title: 'MOQ (Minimum Order)', description: '1 ton for domestic/trial. FCL recommended for exports.', highlight: true },
];


const AboutUs = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const sectionRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                
                setIsContentVisible(entry.isIntersecting);
                
                
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


    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = COLORS.CTAHover;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = COLORS.BananaYellow;
    };
   
    const slideInRightTransition = (delay = 0) => ({
        opacity: isContentVisible ? 1 : 0,
        transform: isContentVisible ? 'translateX(0) translateZ(0)' : 'translateX(50px) translateZ(0)', 
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
        willChange: 'transform, opacity', 
    });
    
    
    const slideInLeftTransition = (delay = 0) => ({
        opacity: isContentVisible ? 1 : 0,
        transform: isContentVisible ? 'translateX(0) translateZ(0)' : 'translateX(-50px) translateZ(0)', 
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
        willChange: 'transform, opacity', 
    });


   
    const slideUpTransition = (delay = 0) => ({
        opacity: isContentVisible ? 1 : 0,
        transform: isContentVisible ? 'translateY(0) translateZ(0)' : 'translateY(30px) translateZ(0)', 
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        willChange: 'transform, opacity', 
    });


    const ANIMATION_CSS = `
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
            will-change: text-shadow; 
        }
    `;
    
    const TEXT_BASE_DELAY = 0.1;
    const IMAGE_BASE_DELAY = 0.4;
    const CARD_BASE_DELAY = 1.6; 

    return (
        <section 
            id="about-us" 
            className="py-20" 
            style={{ 
                backgroundColor: COLORS.Background,
                willChange: 'scroll-position', 
            }}
            ref={sectionRef} 
        >
            
            <style>{ANIMATION_CSS}</style>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    
                    
                   
                    <div 
                        className="relative p-4" 
                        style={{ 
                            backgroundColor: 'white', 
                            borderRadius: '1rem', 
                            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                            
                            
                            ...slideInLeftTransition(TEXT_BASE_DELAY)
                        }}
                    >
                        <div className="grid grid-cols-3 gap-4">
                            
                            {keyDifferentiators.map((img, index) => (
                                <div 
                                    key={index} 
                                    className="aspect-w-1 aspect-h-1"
                                   
                                    style={slideUpTransition(IMAGE_BASE_DELAY + (index * 0.15))}
                                >
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

                    
                   
                    <div>
                        
                        
                        
                        <h2 
                            className="text-4xl font-extrabold mb-6 glow-animate" 
                            style={{ 
                                color: COLORS.DarkForest, 
                                ...FONT_STYLES.heading,
                               
                                ...slideInRightTransition(TEXT_BASE_DELAY) 
                            }}
                        >
                            About FrutsHub Exports Private Limited
                        </h2>
                        
                        
                        
                        <p 
                            className="text-lg leading-relaxed mb-4" 
                            style={{ 
                                color: COLORS.TextGrey, 
                                ...FONT_STYLES.body,
                               
                                ...slideInRightTransition(TEXT_BASE_DELAY + 0.2) 
                            }}
                        >
                            Frutshub carries a 100-year-old family legacy in India’s agricultural trade. For generations, our family has been a trusted supplier to major domestic mandis across the country, building deep roots in the farming community.
                        </p>
                        
                        
                        
                        <p 
                            className="text-lg leading-relaxed mb-4" 
                            style={{ 
                                color: COLORS.TextGrey, 
                                ...FONT_STYLES.body,
                               
                                ...slideInRightTransition(TEXT_BASE_DELAY + 0.4) 
                            }}
                        >Today, Frutshub Exports Private Limited combines this century of experience with modern packhouse systems to bridge the gap between Indian farms and the global market. We specialize in the export of premium produce, ensuring that the freshness of our fields reaches the world in peak condition.
                        </p>
                        
                        
                        
                        <p 
                            className="text-lg leading-relaxed mb-8" 
                            style={{ 
                                color: COLORS.TextGrey, 
                                ...FONT_STYLES.body,
                             
                                ...slideInRightTransition(TEXT_BASE_DELAY + 0.6) 
                            }}
                        >
                           We source directly from high-yield agricultural belts in Madhya Pradesh, Maharashtra, and South India. By managing our own supply chain and sourcing "On Demand," we ensure year-round availability and the highest standards of food safety for our international partners.
                        </p>

                        
                        
                        <a href="/about" className="inline-block" 
                           
                            style={slideInRightTransition(TEXT_BASE_DELAY + 0.8)}> 
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
                
                
                
                
                
                <div className="mt-16 pt-10 border-t border-gray-300">
                    
                    
                    
                    <h3 
                        className="text-3xl font-bold mb-10 text-center" 
                        style={{ 
                            color: COLORS.DeepGreen, 
                            ...FONT_STYLES.heading,
                          
                            ...slideUpTransition(CARD_BASE_DELAY) 
                        }}
                    >
                        Our Supply Chain Advantage
                    </h3>

                    
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                        
                        {differentiatorCards.map((item, index) => (
                            <div 
                                key={index} 
                                className={`
                                    p-4 rounded-lg shadow-md flex flex-col justify-between h-full 
                                    ${item.highlight ? 'bg-white' : 'bg-white/90'}
                                    
                                    group relative transition duration-300 cursor-pointer
                                    hover:bg-[${COLORS.BananaYellow}]
                                    hover:z-20
                                    transform hover:scale-[1.05] hover:translate-y-[-2px] 
                                `}
                                style={{ 
                                    
                                    
                                    ...slideUpTransition(CARD_BASE_DELAY + 0.3 + (index * 0.15)), 
                                    border: `2px solid ${item.highlight ? COLORS.BananaYellow : COLORS.DeepGreen}`,
                                }}
                            >
                                
                                <h4 
                                    className={`
                                        text-sm md:text-md font-bold mb-1 transition duration-300
                                        ${item.highlight ? 'text-[' + COLORS.DarkForest + '] group-hover:text-[' + COLORS.DeepGreen + ']' : 'text-[' + COLORS.DeepGreen + '] group-hover:text-[' + COLORS.DarkForest + ']'} 
                                    `} 
                                    style={FONT_STYLES.heading}
                                >
                                    {item.title}
                                </h4>
                                <p 
                                    className={`
                                        text-xs md:text-sm transition duration-300
                                        ${'text-[' + COLORS.TextGrey + '] group-hover:text-[' + COLORS.DarkForest + ']'}
                                    `} 
                                    style={FONT_STYLES.body}
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
                

            </div>
        </section>
    );
};

export default AboutUs;