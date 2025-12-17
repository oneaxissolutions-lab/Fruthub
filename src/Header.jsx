import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

import FrutsHub_logo from './assets/fruthub.png'; 

const navigation = [
    { name: 'Home', href: '#home' },               
    { name: 'About', href: '#about-us' },           
    { name: 'Products', href: '#products' },          
    { name: 'Markets', href: '#markets' },           
];

const COLOR_DEEP_GREEN = 'bg-[WHITE]';      
const COLOR_DARK_FOREST = 'text-[#064422]';  
const MOBILE_MENU_BG = 'bg-[#0B6A32]'; 

const HOVER_GREEN = '#0B6A32'; 
const DEFAULT_TEXT_COLOR = 'text-[#222222]'; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header  
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl 
                     ${COLOR_DEEP_GREEN} shadow-2xl rounded-xl z-[1000] overflow-hidden 
                     will-change-transform border-4 border-[#0b6A32]
                    `} 
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <a 
                            href="#home" 
                            className={`transition duration-300 transform hover:scale-[1.03]`}
                            onClick={closeMenu} 
                        >
                            <img src={FrutsHub_logo} alt="Company Logo" className='w-40' />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <nav className="flex space-x-8 text-sm font-lato font-medium">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`${DEFAULT_TEXT_COLOR} 
                                             hover:text-[${HOVER_GREEN}] 
                                             hover:underline 
                                             hover:underline-offset-4 
                                             hover:decoration-[${HOVER_GREEN}]
                                             hover:decoration-2
                                             px-1 py-2 rounded-md 
                                             transition duration-200 transform hover:-translate-y-[2px] whitespace-nowrap`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md text-[#222222] hover:text-[#0B6A32] 
                                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0B6A32] transition duration-200`}
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-64 opacity-100 py-2' : 'max-h-0 opacity-0'
                } ${MOBILE_MENU_BG} border-t border-gray-600`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`block w-full text-center text-base font-lato font-medium text-white hover:bg-[#00000033] py-2 rounded-md transition duration-200 
                                            transform active:scale-[0.98] hover:scale-[1.01]`}
                            onClick={closeMenu} 
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;