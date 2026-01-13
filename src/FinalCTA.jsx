import React, { useState } from 'react';
import EnquiryForm from './EnquiryForm'; 

const COLORS = {
    DeepGreen: '#0D753C',
    DarkForest: '#064422',
    BananaYellow: '#FFC83B',
    TextWhite: '#FFFFFF',
    GlassWhite: 'rgba(255, 255, 255, 0.2)',
};

const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

const BUTTON_CLASS = 'liquid-cta-button';

const FinalCTA = () => {
    const [isFormHovering, setIsFormHovering] = useState(false);
    const [isWhatsappHovering, setIsWhatsappHovering] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Aapka WhatsApp Link
    const whatsappNumber = "919817008240"; // 91 is country code for India
    const whatsappMessage = encodeURIComponent("Hello, I am interested in a shipping quote. Please provide more details.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const baseButtonStyle = {
        position: 'relative', 
        zIndex: 10, 
        overflow: 'hidden',
        backgroundColor: COLORS.GlassWhite, 
        color: COLORS.TextWhite,
        border: `2px solid ${COLORS.GlassWhite}`,
        transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        ...FONT_STYLES.heading,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const whatsappButtonStyle = {
        ...baseButtonStyle,
        transform: isWhatsappHovering ? 'scale(1.05)' : 'scale(1)',
        color: isWhatsappHovering ? COLORS.DarkForest : COLORS.TextWhite,
        backgroundColor: isWhatsappHovering ? COLORS.BananaYellow : COLORS.GlassWhite,
    };

    const formButtonStyle = {
        ...baseButtonStyle,
        transform: isFormHovering ? 'scale(1.05)' : 'scale(1)',
        color: isFormHovering ? COLORS.DarkForest : COLORS.TextWhite,
        backgroundColor: isFormHovering ? COLORS.BananaYellow : COLORS.GlassWhite,
    };

    const liquidStyles = `
        .${BUTTON_CLASS}::before {
            content: ''; position: absolute; top: -150%; left: -150%; width: 400%; height: 400%;
            background: radial-gradient(circle, ${COLORS.BananaYellow} 0%, transparent 70%);
            opacity: 0; transition: opacity 0.5s; z-index: -1;
        }
        .${BUTTON_CLASS}:hover::before { opacity: 0.8; animation: liquidFlow 4s linear infinite; }
        @keyframes liquidFlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `;

    return (
        <section className="py-24 md:py-32" style={{ backgroundColor: COLORS.DeepGreen }}>
            <style>{liquidStyles}</style> 
            
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 
                    className="text-4xl md:text-5xl font-extrabold mb-6" 
                    style={{ color: 'white', ...FONT_STYLES.heading }}
                >
                    Planning your next shipment?
                </h2>

                <p className="text-lg md:text-xl mb-12 opacity-90" style={{ color: 'white', ...FONT_STYLES.body }}>
                    Tell us your port, monthly requirement & packaging preference — our team will respond with prices and shipping options.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {/* WhatsApp Button - Link Linked to Number */}
                    <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="no-underline"
                    >
                        <button
                            className={`py-3 px-8 text-lg font-bold rounded-full ${BUTTON_CLASS}`}
                            style={whatsappButtonStyle}
                            onMouseEnter={() => setIsWhatsappHovering(true)}
                            onMouseLeave={() => setIsWhatsappHovering(false)}
                        >
                            <span className="text-2xl mr-2">💬</span> Enquire on WhatsApp
                        </button>
                    </a>

                    {/* Submit Enquiry Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={`py-3 px-8 text-lg font-bold rounded-full ${BUTTON_CLASS}`}
                        style={formButtonStyle}
                        onMouseEnter={() => setIsFormHovering(true)}
                        onMouseLeave={() => setIsFormHovering(false)}
                    >
                        Submit Enquiry Form
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <EnquiryForm onClose={() => setIsModalOpen(false)} />
            )}
        </section>
    );
};

export default FinalCTA;