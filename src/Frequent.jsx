import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; 

// --- FAQ Data Structure ---
const faqs = [
  {
    id: 1,
    question: "What is the Minimum Order Quantity (MOQ)?",
    answer: "For domestic or trial orders, the MOQ is 1 ton. For international shipments, a Full Container Load (FCL) is strongly recommended.",
    category: "Ordering & Minimum Requirements"
  },
  {
    id: 2,
    question: "What are your payment terms?",
    answer: "Payment terms are agreed upon based on the order, typically Advance payment or Letter of Credit (LC).",
    category: "Ordering & Minimum Requirements"
  },
  {
    id: 3,
    question: "How fast can you ship after order confirmation?",
    answer: "Shipment can typically be arranged within 5–7 days, depending on the current harvest schedule and container availability.",
    category: "Ordering & Minimum Requirements"
  },
  {
    id: 7,
    question: "What is the shelf life of your product?",
    answer: "The standard shelf life is 25–35 days when stored under optimal conditions of 13°C to 14°C.",
    category: "Product & Packaging"
  },
  {
    id: 8,
    question: "What hand counts are available?",
    answer: "We offer a selection of hand counts: 4 / 5 / 6 / 7 hands.",
    category: "Product & Packaging"
  },
  {
    id: 9,
    question: "Do you offer private label packaging?",
    answer: "Yes. We can create custom-printed cartons tailored to your brand for recurring buyers.",
    category: "Product & Packaging"
  },
  {
    id: 4,
    question: "Which ports do you ship from?",
    answer: "We ship primarily from the following major ports in India: JNPT (Mumbai), Mundra, and Chennai.",
    category: "Logistics & Shipping"
  },
  {
    id: 5,
    question: "What is the typical transit time for shipments?",
    answer: "Transit times vary: UAE (7–10 days), Iran (10–14 days). Other Middle East destinations vary by specific port and shipping line.",
    category: "Logistics & Shipping"
  },
  {
    id: 6,
    question: "Do you send physical samples?",
    answer: "International physical samples are generally not standard due to logistics. We share detailed packhouse photos and videos instead.",
    category: "Logistics & Shipping"
  },
  {
    id: 10,
    question: "What documents do you provide with the shipment?",
    answer: "Every international shipment includes: Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, and Fumigation Certificate.",
    category: "Documentation"
  },
];

// Helper function to group the FAQs by their category
const groupFAQsByCategory = (faqs) => {
  return faqs.reduce((acc, faq) => {
    (acc[faq.category] = acc[faq.category] || []).push(faq);
    return acc;
  }, {});
};

const Frequent= () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const groupedFAQs = groupFAQsByCategory(faqs);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
      {/* --- Header Section --- */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
          🍌 Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about ordering, logistics, and product specifications.
        </p>
      </div>

      {/* --- Accordion Content --- */}
      <div className="mt-12 space-y-8">
        {Object.entries(groupedFAQs).map(([category, items]) => (
          <div key={category} className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{category}</h2>
            
            <div className="space-y-4">
              {items.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  // --- STYLED ACCORDION CARD with Green Shadow ---
                  <div 
                    key={faq.id} 
                    className="border border-gray-200 rounded-lg bg-white 
                      shadow-md hover:shadow-lg transition duration-300
                      hover:shadow-green-300/50" 
                  >
                    
                    {/* The Accordion Button/Header (The Question) */}
                    <button
                      className="flex justify-between items-center w-full p-5 text-left font-medium text-gray-700 hover:bg-gray-50 transition duration-150 ease-in-out"
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="text-lg">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUpIcon className="w-5 h-5 text-indigo-600 transition-transform duration-300" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                      )}
                    </button>
                    
                    {/* The Accordion Answer/Content Panel */}
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 p-0'
                      }`}
                    >
                      <p className="text-base text-gray-500 border-t border-gray-100 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Removed the Contact / Next Step Section here, as requested */}

    </div>
  );
};

export default Frequent;