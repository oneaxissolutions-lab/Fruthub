import React from 'react';

const MarketsWeServe = () => {
  // Define the main markets we serve
  const primaryMarkets = ['UAE', 'Iran', 'Middle East'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-800 mb-4 tracking-tight">
          Markets We Serve
        </h2>
        
        {/* Subtitle/Description */}
        <p className="text-xl text-gray-600 mb-10">
          Trusted suppliers to importers and wholesalers in:
        </p>

        {/* Market Buttons Container */}
        <div className="flex flex-wrap justify-center gap-4">
          
          {/* Primary Market Buttons */}
          {primaryMarkets.map((market) => (
            <div
              key={market}
              className="bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out cursor-pointer text-lg"
            >
              {market}
            </div>
          ))}

          {/* Other Global Markets Button */}
          <div
            className="bg-green-900 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out cursor-pointer text-lg"
          >
            Other global markets on request
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsWeServe;