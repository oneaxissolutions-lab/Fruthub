import React, { useState } from 'react';

// --- CONSTANT COLOR VALUES (Strictly Adhering to Fruthub Style Guide) ---
const COLORS = {
    DeepGreen: '#0B6A32',     // WhatsApp Button Color / NEW Background
    BananaYellow: '#F4C430',  // Form Button Color
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

const FinalCTA = () => {
    const [isFormHovering, setIsFormHovering] = useState(false);
    const [isWhatsappHovering, setIsWhatsappHovering] = useState(false);

    // 1. UPDATED BACKGROUND STYLE TO SOLID DEEP GREEN
    const backgroundStyle = {
        backgroundColor: COLORS.DeepGreen,
    };

    // Style for the Form Button (Yellow/Dark Forest)
    const formButtonStyle = {
        backgroundColor: isFormHovering ? COLORS.CTAHover : COLORS.BananaYellow,
        color: COLORS.DarkForest,
        ...FONT_STYLES.heading,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    };
    
    // Style for the WhatsApp Button (Deep Green/White) - Note: Button color must be different from BG now. 
    // I will change the WhatsApp button to Trade Blue for contrast against the Deep Green background.
    const whatsappButtonStyle = {
        backgroundColor: isWhatsappHovering ? COLORS.TradeBlue : COLORS.TradeBlue, // Use TradeBlue for contrast
        color: 'white',
        ...FONT_STYLES.heading,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    };

    return (
        <section className="py-24 md:py-32" style={backgroundStyle}>
            <div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                data-aos="fade-up"
            >
                
                {/* Main Heading (Color kept white for contrast) */}
                <h2 
                    className="text-4xl md:text-5xl font-extrabold mb-6" 
                    style={{ color: 'white', ...FONT_STYLES.heading }}
                >
                    Planning your next shipment of bananas?
                </h2>

                {/* Description Text (Color kept white for contrast) */}
                <p 
                    className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
                    style={{ color: 'white', ...FONT_STYLES.body }}
                >
                    Tell us your port, monthly requirement & packaging preference — our team will respond with prices and shipping options.
                </p>

                {/* --- Buttons Container --- */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    
                    {/* 1. Enquire on WhatsApp Button (Now Trade Blue for contrast) */}
                    <button
                        className="py-3 px-8 text-lg font-bold rounded-full transition duration-300 hover:scale-[1.05] flex items-center justify-center"
                        style={whatsappButtonStyle}
                        onMouseEnter={() => setIsWhatsappHovering(true)}
                        onMouseLeave={() => setIsWhatsappHovering(false)}
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <span className="text-2xl mr-2">💬</span> 
                        Enquire on WhatsApp
                    </button>

                    {/* 2. Submit Enquiry Form Button (Banana Yellow) */}
                    <button
                        className="py-3 px-8 text-lg font-bold rounded-full transition duration-300 hover:scale-[1.05]"
                        style={formButtonStyle}
                        onMouseEnter={() => setIsFormHovering(true)}
                        onMouseLeave={() => setIsFormHovering(false)}
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        Submit Enquiry Form
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FinalCTA;