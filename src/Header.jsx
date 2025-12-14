import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

import FrutsHub_logo from './assets/FrutsHub_logo.png';


const navigation = [
    
    { name: 'Home', href: '#home' },                   
    { name: 'About', href: '#about-us' },             
    { name: 'Products', href: '#products' },          
    { name: 'Quality & Process', href: '#quality-process' }, 
    { name: 'Packaging', href: '#packaging' },           
    { name: 'Markets', href: '#markets' },             
    { name: 'FAQs', href: '#faqs' },                   
];


const COLOR_DEEP_GREEN = 'bg-[WHITE]';       
const COLOR_DARK_FOREST = 'text-[#064422]';   
const COLOR_BANANA_YELLOW = 'bg-[#F4C430]';   
const COLOR_CTA_HOVER = 'hover:bg-[#E47900]'; 
const COLOR_CTA_ACTIVE = 'active:bg-[#E47900]'; 
const COLOR_TRADE_BLUE = 'text-[#222222]';    
const MOBILE_MENU_BG = 'bg-[#0B6A32]'; 

const HOVER_GREEN = '#0B6A32'; 
const DEFAULT_TEXT_COLOR = 'text-[#222222]'; 


const CTA_CLASSES = `${COLOR_BANANA_YELLOW} ${COLOR_CTA_HOVER} ${COLOR_CTA_ACTIVE} ${COLOR_DARK_FOREST} 
                      font-montserrat font-bold py-2 px-4 rounded-full shadow-md 
                      transition duration-300 transform hover:scale-105 active:scale-[0.98] whitespace-nowrap`;


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
                      
                      // *** ADDED GREEN BORDER HERE ***
                      border-2 border-[${HOVER_GREEN}]
                      
                    `} 
        >
            <div className="px-4 sm:px-6 lg:px-8">
                
                
                <div className="flex items-center justify-between h-16">
                    
                    
                    <div className="flex-shrink-0">
                        <a 
                            href="#home" 
                            className={`transition duration-300 transform hover:scale-[1.03]`}
                            onClick={closeMenu} 
                        >
                            <img src={FrutsHub_logo} alt="Company Logo" className='w-40' />
                        </a>
                    </div>

            
                    <div className="hidden md:flex items-center space-x-8">
                        
                        <nav className="flex space-x-4 text-sm font-lato font-medium">
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

                        
                        <a
                            href="#contact" 
                            className={`${CTA_CLASSES} text-sm`}
                        >
                            GET A QUOTE
                        </a>
                    </div>

                    
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

            
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'
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
                    
                    
                    <a
                        href="#contact" 
                        className={`block w-full text-center ${CTA_CLASSES} mt-4`}
                        onClick={closeMenu} 
                    >
                        GET A QUOTE
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;