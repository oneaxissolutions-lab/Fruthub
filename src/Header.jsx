import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import FrutsHub_logo from './assets/fruthub.png';

const navigation = [
    { name: 'Home', href: '/' },               
    { name: 'About', href: '/about' }, 
    { name: 'Products', href: '/products' }, 
    { name: 'Markets', href: '/banana-export' }, // Linked to the Banana Export Page
];

const COLOR_WHITE = 'bg-white';      
const MOBILE_MENU_BG = 'bg-[#0B6A32]'; 
const DEFAULT_TEXT_COLOR = 'text-[#222222]'; 
const BRAND_GREEN = '#0B6A32';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl ${COLOR_WHITE} shadow-2xl rounded-xl z-[1000] overflow-hidden border-4 border-[#0b6A32]`}>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="transition duration-300 transform hover:scale-[1.03] block" onClick={closeMenu}>
                            <img src={FrutsHub_logo} alt="FrutsHub Logo" className='w-40' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <nav className="flex space-x-8 text-sm font-bold uppercase tracking-wide">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`${DEFAULT_TEXT_COLOR} hover:text-[#0B6A32] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#0B6A32] px-1 py-2 transition duration-200 transform hover:-translate-y-[1px] whitespace-nowrap`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="p-2 text-[#222222] hover:text-[#0B6A32] transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div 
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0'
                } ${MOBILE_MENU_BG}`}
            >
                <div className="px-4 space-y-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="block w-full text-center text-white font-semibold text-lg hover:bg-white/10 py-3 rounded-lg transition"
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