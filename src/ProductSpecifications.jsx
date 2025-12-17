import React, { useState } from 'react';

const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextWhite: '#FFFFFF',
    CTAHover: '#E47900',
};

const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

const pulseKeyframes = `
    @keyframes cta-pulse {
        0% { box-shadow: 0 0 0 0 ${COLORS.BananaYellow}; }
        70% { box-shadow: 0 0 0 10px rgba(244, 196, 48, 0); }
        100% { box-shadow: 0 0 0 0 rgba(244, 196, 48, 0); }
    }
`;

const fadeInKeyframes = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;


const headingAnimation = {
    animation: 'fadeInUp 1s ease-out 0s forwards',
    opacity: 0,
    transform: 'translateY(20px)',
};

const descriptionAnimation = {
    animation: 'fadeInUp 1s ease-out 0.5s forwards',
    opacity: 0,
    transform: 'translateY(20px)',
};

const ctaAnimation = {
    animation: 'fadeInUp 1s ease-out 1s forwards',
    opacity: 0,
    transform: 'translateY(20px)',
};

const accentLineAnimation = {
    animation: 'fadeInUp 1s ease-out 1.5s forwards',
    opacity: 0,
    transform: 'translateY(20px)',
};

const ProductSpecifications = () => {
    const [isHovering, setIsHovering] = useState(false);

    // backgroundStyle has been removed.

    const ctaButtonStyle = {
        backgroundColor: COLORS.BananaYellow,
        color: COLORS.DarkForest, 
        ...FONT_STYLES.body,
        ...(isHovering && { backgroundColor: COLORS.CTAHover }),
        
        animation: `cta-pulse 2s infinite, ${ctaAnimation.animation}`,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', 
        cursor: 'pointer',
        ...ctaAnimation,
    };
    
    return (
        // Removed the style={backgroundStyle} prop
        <section className="py-24 md:py-32">
            
            <style>
                {pulseKeyframes}
                {fadeInKeyframes}
            </style>

            <div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                
                <h2 
                    className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide" 
                    style={{ 
                        color: COLORS.TextWhite, 
                        ...FONT_STYLES.heading,
                        ...headingAnimation,
                    }} 
                >
                    Export-Grade Cavendish Bananas 
                </h2>

                <p 
                    className="text-lg md:text-xl mb-12 leading-relaxed" 
                    style={{ 
                        color: COLORS.TextWhite, 
                        ...FONT_STYLES.body,
                        ...descriptionAnimation,
                    }}
                >
                    Uniform size, strong shelf life, smooth peel, and perfect maturity for long-distance sea shipments. 

Shape 
                </p>

                <button
                    className="py-4 px-10 font-semibold rounded-full shadow-xl transition duration-300 uppercase tracking-wider"
                    style={ctaButtonStyle}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    View Product Specifications
                </button>
                
                <div 
                    className="h-1 mx-auto mt-12 w-16 rounded-full" 
                    style={{ 
                        backgroundColor: COLORS.TextWhite,
                        ...accentLineAnimation,
                    }}
                ></div>

            </div>
        </section>
    );
};

export default ProductSpecifications;