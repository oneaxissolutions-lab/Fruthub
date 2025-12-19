import React, { useState } from 'react';
// Note: Tailwind classes for padding/margins are kept, but button styling is heavily customized via inline styles and embedded CSS.

// --- WavyText Component ---
// This component takes text and splits it into individual spans, applying a staggered wave animation.
const WavyText = ({ text, style }) => {
    // Splits the text into characters, including spaces, and wraps each in a span.
    const characters = text.split('').map((char, index) => (
        <span
            key={index}
            // Set a CSS variable --i for the staggered delay
            style={{ '--i': index, display: 'inline-block' }} 
        >
            {char === ' ' ? '\u00A0' : char} {/* Use non-breaking space for spaces */}
        </span>
    ));

    return (
        <h2 
            className="text-4xl md:text-5xl font-extrabold mb-6 wavy-text" 
            style={style}
        >
            {characters}
        </h2>
    );
};
// ----------------------------


const COLORS = {
    DeepGreen: '#0D753C',      // Section Background
    DarkForest: '#064422',     // Text Color (will be used for hover)
    BananaYellow: '#FFC83B',   // Primary Liquid/Glow Color
    TextWhite: '#FFFFFF',      // Default Text Color
    GlassWhite: 'rgba(255, 255, 255, 0.2)', // Semi-transparent button background
};

const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

// Define the name for the button class to target with CSS
const BUTTON_CLASS = 'liquid-cta-button';

const FinalCTA = () => {
    const [isFormHovering, setIsFormHovering] = useState(false);
    const [isWhatsappHovering, setIsWhatsappHovering] = useState(false);

    
    const backgroundStyle = {
        backgroundColor: COLORS.DeepGreen,
    };

    // --- Base styles for both buttons ---
    // These styles set up the button container for the liquid effect using relative positioning
    const baseButtonStyle = {
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden', // Crucial to contain the pseudo-element glow
        backgroundColor: COLORS.GlassWhite, 
        color: COLORS.TextWhite,
        border: `2px solid ${COLORS.GlassWhite}`,
        transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)', // Smooth transition for scaling/shadows
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        ...FONT_STYLES.heading,
    };

    // --- Dynamic Hover Styles (Managed by React State) ---
    const formButtonStyle = {
        ...baseButtonStyle,
        // When hovering, increase the button scale slightly
        transform: isFormHovering ? 'scale(1.05)' : 'scale(1)',
        // When hovering, change the text color to the dark forest color for contrast against the yellow glow
        color: isFormHovering ? COLORS.DarkForest : COLORS.TextWhite,
        backgroundColor: isFormHovering ? COLORS.BananaYellow : COLORS.GlassWhite,
    };
    
    const whatsappButtonStyle = {
        ...baseButtonStyle,
        transform: isWhatsappHovering ? 'scale(1.05)' : 'scale(1)',
        // When hovering, change the text color to the dark forest color for contrast against the yellow glow
        color: isWhatsappHovering ? COLORS.DarkForest : COLORS.TextWhite,
        backgroundColor: isWhatsappHovering ? COLORS.BananaYellow : COLORS.GlassWhite,
    };

    // The key CSS required for both the liquid and wavy effects, injected using a <style> tag
    const liquidAndWavyStyles = `
        /* --- CSS VARIABLES for easy color changes --- */
        :root {
            --liquid-color: ${COLORS.BananaYellow};
            --liquid-shadow-color: ${COLORS.BananaYellow};
            --text-color-hover: ${COLORS.DarkForest};
        }

        /* --------------------------------- */
        /* --- LIQUID BUTTON CSS (Original) --- */
        /* --------------------------------- */
        .${BUTTON_CLASS} {
            padding: 0.75rem 2rem; /* Matches py-3 px-8 */
            font-weight: 700; /* Matches font-bold */
            border-radius: 9999px; /* Matches rounded-full */
            text-align: center;
        }

        .${BUTTON_CLASS}::before {
            content: '';
            position: absolute;
            top: -150%;
            left: -150%;
            width: 400%;
            height: 400%;
            background: 
                radial-gradient(circle, var(--liquid-color) 0%, transparent 70%),
                radial-gradient(circle, var(--liquid-color) 0%, transparent 70%);
            background-size: 50% 50%;
            opacity: 0;
            z-index: -1;
            transition: opacity 0.5s ease-in-out;
            border-radius: 50%; 
        }

        .${BUTTON_CLASS}:hover::before {
            opacity: 0.8; 
            animation: liquidFlow 4s linear infinite;
        }

        @keyframes liquidFlow {
            0% { 
                transform: translate(0, 0) rotate(0deg); 
            }
            25% { 
                transform: translate(-10%, -10%) rotate(45deg); 
            }
            50% { 
                transform: translate(10%, 10%) rotate(90deg); 
            }
            75% { 
                transform: translate(-10%, 10%) rotate(135deg); 
            }
            100% { 
                transform: translate(0, 0) rotate(180deg); 
            }
        }

        .${BUTTON_CLASS}:hover {
            box-shadow: 0 0 20px var(--liquid-shadow-color), 0 0 40px var(--liquid-shadow-color);
        }
        
        /* --------------------------------- */
        /* --- NEW: WAVY TEXT ANIMATION --- */
        /* --------------------------------- */
        .wavy-text span {
            animation: wave 1.5s ease-in-out infinite; /* Animation name, duration, timing, repetition */
            /* Stagger the start time of the animation based on the index (--i) */
            animation-delay: calc(0.1s * var(--i)); 
        }

        @keyframes wave {
            0%, 100% { 
                transform: translateY(0); /* Start and end at normal position */
            }
            50% { 
                transform: translateY(-10px); /* Move 10px up at the midpoint */
            }
        }
    `;


    return (
        <section className="py-24 md:py-32" style={backgroundStyle}>
            {/* Inject the necessary CSS for both effects */}
            <style>{liquidAndWavyStyles}</style> 
            
            <div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                data-aos="fade-up"
            >
                {/* The WavyText component is used here */}
                <WavyText 
                    text="Planning your next shipment of bananas?" 
                    style={{ color: 'white', ...FONT_STYLES.heading }}
                />

                <p 
                    className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
                    style={{ color: 'white', ...FONT_STYLES.body }}
                >
                    Tell us your port, monthly requirement & packaging preference — our team will respond with prices and shipping options.
                </p>

                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    
                    {/* WhatsApp Button */}
                    <button
                        className={`py-3 px-8 text-lg font-bold rounded-full transition duration-300 ${BUTTON_CLASS} flex items-center justify-center`}
                        style={whatsappButtonStyle}
                        onMouseEnter={() => setIsWhatsappHovering(true)}
                        onMouseLeave={() => setIsWhatsappHovering(false)}
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <span className="text-2xl mr-2" style={{ color: isWhatsappHovering ? COLORS.DarkForest : COLORS.TextWhite }}>💬</span> 
                        Enquire on WhatsApp
                    </button>

                    
                    < a href='/WhatsappForm' className='inline-block'>
                    <button
                        className={`py-3 px-8 text-lg font-bold rounded-full transition duration-300 ${BUTTON_CLASS}`}
                        style={formButtonStyle}
                        onMouseEnter={() => setIsFormHovering(true)}
                        onMouseLeave={() => setIsFormHovering(false)}
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        Submit Enquiry Form
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;