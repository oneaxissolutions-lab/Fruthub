import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Agar file nahi mil rahi, toh yahan path check karein
import logo from './assets/logo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[100] bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 md:h-16 w-auto object-contain" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
            <a href="/gallery" className="text-gray-700 hover:text-yellow-600 font-medium">Gallery</a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-2.5 rounded-full font-bold">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-20 left-0 w-full shadow-xl border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <a href="/" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800">Home</a>
            <a href="/about" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800">About</a>
            <a href="/gallery" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-gray-800">Gallery</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-yellow-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;