import React, { useState, useEffect } from 'react';

const Get = () => {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Agar koi bhi 'main-btn' screen par hai, toh true set karein
        const isAnyBtnVisible = entries.some((entry) => entry.isIntersecting);
        setShouldHide(isAnyBtnVisible);
      },
      { 
        threshold: 0.1, // Jab button 10% bhi dikhega toh yeh trigger hoga
        rootMargin: "0px 0px -50px 0px" // Thoda buffer space
      }
    );

    // Website ke saare buttons ko select karein jinme 'main-btn' class hai
    const allButtons = document.querySelectorAll('.main-btn');
    allButtons.forEach((btn) => observer.observe(btn));

    return () => {
      allButtons.forEach((btn) => observer.unobserve(btn));
    };
  }, []);

  return (
    <a
      href="#quote-section"
      style={{
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: shouldHide ? 0 : 1,
        visibility: shouldHide ? 'hidden' : 'visible',
        transform: shouldHide ? 'translateY(20px) scale(0.8)' : 'translateY(0) scale(1)',
        pointerEvents: shouldHide ? 'none' : 'auto',
      }}
      className="fixed bottom-28 right-4 md:right-6 z-50 flex items-center gap-2 px-6 py-3 bg-[#f3c63d] text-[#01411c] rounded-full shadow-2xl no-underline group"
    >
      <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
      <span className="font-bold text-sm md:text-base whitespace-nowrap">
        Get Export Price Quote
      </span>
    </a>
  );
};

export default Get;