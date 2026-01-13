import React from 'react';
import { Link } from 'react-router-dom';

const COLORS = {
    DeepGreen: '#0B6A32',
    BananaYellow: '#F4C430',
    TradeBlue: '#0A4D8C',
    DarkForest: '#0D753C',
    TextGrey: '#222222',
    Background: '#FAF8F0',
    CTAHover: '#E47900',
};

const FONT_STYLES = {
    heading: { fontFamily: 'Montserrat, sans-serif' },
    body: { fontFamily: 'Lato, sans-serif' },
};

const combinedLinks = [
    { name: 'Home', path: '/Home' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Markets', path: '/banana-export' },
    { name: 'Fruits & Vegetables', path: '/fruit' },
];

const connect = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'WhatsApp', url: 'https://wa.me/919817008240' }
];

const Footer = () => {
    const footerStyle = {
        backgroundColor: COLORS.DarkForest,
        color: 'white',
        ...FONT_STYLES.body,
    };

    return (
        <footer className="py-12 md:py-20" style={footerStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 pb-10 border-b border-white/20">

                    {/* Company Info - Clickable Contacts */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4" style={FONT_STYLES.heading}>
                            FRUTSHUB EXPORTS PRIVATE LIMITED
                        </h3>
                        <p className="text-sm mb-4 opacity-80">Premium Indian Cavendish Banana Exporters</p>

                        <div className="text-sm space-y-3">
                            {/* Address - Clickable to Google Maps (Optional) */}
                            <div className="flex items-start">
                                <span className="mr-3 mt-1">📍</span>
                                <span>
                                    Shop No. 28, New Sabzi Mandi,<br />
                                    Nearby Old Faridabad, Sector 16,<br />
                                    Faridabad, Haryana - 121002
                                </span>
                            </div>
                            
                            {/* Clickable Phone Number 1 */}
                            <a href="tel:+919817008240" className="flex items-center hover:text-yellow-400 transition-colors">
                                <span className="mr-3">📞</span>
                                +91-9817008240
                            </a>

                            {/* Clickable Phone Number 2 */}
                            <a href="tel:+919911067899" className="flex items-center hover:text-yellow-400 transition-colors">
                                <span className="mr-3">📞</span>
                                +91-9911067899
                            </a>

                            {/* Clickable Email */}
                            <a href="mailto:info@frutshubexports.com" className="flex items-center hover:text-yellow-400 transition-colors">
                                <span className="mr-3">✉️</span>
                                info@frutshubexports.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1"> 
                        <h3 className="text-lg font-semibold mb-6 text-white" style={FONT_STYLES.heading}>
                            Quick Links
                        </h3>
                        <div className="flex flex-col space-y-3"> 
                            {combinedLinks.map((link, index) => (
                                <Link 
                                    key={index}
                                    to={link.path} 
                                    className="text-sm text-white/80 hover:text-yellow-400 transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Connect */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white" style={FONT_STYLES.heading}>
                            Connect With Us
                        </h3>
                        <div className="flex flex-col space-y-3">
                            {connect.map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/80 hover:text-yellow-400 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center text-xs opacity-60">
                    &copy; 2026 FRUTSHUB EXPORTS PRIVATE LIMITED. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;