import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import FrutsHub_logo from './assets/fruthub.png';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Markets', href: '/banana-export' },
];

const COLOR_WHITE = 'bg-white';
const MOBILE_MENU_BG = 'bg-[#0B6A32]';
const DEFAULT_TEXT_COLOR = 'text-[#222222]';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`fixed top-3 inset-x-0 mx-auto w-[92%] sm:w-[95%] max-w-7xl ${COLOR_WHITE} shadow-xl rounded-xl z-[1000] border-[3px] border-[#0b6A32] overflow-hidden`}>
            <div className="px-4 sm:px-6 lg:px-8">
                {/* Height reduced: h-14 for mobile, h-16 for desktop */}
                <div className="flex items-center justify-between h-14 sm:h-16">
                    
                    {/* Logo Section - Scaled down for height efficiency */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="transition duration-300 block" onClick={closeMenu}>
                            <img 
                                src={FrutsHub_logo} 
                                alt="FrutsHub Logo" 
                                className='w-28 sm:w-32 md:w-36 object-contain' 
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6 text-[13px] font-bold uppercase tracking-wider">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`${DEFAULT_TEXT_COLOR} hover:text-[#0B6A32] px-3 py-1 transition-colors whitespace-nowrap`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button - Scaled down */}
                    <div className="lg:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="p-1 text-[#222222] hover:text-[#0B6A32] focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer - Compacted padding */}
            <div 
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                } ${MOBILE_MENU_BG}`}
            >
                <div className="px-4 py-3 space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="block w-full text-center text-white font-bold text-base hover:bg-black/10 py-3 rounded-lg transition-all"
                            onClick={closeMenu} 
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;