import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a scroll effect to make the navbar look better on mobile when moving
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md h-16' : 'bg-white h-20'
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo - Dynamically sizes based on scroll and screen size */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              alt="Fruthub Logo" 
              className={`transition-all duration-300 object-contain ${
                scrolled ? 'h-8 md:h-12' : 'h-10 md:h-16'
              } w-auto max-w-[150px] md:max-w-none`} 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">About</a>
            <a href="/gallery" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Gallery</a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-yellow-600 transition shadow-lg active:scale-95">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button - Increased tap target size for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2.5 hover:bg-gray-100 rounded-full transition-colors active:bg-gray-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Enhanced for iOS/Android touch interaction */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[inherit] bg-white shadow-2xl transition-all duration-300 ease-in-out transform border-t border-gray-100 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ 
          top: scrolled ? '64px' : '80px',
          height: 'calc(100vh - 64px)' // Full screen height menu
        }}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          <a href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-800 border-b border-gray-50 pb-4 active:text-yellow-600">Home</a>
          <a href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-800 border-b border-gray-50 pb-4 active:text-yellow-600">About</a>
          <a href="/gallery" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-800 border-b border-gray-50 pb-4 active:text-yellow-600">Gallery</a>
          <a 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="w-full text-center bg-yellow-500 text-white py-4 rounded-xl text-xl font-bold shadow-md active:bg-yellow-600 mt-4"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;