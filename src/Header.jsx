import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // left-0 aur right-0 dono dene se width fix ho jati hai
    <nav className="fixed top-0 left-0 right-0 w-full z-[100] bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - iski width ko mobile par restrict kiya hai */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Fruthub Logo" 
              className="h-10 md:h-16 w-auto object-contain max-w-[180px] md:max-w-none" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">About</a>
            <a href="/gallery" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Gallery</a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-yellow-600 transition shadow-sm">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button - alignment fixed */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - isme w-full aur left-0 ensure kiya hai */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-20 left-0 w-full shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-6 space-y-4">
            <a href="/" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800 border-b pb-2">Home</a>
            <a href="/about" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800 border-b pb-2">About</a>
            <a href="/gallery" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800 border-b pb-2">Gallery</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-yellow-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;