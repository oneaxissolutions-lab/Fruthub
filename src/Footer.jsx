import React from 'react';

// --- GLOBAL STYLE GUIDE CONSTANTS (Needed for color and font consistency) ---
const COLORS = {
    DeepGreen: '#0B6A32',     
    BananaYellow: '#F4C430',  
    TradeBlue: '#0A4D8C',     
    DarkForest: '#064422',   // Footer Background Color
    TextGrey: '#222222',     
    Background: '#FAF8F0',   
    CTAHover: '#E47900',     
};
const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

const quickLinks = ['Home', 'About Us', 'Products', 'Quality & Process', 'Markets We Serve'];
const resources = ['FAQs', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'];
const connect = ['LinkedIn', 'Facebook', 'Instagram', 'WhatsApp'];

const Footer = () => {
    
    const footerStyle = {
        backgroundColor: COLORS.DarkForest,
        color: 'white',
        ...FONT_STYLES.body,
    };
    
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.2s',
        // Optional: Adding a hover for the brand color effect seen in the image's links
        // In a real app, this would use Tailwind or external CSS for :hover
    };

    return (
        <footer className="py-12 md:py-20" style={footerStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Content Grid (4 Columns) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-10">
                    
                    {/* Column 1: Fruthub Exports Pvt. Ltd. (Contact Info) */}
                    <div>
                        <h3 className="text-xl font-bold mb-4" style={FONT_STYLES.heading}>
                            Fruthub Exports Pvt. Ltd.
                        </h3>
                        <p className="text-sm mb-2">Premium Indian Cavendish Banana Exporters</p>
                        
                        <div className="text-sm mt-4 space-y-2">
                            <p className="flex items-start">
                                <span className="mr-2 text-lg">📍</span> 
                                [Your Office Address – City, State, India]
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2 text-lg">✉️</span> 
                                export@fruthubexports.com
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2 text-lg">📞</span> 
                                +91-XXXXXXXXXXXX
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2 text-lg">⏱️</span> 
                                Mon-Sat: 10:00 AM - 7:00 PM IST
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white" style={FONT_STYLES.heading}>
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} style={linkStyle}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white" style={FONT_STYLES.heading}>
                            Resources
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {resources.map((link, index) => (
                                <li key={index}>
                                    <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} style={linkStyle}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect With Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white" style={FONT_STYLES.heading}>
                            Connect With Us
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {connect.map((link, index) => (
                                <li key={index}>
                                    <a href={`#${link.toLowerCase()}`} style={linkStyle}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright Line */}
                <div 
                    className="border-t pt-6 mt-6 text-center text-sm" 
                    style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                    &copy; 2025 Fruthub Exports Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;