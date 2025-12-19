import React from 'react';
import { Ship, Globe, CheckCircle, ArrowRight, Anchor, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BananaExport = () => {
  const markets = [
    { name: "United Arab Emirates (UAE)", flag: "🇦🇪", port: "Jebel Ali / Abu Dhabi" },
    { name: "Iran", flag: "🇮🇷", port: "Chabahar / Bandar Abbas" },
    { name: "Middle East & Gulf", flag: "🌍", port: "All Major Ports" },
    { name: "Global Markets", flag: "📍", port: "On Request" }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Arrow - Slips in from left */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#0B6A32] font-bold py-2 px-4 rounded-lg border-2 border-[#0B6A32] hover:bg-[#0B6A32] hover:text-white transition-all duration-300 group shadow-md"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* SEO Title Section - Fade Up */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight uppercase tracking-tight">
            Banana Exports from India to <br/>
            <span className="text-[#0B6A32] drop-shadow-sm">UAE, Iran & Global Markets</span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-2 bg-[#0B6A32] mx-auto mt-6 rounded-full"
          ></motion.div>
          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            Fruthub Exports Pvt. Ltd. supplies premium Cavendish bananas to multiple international markets, 
            working closely with importers, wholesalers, and ripeners.
          </p>
        </motion.div>

        {/* Market Focus Cards - Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {markets.map((market, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl border-b-4 border-transparent hover:border-[#0B6A32] transition-colors shadow-sm hover:shadow-xl cursor-default"
            >
              <span className="text-5xl mb-4 block">{market.flag}</span>
              <h3 className="text-xl font-bold text-[#222222] mb-2">{market.name}</h3>
              <p className="text-sm text-[#0B6A32] font-medium flex items-center gap-2 uppercase tracking-wider">
                <Anchor size={14} /> {market.port}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Supply Capabilities & CTA - Slide in from Bottom */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-0 bg-[#0B6A32] rounded-[2rem] overflow-hidden text-white shadow-2xl"
        >
          <div className="p-8 md:p-16">
            <motion.h2 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="text-3xl font-bold mb-6 text-yellow-400 uppercase"
            >
                Reliable Indian Banana Supplier
            </motion.h2>
            <p className="text-green-50 text-lg mb-8 leading-relaxed">
              If you are an importer, ripener, or wholesale distributor looking for a reliable 
              banana supplier from India, we can customize packing and documentation 
              as per your country’s requirements.
            </p>
            
            <div className="space-y-4 mb-10">
              {['Customized Branding/Packing', 'Phytosanitary Certification', 'Cold Chain Management'].map((item, i) => (
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  key={i} 
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-yellow-400" size={24} />
                  <span className="font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 bg-white text-[#0B6A32] px-10 py-5 rounded-xl font-black text-lg hover:bg-yellow-400 hover:text-black transition-all group uppercase tracking-tighter shadow-lg"
                >
                  Share Your Country & Port Details
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="h-full min-h-[500px] bg-[url('https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80')] bg-cover bg-center relative"
          >
            <div className="absolute inset-0 bg-green-900/10 shadow-inner"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BananaExport;