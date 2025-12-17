import React, { useState, useEffect, useRef } from 'react';


const qualityProcessSteps = [
    { id: 1, title: "Farm Selection", description: "Only high-quality farms are chosen, adhering to strict agricultural practices." },
    { id: 2, title: "Harvesting", description: "Done at the ideal 75–80% maturity level to maximize flavor and shelf life." },
    { id: 3, title: "Washing & Grading", description: "Produce is thoroughly washed and accurately sorted by size, caliber, and hand count." },
    { id: 4, title: "Protective Packing", description: "Items are protected using professional materials, including foam, net, liner, and ventilated cartons." },
    { id: 5, title: "Cold Chain Management", description: "The produce undergoes pre-cooling and benefits from continuous temperature monitoring to preserve freshness." },
    { id: 6, title: "Documentation", description: "All necessary export certificates and regulatory paperwork are prepared professionally and meticulously." },
    { id: 7, title: "Reefer Loading", description: "The final stage involves a final Quality Control (QC) check before loading into a sealed, temperature-locked container.", isLast: true },
];

const SupplyCapacity = () => {
    
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const sectionRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSectionVisible(entry.isIntersecting);
            },
            { 
                root: null, 
                rootMargin: '0px 0px -100px 0px', 
                threshold: 0.1 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                
                observer.unobserve(entry.target);
            }
        };
    }, []); 


    const darkGreen = "text-[#388e3c]";
    const processColor = "bg-green-700";
    
    
    const timelineStyles = `
        /* 1. Forward Reveal (1 -> 7) */
        @keyframes revealUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        /* 2. Reverse Fade Out (7 -> 1) */
        @keyframes reverseFadeOut {
            /* Ensures it starts from the final visible state */
            0% { opacity: 1; transform: translateY(0px); } 
            100% { opacity: 0; transform: translateY(20px); }
        }

        @keyframes growHeight {
            0% { height: 0%; }
            100% { height: 100%; }
        }

        .animate-card-reveal {
            animation-name: revealUp;
            animation-duration: 0.6s; 
            animation-timing-function: ease-out;
            animation-fill-mode: both; 
            opacity: 0; /* Initial hidden state for forward animation */
        }
        
        /* Class for Reverse Animation */
        .animate-reverse-fade {
            animation-name: reverseFadeOut;
            animation-duration: 0.4s; 
            animation-timing-function: ease-in;
            animation-fill-mode: both; /* Ensures it stays at opacity: 0 after reversing */
        }

        .animate-line-grow {
            animation-name: growHeight;
            animation-duration: 0.7s; 
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); 
            animation-fill-mode: both; 
        }
    `;
    

    const getAnimationProps = (index) => {
        
        const baseDelay = 500; 
        const stepDuration = 1300; 
        const totalPreviousDelay = baseDelay + (index * stepDuration);
        
        const lineStartDelay = `${totalPreviousDelay}ms`; 
        const cardStartDelay = `${totalPreviousDelay + 600}ms`; 
        
    
        const totalSteps = qualityProcessSteps.length; 
        const reverseIndex = totalSteps - 1 - index; 
        const reverseDelay = `${reverseIndex * 150}ms`;
        
        if (isSectionVisible) {
            
            return {
                line: {
                    className: 'animate-line-grow',
                    style: { animationDelay: lineStartDelay },
                },
                card: {
                    className: 'animate-card-reveal',
                    style: { 
                        animationDelay: cardStartDelay,
                        
                        transition: 'none' 
                    },
                }
            };
        }
        
        
        return { 
            line: {className: 'h-0'}, 
            card: {

                className: 'animate-reverse-fade',
                style: { 
                    
                    animationDelay: reverseDelay, 
                   
                    transition: 'none', 
                } 
            } 
        }; 
    };

    
    const TimelineItem = ({ item, index, isLast }) => {
        const { line: animLine, card: animCard } = getAnimationProps(index);

       
        let cardClass = `
            flex-grow bg-white p-6 rounded-lg shadow-lg text-gray-700
            hover:shadow-xl hover:shadow-green-500/50 
            ${animCard.className} 
        `;

        // Default hover transition तभी लगाएं जब कोई animation न चल रहा हो
        if (!isSectionVisible && animCard.className !== 'animate-reverse-fade') {
             cardClass += ' transition duration-300 ease-in-out';
        }

        return (
            <div className="flex relative items-stretch mb-8 last:mb-0">
                
                {/* 1. Timeline Left Column (The Line and Dot) */}
                <div className="flex flex-col items-center mr-6">
                    {/* Step Dot */}
                    <div 
                        className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20 
                            ${processColor} border-4 border-white transform transition-all duration-500 ease-out 
                            ${animCard.className} 
                        `}
                        style={{ ...animCard.style, animationDuration: '0.2s' }} 
                    >
                        {item.id}
                    </div>

                    
                    {!isLast && (
                        <div className="relative w-1.5 h-full bg-gray-300">
                            <div 
                                className={`absolute top-0 w-full ${processColor} ${animLine.className}`}
                                style={animLine.style}
                            />
                        </div>
                    )}
                </div>

               
                <div 
                    className={cardClass}
                    style={animCard.style} 
                >
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">
                        {item.title}
                    </h2>
                    <p className="text-base">
                        {item.description}
                    </p>
                </div>
            </div>
        );
    };

   
    return (
        <div 
            className="min-h-screen bg-[#f0f7f4] font-poppins pt-8"
            ref={sectionRef} 
        >
            
           
            <style>{timelineStyles}</style>

            <div className={`container mx-auto max-w-xl px-4 mt-12`}>
                
                
                <h1 
                    className={`
                        text-4xl sm:text-5xl font-extrabold text-center mb-16 ${darkGreen} 
                        ${isSectionVisible ? 'animate-card-reveal' : 'animate-reverse-fade'}
                    `}
                    style={isSectionVisible ? { animationDelay: '0ms' } : {}}
                >
                    Product Quality & <span className={`${darkGreen} font-extrabold`}>Timeline</span>
                </h1>
                
            
                <div className="relative">
                    {qualityProcessSteps.map((item, index) => (
                        <TimelineItem 
                            key={item.id} 
                            item={item} 
                            index={index}
                            isLast={item.isLast}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplyCapacity;