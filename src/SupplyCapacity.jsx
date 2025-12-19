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
            ([entry]) => setIsSectionVisible(entry.isIntersecting),
            { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const timelineStyles = `
        @keyframes revealUp {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes reverseFadeOut {
            0% { opacity: 1; transform: translateY(0); } 
            100% { opacity: 0; transform: translateY(5px); }
        }
        @keyframes growHeight {
            0% { height: 0%; }
            100% { height: 100%; }
        }
        .animate-card-reveal {
            animation: revealUp 0.3s ease-out both; 
        }
        .animate-reverse-fade {
            animation: reverseFadeOut 0.2s ease-in both;
        }
        .animate-line-grow {
            animation: growHeight 0.2s linear both; 
        }
    `;

    const getAnimationProps = (index) => {
        const stepInterval = 150; // Very fast cascade
        const totalPreviousDelay = index * stepInterval;
        
        const lineStartDelay = `${totalPreviousDelay}ms`; 
        const cardStartDelay = `${totalPreviousDelay + 100}ms`; 
        const reverseDelay = `${(qualityProcessSteps.length - 1 - index) * 50}ms`;
        
        if (isSectionVisible) {
            return {
                line: { className: 'animate-line-grow', style: { animationDelay: lineStartDelay } },
                card: { className: 'animate-card-reveal', style: { animationDelay: cardStartDelay } }
            };
        }
        return { 
            line: { className: 'h-0' }, 
            card: { className: 'animate-reverse-fade', style: { animationDelay: reverseDelay } } 
        }; 
    };

    const TimelineItem = ({ item, index, isLast }) => {
        const { line: animLine, card: animCard } = getAnimationProps(index);
        return (
            <div className="flex relative items-stretch mb-6 last:mb-0">
                <div className="flex flex-col items-center mr-6">
                    <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-20 bg-green-700 border-2 border-white ${animCard.className}`}
                        style={animCard.style} 
                    >
                        {item.id}
                    </div>
                    {!isLast && (
                        <div className="relative w-1 bg-gray-200 h-full">
                            <div 
                                className={`absolute top-0 w-full bg-green-700 ${animLine.className}`}
                                style={animLine.style}
                            />
                        </div>
                    )}
                </div>
                <div 
                    className={`flex-grow bg-white p-5 rounded-lg shadow-md text-gray-700 ${animCard.className}`}
                    style={animCard.style} 
                >
                    <h2 className="text-lg font-bold mb-1 text-gray-800">{item.title}</h2>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#f8faf9] py-12" ref={sectionRef}>
            <style>{timelineStyles}</style>
            <div className="container mx-auto max-w-lg px-4">
                <h1 className={`text-3xl font-black text-center mb-12 text-[#388e3c] ${isSectionVisible ? 'animate-card-reveal' : 'animate-reverse-fade'}`}>
                    Quality Timeline
                </h1>
                <div className="relative">
                    {qualityProcessSteps.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} isLast={item.isLast} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplyCapacity;