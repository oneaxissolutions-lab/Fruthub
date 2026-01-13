import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryIcon from './assets/Gallery.png'; // Gallery icon image import

const Get = () => {
  const [shouldHide, setShouldHide] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyBtnVisible = entries.some((entry) => entry.isIntersecting);
        setShouldHide(isAnyBtnVisible);
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    const allButtons = document.querySelectorAll('.main-btn');
    allButtons.forEach((btn) => observer.observe(btn));

    return () => {
      allButtons.forEach((btn) => observer.unobserve(btn));
    };
  }, []);

  const handleRedirect = () => {
    navigate('/gallery');
    window.scrollTo(0, 0); 
  };

  return (
    <button
      onClick={handleRedirect}
      style={{
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: shouldHide ? 0 : 1,
        visibility: shouldHide ? 'hidden' : 'visible',
        transform: shouldHide ? 'translateY(20px) scale(0.8)' : 'translateY(0) scale(1)',
        pointerEvents: shouldHide ? 'none' : 'auto',
        // Saari background aur border styling yahan se remove kar di gayi hai
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: 0,
        cursor: 'pointer'
      }}
      className="fixed bottom-28 right-4 md:right-6 z-50 group"
    >
      {/* Sirf Image dikhegi */}
      <img 
        src={GalleryIcon} 
        alt="Gallery Icon" 
        className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform group-hover:scale-110 active:scale-90" 
      />
    </button>
  );
};

export default Get;