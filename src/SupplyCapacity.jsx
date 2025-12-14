import React from 'react';


const qualityProcessSteps = [
    {
        id: 1,
        title: "Farm Selection",
        description: "Only high-quality farms are chosen, adhering to strict agricultural practices.",
        barColor: "bg-green-700",
        isFirst: true,
    },
    {
        id: 2,
        title: "Harvesting",
        description: "Done at the ideal 75–80% maturity level to maximize flavor and shelf life.",
        barColor: "bg-green-700",
        isFirst: false,
    },
    {
        id: 3,
        title: "Washing & Grading",
        description: "Produce is thoroughly washed and accurately sorted by size, caliber, and hand count.",
        barColor: "bg-green-700", 
        isFirst: false,
    },
    {
        id: 4,
        title: "Protective Packing",
        description: "Items are protected using professional materials, including foam, net, liner, and ventilated cartons.",
        barColor: "bg-green-700",
        isFirst: false,
    },
    {
        id: 5,
        title: "Cold Chain Management",
        description: "The produce undergoes pre-cooling and benefits from continuous temperature monitoring to preserve freshness.",
        barColor: "bg-green-700", 
        isFirst: false,
    },
    {
        id: 6,
        title: "Documentation",
        description: "All necessary export certificates and regulatory paperwork are prepared professionally and meticulously.",
        barColor: "bg-green-700", 
        isFirst: false,
    },
    {
        id: 7,
        title: "Reefer Loading",
        description: "The final stage involves a final Quality Control (QC) check before loading into a sealed, temperature-locked container.",
        barColor: "bg-green-700",
        isFirst: false,
    },
];

const SupplyCapacity = () => {
  
    const darkGreen = "text-[#388e3c]";
    const headerGradient = "bg-gradient-to-r from-[#004d40] via-[#388e3c] to-[#cddc39]";
    const processColor = "bg-green-700";
    
    return (
        <div className="min-h-screen bg-[#f0f7f4] font-poppins pt-8">
          
            <div className={`w-full h-8 absolute top-0 left-0 ${headerGradient}`}></div>

            <div className="container mx-auto max-w-4xl px-4 mt-12">
                
                
                <h1 
                    className={`text-4xl sm:text-5xl font-extrabold text-center mb-16 ${darkGreen}`}
                    data-aos="fade-up" 
                    data-aos-duration="800"
                >
                    Product Quality & <span className={`${darkGreen} font-extrabold`}>Process</span>
                </h1>
                

                
                <div className="flex flex-col space-y-8">
                    {qualityProcessSteps.map((item, index) => (
                        <div
                            key={item.id}
                            className={`
                                relative bg-white p-6 sm:p-8 rounded-lg shadow-lg text-gray-700 leading-relaxed
                                
                                transition-all duration-300 ease-in-out
                                ${!item.isFirst ? 'mt-8' : 'shadow-md'}
                                
                                hover:-translate-y-1 
                                hover:shadow-xl hover:shadow-green-500/50 
                                
                            `}
                            style={{ background: item.isFirst ? 'linear-gradient(to bottom, #f7fff7, #ffffff)' : 'white' }}
                            
                            data-aos="zoom-in-up" 
                            data-aos-delay={index * 150}
                            data-aos-duration="600"
                        >
                            
                            
                            <div
                                className={`
                                    absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full
                                    ${processColor} text-white font-bold text-xl shadow-lg
                                    ${item.isFirst ? 'animate-bounce' : ''} 
                                `}
                            >
                                {item.id}
                            </div>

                            <h2 className="text-xl font-semibold mb-2 text-gray-800">
                                {item.title}
                            </h2>
                            <p className="text-lg">
                                {item.description}
                            </p>
                            
                           
                            <div
                                className={`
                                    absolute top-0 left-0 w-1.5 rounded-l-lg ${item.barColor}
                                    ${item.isFirst ? 'h-full animate-pulse' : 'h-[calc(100%+2rem)] -top-8'}
                                `}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplyCapacity;