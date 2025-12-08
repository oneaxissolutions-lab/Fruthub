import React, { useState } from 'react';

// --- CONSTANT COLOR VALUES (Strictly Adhering to Fruthub Style Guide) ---
const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextGrey: '#222222',
    Background: '#FAF8F0',
    CTAHover: '#E47900',
};

// --- Custom Shadow Color (Stronger, less transparent Deep Green) ---
// Using a slightly stronger shadow value for better visibility.
const DeepGreenShadow = '0 6px 15px rgba(11, 106, 50, 0.4)'; // 40% transparent Deep Green
const HoverShadow = '0 8px 20px rgba(0, 0, 0, 0.2)'; // Darker shadow on hover

// --- Inline Style for Custom Fonts ---
const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

// Data for the Capability List
const capabilities = [
    { 
        icon: '🚢', 
        text: 'Regular shipments from major Indian ports',
        accentColor: COLORS.TradeBlue 
    },
    { 
        icon: '📦', 
        text: 'Flexible volume based on buyer requirements (Tons/Containers)',
        accentColor: COLORS.DeepGreen
    },
    { 
        icon: '🏷️', 
        text: 'Custom branding available for recurring importers (Private Label)',
        accentColor: COLORS.TradeBlue
    },
    { 
        icon: '🧊', 
        text: 'Cold chain maintained till container sealing for maximum freshness',
        accentColor: COLORS.DeepGreen 
    },
];

const SupplyCapacity = () => {
    // State for CTA hover effect
    const [isHovering, setIsHovering] = useState(false);
    
    // Base styles
    const backgroundStyle = {
        backgroundColor: COLORS.Background,
    };
    
    const headingStyle = {
        color: COLORS.DeepGreen,
        ...FONT_STYLES.heading,
    };

    // Style for the CTA button, including the dynamic hover background
    const ctaButtonStyle = {
        backgroundColor: isHovering ? COLORS.CTAHover : COLORS.BananaYellow,
        color: COLORS.DarkForest,
        ...FONT_STYLES.heading,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    };

    return (
        <section className="py-16 md:py-20" style={backgroundStyle}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Heading and Subtitle (AOS fade-down) */}
                <div 
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    <h2 
                        className="text-3xl md:text-4xl font-extrabold mb-3 text-center"
                        style={headingStyle}
                    >
                        Global Supply Capacity
                    </h2>
                    
                    <p 
                        className="text-center text-lg mb-12 max-w-3xl mx-auto"
                        style={{ color: COLORS.TextGrey, ...FONT_STYLES.body }}
                    >
                        Our robust network ensures reliable, long-term supply tailored to your market demands.
                    </p>
                </div>


                {/* Capability Grid/List (Smaller, tighter grid spacing) */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                >
                    {capabilities.map((item, index) => {
                        // State to handle individual card hover for shadow/lift effect
                        const [cardHover, setCardHover] = useState(false);
                        
                        return (
                            <div 
                                key={index} 
                                className="flex items-start space-x-3 p-3 rounded-lg transition duration-300"
                                onMouseEnter={() => setCardHover(true)}
                                onMouseLeave={() => setCardHover(false)}
                                style={{ 
                                    backgroundColor: 'white', 
                                    // Dynamic shadow: Deep Green normally, Darker on hover
                                    boxShadow: cardHover ? HoverShadow : DeepGreenShadow,
                                    border: `1px solid ${COLORS.Background}`,
                                    transform: cardHover ? 'translateY(-2px)' : 'translateY(0)', // Lift effect on hover
                                }}
                                data-aos="fade-up"
                                data-aos-delay={index * 150} 
                                data-aos-duration="600"
                            >
                                
                                {/* Icon/Accent Block */}
                                <div 
                                    className="flex-shrink-0 p-2 rounded-md"
                                    style={{ backgroundColor: item.accentColor }}
                                >
                                    <span className="text-xl leading-none">{item.icon}</span>
                                </div>

                                {/* Text Block */}
                                <div>
                                    <h3 
                                        className="text-base font-bold mb-0"
                                        style={{ color: COLORS.DarkForest, ...FONT_STYLES.heading }}
                                    >
                                        {index === 0 && 'Logistics & Ports'}
                                        {index === 1 && 'Volume Flexibility'}
                                        {index === 2 && 'Customization'}
                                        {index === 3 && 'Quality Assurance'}
                                    </h3>
                                    
                                    <p 
                                        className="text-sm"
                                        style={{ color: COLORS.TextGrey, ...FONT_STYLES.body }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call-to-Action */}
                <div 
                    className="text-center mt-12"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="700"
                >
                    <button
                        className="py-2.5 px-6 text-base font-bold rounded-full shadow-md transition duration-300 hover:scale-[1.05]"
                        style={ctaButtonStyle}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        Inquire About Long-Term Contracts
                    </button>
                </div>

            </div>
        </section>
    );
};

export default SupplyCapacity;