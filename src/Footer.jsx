import React from 'react';

// --- GLOBAL STYLE GUIDE CONSTANTS (Needed for color and font consistency) ---
const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#064422', // Footer Background Color
    TextGrey: '#222222',
    Background: '#FAF8F0',
    CTAHover: '#E47900',
};
const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

// Consolidated list of all links as per the new structure
const combinedLinks = [
    'Home', 
    'About', 
    'Products', 
    'Quality', 
    'Markets', 
    'FAQs', 
    'Contact', 
    'Terms & Privacy' // Grouped for simplicity
];

// The 'Connect' links are kept separate for the social media column
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
        // In a real app, you would use Tailwind classes like 'hover:text-yellow-400'
    };

    return (
        <footer className="py-12 md:py-20" style={footerStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Content Grid (4 Columns, adjusted for content layout) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-10">

                    {/* Column 1: Frutshub Exports Private Limited (Contact Info) */}
                    <div>
                        <h3 className="text-xl font-bold mb-4" style={FONT_STYLES.heading}>
                            Frutshub Exports Private Limited
                        </h3>
                        <p className="text-sm mb-2">Premium Indian Cavendish Banana Exporters</p>

                        <div className="text-sm mt-4 space-y-2">
                            {/* Address */}
                            <p className="flex items-start">
                                <span className="mr-2 text-lg" role="img" aria-label="Location">📍</span>
                                107,3rd-A, Nehru Nagar, Ghaziabad, Uttar Pradesh
                            </p>
                            {/* Phone Numbers */}
                            <p className="flex items-center">
                                <span className="mr-2 text-lg" role="img" aria-label="Phone">📞</span>
                                +91-9588773783, 9817008240, 9911067899
                            </p>
                            {/* Email */}
                            <p className="flex items-center">
                                <span className="mr-2 text-lg" role="img" aria-label="Email">✉️</span>
                                ananya@fruthubexports.com
                            </p>
                            {/* Working Hours */}
                            <p className="flex items-center">
                                <span className="mr-2 text-lg" role="img" aria-label="Clock">🕒</span>
                                Mon – Sat: 10:00 AM – 7:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (All combined) */}
                    <div className="md:col-span-2"> {/* Span 2 columns on medium screens up */}
                        <h3 className="text-lg font-semibold mb-4 text-white" style={FONT_STYLES.heading}>
                            Quick Links
                        </h3>
                        {/* Display links in a single line, separated by ' | ' on larger screens, stacked on small screens */}
                        <div className="text-sm flex flex-wrap gap-x-3 gap-y-1"> 
                            {combinedLinks.map((link, index) => (
                                <React.Fragment key={index}>
                                    <a 
                                        href={`#${link.toLowerCase().replace(/\s/g, '-')}`} 
                                        style={linkStyle} 
                                        className="whitespace-nowrap hover:text-yellow-400"
                                    >
                                        {link}
                                    </a>
                                    {/* Add separator if it's not the last link */}
                                    {index < combinedLinks.length - 1 && (
                                        <span className="hidden sm:inline">|</span> 
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Column 4 (was 4, now 3): Connect With Us (Social Media) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white" style={FONT_STYLES.heading}>
                            Connect With Us
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {connect.map((link, index) => (
                                <li key={index}>
                                    {/* Tailwind hover utility used directly for better practice */}
                                    <a 
                                        href={`#${link.toLowerCase()}`} 
                                        style={linkStyle}
                                        className="hover:text-yellow-400"
                                    >
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
                    &copy; 2025 Frutshub Exports Private Limited. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;