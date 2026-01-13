import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import FrutsHub_logo from './assets/fruthub.png';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Markets', href: '/banana-export' },
    { name: 'Fruits & Vegetables', href: '/fruit' }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        /* FIX: Removed 'w-[92%]' and 'left-1/2'.
           NEW: 'left-[4%] right-[4%]' forces the container to be 
           responsive without exceeding the viewport.
        */
        <header 
            className={`fixed top-3 left-[4%] right-[4%] max-w-7xl mx-auto bg-white shadow-xl rounded-xl z-[1000] border-[3px] border-[#0b6A32] overflow-hidden box-border`}
        >
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={closeMenu}>
                            <img 
                                src={FrutsHub_logo} 
                                alt="FrutsHub Logo" 
                                className='w-28 sm:w-32 md:w-36 object-contain' 
                            />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-bold uppercase tracking-wider">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.href} className="text-[#222222] hover:text-[#0B6A32] px-3 py-1 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="p-1 text-[#222222]">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`lg:hidden transition-all duration-300 bg-[#0B6A32] ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
                <div className="px-4 py-3 space-y-1">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="block text-center text-white font-bold py-3" onClick={closeMenu}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;