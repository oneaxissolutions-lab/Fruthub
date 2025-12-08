import React, { useState } from 'react';

// --- CONSTANT COLOR VALUES (Strictly Adhering to Fruthub Style Guide) ---
const COLORS = {
    DeepGreen: '#0B6A32',     // Circle Color 1
    BananaYellow: '#F4C430',  // Circle Color 2
    TradeBlue: '#0A4D8C',     // Accent Color (Heading)
    DarkForest: '#064422',   // Button Text Color
    TextGrey: '#222222',     
    Background: '#FAF8F0',   // Main Background Color
    CTAHover: '#E47900',     // Button Hover Color
};

// --- Inline Style for Custom Fonts ---
const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

const Markets = () => {
    // State for CTA hover effect
    const [isHovering, setIsHovering] = useState(false);
    
    // Data for the Markets List
    const markets = [
        ['UAE'], 
        ['Iran'], 
        ['Middle', 'East'], 
        ['Global Markets', 'on Request']
    ];

    // Base styles
    const backgroundStyle = {
        backgroundColor: COLORS.Background,
    };
    
    // Style for the CTA button, including the dynamic hover background
    const ctaButtonStyle = {
        backgroundColor: isHovering ? COLORS.CTAHover : COLORS.BananaYellow,
        color: COLORS.DarkForest,
        ...FONT_STYLES.heading,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    };

    // Styling for the circular market badges (Base properties)
    const baseBadgeStyle = {
        ...FONT_STYLES.body,
        fontSize: '0.9rem',
        fontWeight: 'bold',
        width: '120px', 
        height: '120px', 
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        transition: 'transform 0.3s ease-out',
        lineHeight: '1.2', 
    };

    return (
        <section className="py-16 md:py-20" style={backgroundStyle}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Section Heading (AOS fade-down) */}
                <h2 
                    className="text-4xl md:text-5xl font-extrabold mb-12" 
                    style={{ color: COLORS.TradeBlue, ...FONT_STYLES.heading }}
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    Markets We Serve
                </h2>

                {/* --- Markets List Display as Circular Badges --- */}
                <div 
                    className="flex flex-wrap justify-center gap-6 mb-16"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {markets.map((marketArray, index) => {
                        // Logic to alternate colors: Deep Green for even index, Banana Yellow for odd index
                        const isEven = index % 2 === 0;
                        const bgColor = isEven ? COLORS.DeepGreen : COLORS.BananaYellow;
                        const textColor = isEven ? 'white' : COLORS.DarkForest; // Dark text on Yellow for contrast
                        const shadowColor = isEven ? 'rgba(11, 106, 50, 0.4)' : 'rgba(244, 196, 48, 0.5)';

                        const dynamicBadgeStyle = {
                            ...baseBadgeStyle,
                            backgroundColor: bgColor,
                            color: textColor,
                            boxShadow: `0 4px 10px ${shadowColor}`,
                        };

                        return (
                            <div 
                                key={index}
                                className="text-center hover:scale-[1.05]"
                                style={dynamicBadgeStyle}
                            >
                                {marketArray.map((word, i) => (
                                    <span key={i} style={{ display: 'block' }}>
                                        {word}
                                    </span>
                                ))}
                            </div>
                        );
                    })}
                </div>
                
                {/* Call-to-Action Button (AOS zoom-in) */}
                <div 
                    data-aos="zoom-in"
                    data-aos-delay="500"
                >
                    <button
                        className="py-3 px-8 text-lg font-bold rounded-full shadow-md transition duration-300 hover:scale-[1.05]"
                        style={ctaButtonStyle}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        View All Markets
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Markets;