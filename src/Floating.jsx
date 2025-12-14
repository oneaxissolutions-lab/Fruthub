import React from 'react';

// You need to replace these two variables with your own information
const WHATSAPP_NUMBER = '1234567890'; // Replace with your full WhatsApp number (including country code, no +, no spaces)
const DEFAULT_MESSAGE = 'Hello! I saw your website and would like to chat.';

const Floating = () => {
  // Construct the WhatsApp URL for click-to-chat
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      // Tailwind CSS classes for floating position, styling, and animation
      className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-110 active:scale-95 cursor-pointer"
    >
      {/* WhatsApp Icon (using a simple SVG for convenience) */}
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.81 2.05 7.13 5.14 8.91l-.99 2.58 2.65-.89c1.69.46 3.48.71 5.2.71 5.52 0 10-4.48 10-10C22 6.48 17.52 2 12 2zm3.62 14.19c-.19.33-.87.42-1.22.25-.4-.19-1.22-.5-1.44-.6-.2-.09-.43-.17-.6-.23-.07-.02-.15-.05-.23-.09-.38-.17-1.16-.48-1.52-.64-.37-.16-.62-.24-.87-.24-.25 0-.49 0-.74.25-.25.25-.66.44-.82.6-.16.16-.32.35-.48.54-.16.19-.34.33-.48.47-.14.14-.3.26-.44.38-.14.12-.31.25-.49.38-.34.25-.76.44-1.12.55-.37.11-.7.15-1.04.15-.36 0-.71-.05-1.05-.14-.34-.09-.64-.23-.92-.42-.28-.19-.53-.43-.75-.68-.22-.25-.4-.54-.53-.84-.13-.3-.2-.61-.25-.92-.05-.31-.07-.63-.07-.94 0-.67.24-1.29.67-1.78l.49-.57c.18-.2.38-.42.58-.63.2-.21.4-.41.57-.6.18-.19.34-.35.48-.48.14-.14.28-.27.4-.38.12-.11.23-.21.34-.32.1-.1.21-.21.31-.32.22-.22.46-.46.72-.73.26-.27.52-.55.8-.82.28-.27.56-.54.85-.78.29-.24.58-.46.88-.66.19-.13.38-.27.57-.42.19-.15.38-.3.56-.46.18-.16.36-.31.54-.46.36-.3.74-.53 1.14-.7.4-.17.81-.25 1.21-.25.5 0 .96.11 1.39.34.43.23.79.54 1.09.92.3.38.52.82.65 1.32.13.5.18 1.03.18 1.57 0 .54-.05 1.06-.18 1.57-.13.5-.35.94-.65 1.32-.3.38-.66.69-1.09.92-.43.23-.89.34-1.39.34z"/>
      </svg>
    </a>
  );
};

export default Floating;