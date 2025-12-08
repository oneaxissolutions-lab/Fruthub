import React from 'react';
// 1. IMPORT THE IMAGE HERE
import backgroundImage from './background.jpg'; 

// --- CONSTANT COLOR VALUES (Matching site theme) ---
const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',
    TextGrey: '#222222',
    Background: '#FAF8F0',
    CTAHover: '#E47900',
    Overlay: 'rgba(6, 68, 34, 0.75)', 
    // NEW SHADOW COLOR (Light, subtle grey/white for "click" effect)
    LightShadow: 'rgba(255, 255, 255, 0.4)',
};

// --- Inline Style for Custom Fonts ---
const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

// --- Data for the Six Differentiator Cards ---
const differentiators = [
    { 
        icon: '👨‍👩‍👧‍👦', 
        title: 'Legacy & Expertise', 
        detail: 'Backed by 100+ years in the banana trade, ensuring deep industry knowledge.',
        color: COLORS.BananaYellow
    },
    { 
        icon: '🔬', 
        title: 'Strict Quality Control', 
        detail: 'Rigorous checks applied from grading at the farm level to final container packing.',
        color: COLORS.BananaYellow
    },
    { 
        icon: '🔄', 
        title: 'Consistent Supply', 
        detail: 'Reliable and continuous sourcing capability for long-term supply contracts.',
        color: COLORS.BananaYellow
    },
    { 
        icon: '📑', 
        title: 'Export-Ready Documentation', 
        detail: 'We handle all necessary paperwork (invoice, CO, phytosanitary etc.) efficiently.',
        color: COLORS.BananaYellow
    },
    { 
        icon: '📱', 
        title: 'Transparent Communication', 
        detail: 'Proactive communication with container updates and accurate Estimated Time of Arrival (ETA).',
        color: COLORS.BananaYellow
    },
    { 
        icon: '🏷️', 
        title: 'Customized Packing', 
        detail: 'Flexible options available for private label branding and custom packaging specifications.',
        color: COLORS.BananaYellow
    },
];

const WhyChooseUs = () => {
    const sectionStyle = {
        backgroundImage: `linear-gradient(${COLORS.Overlay}, ${COLORS.Overlay}), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '600px',
    };

    // Define the custom light shadow effect
    const customCardShadow = `0 10px 15px -3px ${COLORS.LightShadow}, 0 4px 6px -2px ${COLORS.LightShadow}`;

    return (
        <section className="py-20" style={sectionStyle}> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Heading */}
                <h2 
                    className="text-5xl font-extrabold text-center mb-16" 
                    style={{ color: 'white', ...FONT_STYLES.heading, textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
                >
                    Why Choose Us
                </h2>

                {/* Grid for the Six Cards (3 columns on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <div 
                            key={index}
                            // Removed shadow-2xl class and added custom inline style
                            className="p-8 rounded-xl transform transition duration-300 hover:scale-[1.03]"
                            style={{ 
                                backgroundColor: COLORS.Background, 
                                borderTop: `4px solid ${item.color}`,
                                boxShadow: customCardShadow, // APPLY CUSTOM LIGHT SHADOW HERE
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
                            
                            {/* Accent Line/Stripe */}
                            <div 
                                className="mt-4 h-1 w-1/4 rounded-full" 
                                style={{ backgroundColor: COLORS.BananaYellow }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Optional: Add a call to action below the cards */}
                <div className="text-center mt-16">
                    <button 
                        className="py-3 px-8 text-lg font-bold rounded-full transition duration-300"
                        style={{ 
                            backgroundColor: COLORS.BananaYellow, 
                            color: COLORS.DarkForest, 
                            ...FONT_STYLES.heading,
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        Request a Quote Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;