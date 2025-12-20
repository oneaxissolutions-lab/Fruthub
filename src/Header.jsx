import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Path check kar lena

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md">
      {/* Container - max-width aur px-4-6 zaroori hai side overflow rokne ke liye */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              alt="Fruthub Logo" 
              className="h-12 md:h-16 w-auto object-contain" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
            <a href="/gallery" className="text-gray-700 hover:text-yellow-600 font-medium">Gallery</a>
            <a href="/contact" className="bg-yellow-500 text-white px-5 py-2 rounded-full font-bold hover:bg-yellow-600 transition">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="/" className="block px-3 py-3 text-gray-700 font-semibold border-b border-gray-50">Home</a>
            <a href="/about" className="block px-3 py-3 text-gray-700 font-semibold border-b border-gray-50">About</a>
            <a href="/gallery" className="block px-3 py-3 text-gray-700 font-semibold border-b border-gray-50">Gallery</a>
            <a href="/contact" className="block px-3 py-3 text-yellow-600 font-bold">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;