import React, { useEffect } from 'react';
import { Ship, Globe, CheckCircle, ArrowRight, Anchor, ArrowLeft, Leaf, Truck, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BananaExportPage = () => {
  const navigate = useNavigate();

  // 1. Hooks (Hamesha sabse upar)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Event Handlers
  const handleWhatsAppClick = () => {
    const phoneNumber = "919817008240";
    const message = "Hello Fruthub Exports! I would like to request a quotation for export markets (UAE/Iran/Global).";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // 3. Data/Configs
  const markets = [
    { name: "United Arab Emirates (UAE)", flag: "🇦🇪", port: "Jebel Ali / Abu Dhabi", produce: "Onions, Bananas, Grapes" },
    { name: "Iran", flag: "🇮🇷", port: "Chabahar / Bandar Abbas", produce: "Bananas, Pomegranates" },
    { name: "Middle East & Gulf", flag: "🌍", port: "All Major Ports", produce: "Mixed Vegetables & Fruits" },
    { name: "Global Markets", flag: "📍", port: "On Request", produce: "Custom Seasonal Supply" }
  ];

  const smoothScrollConfig = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.1 }
  };

  const slideDownVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', damping: 25, stiffness: 100 } 
    }
  };

  // 4. Return JSX
  return (
    <div className="min-h-screen bg-white pt-32 pb-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-10"
        >
          <button 
            onClick={() => navigate('/')} 
            className="inline-flex items-center gap-2 text-[#0B6A32] font-bold py-2 px-4 rounded-lg border-2 border-[#0B6A32] hover:bg-[#0B6A32] hover:text-white transition-all shadow-md"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </motion.div>

        {/* Title Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideDownVariants}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#222222] uppercase">
            Indian Fruits & Vegetables Export to <br/>
            <span className="text-[#0B6A32]">UAE, Iran & Global Markets</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600">
            Fruthub Exports Pvt. Ltd. is a leading name in the global supply of premium Indian produce.
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {markets.map((market, index) => (
            <motion.div 
              key={index}
              {...smoothScrollConfig}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <span className="text-5xl mb-4 block">{market.flag}</span>
              <h3 className="text-xl font-bold mb-2">{market.name}</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{market.port}</p>
              <p className="mt-2 text-sm text-gray-600 italic">{market.produce}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card with WhatsApp Redirect */}
        <motion.div 
          {...smoothScrollConfig}
          variants={itemVariants}
          className="grid lg:grid-cols-2 bg-[#0B6A32] rounded-[3rem] overflow-hidden text-white shadow-2xl"
        >
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
               Reliable Multi-Produce <br/> Supplier from India
            </h2>
            <button 
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-white text-[#0B6A32] px-8 py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all shadow-lg w-fit"
            >
              Request Quotation by Port
              <ArrowRight size={24} />
            </button>
          </div>
          <div className="h-full min-h-[400px] bg-[url('https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </motion.div>
      </div>
    </div>
  );
};

export default BananaExportPage;