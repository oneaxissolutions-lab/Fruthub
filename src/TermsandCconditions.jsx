import React, { useState, useEffect, useRef } from 'react';


const useScrollFade = () => {
 
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    
    if (!('IntersectionObserver' in window)) {
        setIsVisible(true); 
        return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
       
        setIsVisible(entry.isIntersecting);
      });
    }, {
      
      rootMargin: '-150px 0px -150px 0px', 
      threshold: 0 
    });

    if (domRef.current) {
      
      observer.observe(domRef.current);
    }

    
    return () => {
      if (domRef.current && observer) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return [isVisible, domRef];
};


const ScrollFadeIn = ({ children }) => {
    const [isVisible, domRef] = useScrollFade(); 

    return (
        <div 
            ref={domRef}
            
            className={`
                transition-all duration-700 ease-in-out transform
                ${isVisible 
                    ? 'opacity-100 scale-100 shadow-xl' 
                    : 'opacity-20 scale-95 shadow-none'
                }
            `}
        >
            {children}
        </div>
    );
};




const TermsAndConditions = () => {
  return (
   
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-24"> 
      <div className={`max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 sm:p-10 transition-all duration-700 ease-out`}>

        
        <header className="mb-8 border-b-4 border-teal-500 pb-4">
          <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
            <span className="mr-3 text-teal-500 transition-transform duration-500 hover:scale-110">📑</span>
            Terms & Conditions
          </h1>
        </header>

       
        <ScrollFadeIn>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">💰 Pricing & Payment</h2>
            <div className="space-y-4 text-gray-700">
              
              <p className="group p-3 bg-teal-50 rounded-lg border-l-4 border-teal-400 transition-all duration-300 transform hover:border-l-8 hover:bg-teal-100 hover:shadow-md">
                <strong className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-teal-700">Pricing Validity:</strong> All quoted pricing is valid for a period of <strong className="transition-all duration-300 group-hover:text-red-600">7 days</strong> from the date of issuance.
              </p>
              <p className="group p-3 bg-teal-50 rounded-lg border-l-4 border-teal-400 transition-all duration-300 transform hover:border-l-8 hover:bg-teal-100 hover:shadow-md">
                <strong className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-teal-700">Payment Terms:</strong> Payment must be made as <strong className="transition-all duration-300 group-hover:text-red-600">Advance / LC</strong> (Letter of Credit), as mutually agreed upon in the sales contract.
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        
        <ScrollFadeIn>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">📦 Shipping & Risk</h2>
            <div className="space-y-4 text-gray-700">
            
              <p className="group p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 transition-all duration-300 transform hover:border-l-8 hover:bg-yellow-100 hover:shadow-md">
                <strong className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-yellow-700">Transit Risk:</strong> Once the shipping container is sealed and officially handed over to the designated shipping line, the <strong className="transition-all duration-300 group-hover:text-red-600">transit risk shifts entirely to the Buyer</strong>.
              </p>
              <p className="group p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 transition-all duration-300 transform hover:border-l-8 hover:bg-yellow-100 hover:shadow-md">
                <strong className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-yellow-700">Documentation:</strong> All necessary export documents will be compiled and shared with the Buyer <strong className="transition-all duration-300 group-hover:text-red-600">before the vessel's scheduled departure</strong>.
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        
        <ScrollFadeIn>
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">✅ Quality Assurance</h2>
            <div className="space-y-4 text-gray-700">
              
              <p className="group p-3 bg-red-50 rounded-lg border-l-4 border-red-400 transition-all duration-300 transform hover:border-l-8 hover:bg-red-100 hover:shadow-md">
                <strong className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-700">Quality Concerns:</strong> Any concerns regarding the quality of the goods must be formally raised within <strong className="transition-all duration-300 group-hover:text-red-600">24 hours of the container opening</strong>.
              </p>
              <p className="group p-3 bg-red-50 rounded-lg border-l-4 border-red-400 transition-all duration-300 transform hover:border-l-8 hover:bg-red-100 hover:shadow-md">
                <strong className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-700">Proof:</strong> The claim must be substantiated with clear and verifiable <strong className="transition-all duration-300 group-hover:text-red-600">photos and/or videos</strong> of the alleged defects or issues.
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        
        <hr className="my-10 border-t-2 border-gray-200" />
        
        <ScrollFadeIn>
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
              <span className="mr-3 text-amber-500 transition-transform duration-500 hover:rotate-12">⭐</span>
              Privacy Policy
            </h1>
          </header>

          <section className="text-gray-700 space-y-6">
            <p>
              <strong className="text-gray-900">Frutshub Exports Private Limited</strong> is committed to protecting the privacy of its clients and partners.
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4">
              <li className="text-lg transition-transform duration-300 hover:translate-x-1">
                <strong className="font-semibold text-gray-900">Data Collection:</strong> We collect only the essential details required for effective communication and the generation of accurate quotations.
              </li>
              <li className="text-lg transition-transform duration-300 hover:translate-x-1">
                <strong className="font-semibold text-gray-900">Data Sharing:</strong> We uphold a strict policy: We <strong className="text-red-500">do not sell, trade, or share</strong> your personal or business information with any third parties.
              </li>
            </ul>
            <p className="text-lg font-semibold pt-4">
              For concerns, contact: <a href="mailto:ananya@frutshubexports.com" className="text-teal-600 hover:text-teal-800 underline transition-colors duration-300">ananya@frutshubexports.com</a>
            </p>
          </section>
        </ScrollFadeIn>

      </div>
    </div>
  );
};

export default TermsAndConditions; 