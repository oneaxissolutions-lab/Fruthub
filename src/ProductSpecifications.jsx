import React, { useState } from 'react';

// --- CONSTANT COLOR VALUES (Strictly Adhering to Fruthub Style Guide) ---
const COLORS = {
    DeepGreen: '#0B6A32',     // Used for Accent and Heading Color
    BananaYellow: '#F4C430',  // Base Button Color
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422',   // Button Text Color
    TextGrey: '#222222',     
    Background: '#FAF8F0',   
    CTAHover: '#E47900',     // Button Hover Color
};

// --- Inline Style for Custom Fonts ---
const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

// --- CSS Keyframes for CTA Pulse Animation ---
// Note: This block must be placed outside the component if using a styled-components approach, 
// but for a single file/inline style demonstration, we'll define the style element.
const pulseKeyframes = `
    @keyframes cta-pulse {
        0% { box-shadow: 0 0 0 0 ${COLORS.BananaYellow}; }
        70% { box-shadow: 0 0 0 10px rgba(244, 196, 48, 0); }
        100% { box-shadow: 0 0 0 0 rgba(244, 196, 48, 0); }
    }
`;

// --- CSS for Initial Pop-In Animation (for the text container) ---
const fadeInSlideUp = {
    animation: 'fadeInUp 1s ease-out forwards',
    opacity: 0,
    transform: 'translateY(20px)',
};

const fadeInKeyframes = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

const ProductSpecifications = () => {
    const [isHovering, setIsHovering] = useState(false);

    const backgroundStyle = {
        backgroundColor: COLORS.Background, 
    };

    const ctaButtonStyle = {
        backgroundColor: COLORS.BananaYellow,
        color: COLORS.DarkForest, 
        ...FONT_STYLES.body,
        ...(isHovering && { backgroundColor: COLORS.CTAHover }),
        
        // APPLY PULSE ANIMATION TO CTA BUTTON
        animation: 'cta-pulse 2s infinite',
        // Ensure standard hover shadow is also present
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };
    
    return (
        <section className="py-24 md:py-32" style={backgroundStyle}>
            
            {/* Inject keyframes into the DOM using a style tag */}
            <style>
                {pulseKeyframes}
                {fadeInKeyframes}
            </style>

            <div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                // Apply the initial text pop-in animation wrapper
                style={fadeInSlideUp}
            >
                
                {/* Section Heading */}
                <h2 
                    className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide" 
                    style={{ color: COLORS.DeepGreen, ...FONT_STYLES.heading }} 
                >
                    Export-Grade Cavendish Bananas
                </h2>

                {/* Description Text */}
                <p 
                    className="text-lg md:text-xl mb-12 leading-relaxed" 
                    style={{ color: COLORS.TextGrey, ...FONT_STYLES.body }}
                >
                    We specialize in fresh green Cavendish bananas, suitable for long-distance sea shipments. 
                    Bananas are graded by size and hand count as per buyer specifications, with careful 
                    packing in ventilated cartons to maintain quality till arrival.
                </p>

                {/* Call-to-Action Button */}
                <button
                    className="py-4 px-10 font-semibold rounded-full shadow-xl transition duration-300"
                    style={ctaButtonStyle}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    View Product Specifications
                </button>
                
                {/* Accent Line */}
                <div 
                    className="h-1 mx-auto mt-12 w-16 rounded-full" 
                    style={{ backgroundColor: COLORS.DeepGreen }}
                ></div>

            </div>
        </section>
    );
};

export default ProductSpecifications;