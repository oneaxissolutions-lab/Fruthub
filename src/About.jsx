import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, ShieldCheck, ArrowLeft } from 'lucide-react';

const AboutPage = () => {
  
  const wordContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const wordItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 15, stiffness: 100 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 20 } 
    }
  };

  const WordSlide = ({ text, className }) => (
    <motion.span
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordItem} className="mr-2">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden relative">
      
      
      <nav className="absolute top-30 left-6 z-50">
        <motion.a
          href="/" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-yellow-800 font-semibold hover:text-yellow-600 transition-colors group"
        >
          <div className="p-2 bg-yellow-100 rounded-full group-hover:bg-yellow-200 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span>Back to Home</span>
        </motion.a>
      </nav>

    
      <section className="relative bg-yellow-50  top-32 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto pt-8"> 
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-4 tracking-tight">
            <WordSlide text="About Fruthub Exports Pvt. Ltd." />
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 italic"
          >
            "A Century of Heritage, A Future of Global Supply"
          </motion.p>
        </div>
      </section>

      
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
              <WordSlide text="Who We Are" />
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Fruthub Exports Pvt. Ltd. is an Indian export company focused on supplying fresh 
              <span className="font-semibold text-yellow-700"> Cavendish bananas</span>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our roots go deep into the traditional banana trade in India for over a century.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-yellow-100 h-64 rounded-3xl flex items-center justify-center order-1 md:order-2"
          >
             <span className="text-yellow-800 font-bold text-lg text-center px-8">
               <WordSlide text="100+ Years of Traditional Wholesale Expertise" />
             </span>
          </motion.div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-20 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-yellow-500">
            <Globe className="mb-4 text-yellow-600 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">To connect global markets with reliable, quality-driven banana supplies.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-2xl shadow-sm border-b-4 border-green-600">
            <ShieldCheck className="mb-4 text-green-600 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">To be recognized as India’s most reliable and professional banana exporter.</p>
          </motion.div>
        </motion.div>
      </section>

      
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <WordSlide text="What We Do" />
        </h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[
            "Work directly with trusted growers.",
            "Select farms and lots suitable for export.",
            "Coordinate harvesting and packing.",
            "Manage pre-cooling and port logistics.",
            "Provide complete documentation."
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ x: 10, backgroundColor: "#fefce8" }}
              className="flex items-center p-5 bg-white border border-gray-100 shadow-sm rounded-xl"
            >
              <CheckCircle className="text-green-500 mr-4 flex-shrink-0" />
              <p className="font-medium text-gray-700">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      
      <section className="bg-yellow-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">
            <WordSlide text="Our Core Values" />
          </h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { title: "Reliability", desc: "Commitment kept." },
              { title: "Integrity", desc: "Honest flow." },
              { title: "Consistency", desc: "Standard quality." },
              { title: "Partnership", desc: "Long-term focus." }
            ].map((val, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-yellow-600/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/30 text-2xl font-bold"
                >
                  {val.title[0]}
                </motion.div>
                <div className="font-bold text-xl mb-1">{val.title}</div>
                <p className="text-yellow-100 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;