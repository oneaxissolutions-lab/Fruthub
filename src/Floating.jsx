import React from 'react';
import logo from './assets/logo.png';

// Configuration
const WHATSAPP_NUMBER ='9817008240'; // Replace with your full WhatsApp number (including country code, no +, no spaces)
const DEFAULT_MESSAGE = 'Hello! I saw your website and would like to chat.';

const Floating = () => {
  // Construct the WhatsApp URL for click-to-chat properly
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // Tailwind CSS classes for floating position, styling, and animation
      className="fixed bottom-6 right-6 z-50 p-0 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer"
    >
      {/* WhatsApp Icon using the imported logo.png */}
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <img 
          src={logo} 
          alt="WhatsApp Chat" 
          className="w-12 h-12 object-contain"
        />
      </div>
    </a>
  );
};

export default Floating;