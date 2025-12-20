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
    <div className="bg-white text-gray-800 overflow-x-hidden relative min-h-screen">
      
      {/* Back to Home Button - Ab top-24 par hai (Aur neeche) */}
      <nav className="absolute top-24 left-6 z-50">
        <motion.a
          href="/" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 text-yellow-800 font-semibold hover:text-yellow-600 transition-colors group"
        >
          <div className="p-2.5 bg-yellow-100 rounded-full group-hover:bg-yellow-200 transition-colors shadow-md border border-yellow-200">
            <ArrowLeft size={22} />
          </div>
          <span className="bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
            Back to Home
          </span>
        </motion.a>
      </nav>

      {/* Hero Section - Spacing adjusted for the lower button */}
      <section className="relative bg-yellow-50 pt-56 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto"> 
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-700 mb-6 tracking-tight">
            <WordSlide text="About Fruthub Exports Pvt. Ltd." />
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 italic"
          >
            "A Century of Heritage, A Future of Global Supply"
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="bg-yellow-100 h-72 rounded-[2rem] flex items-center justify-center order-1 md:order-2 shadow-inner border border-yellow-200"
          >
             <span className="text-yellow-900 font-bold text-xl text-center px-10 leading-snug">
               <WordSlide text="100+ Years of Traditional Wholesale Expertise" />
             </span>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-24 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemVariants} className="bg-white p-12 rounded-3xl shadow-sm border-b-4 border-yellow-500">
            <Globe className="mb-6 text-yellow-600 w-12 h-12" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg">To connect global markets with reliable, quality-driven banana supplies.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-12 rounded-3xl shadow-sm border-b-4 border-green-600">
            <ShieldCheck className="mb-6 text-green-600 w-12 h-12" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">To be recognized as India’s most reliable and professional banana exporter.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          <WordSlide text="What We Do" />
        </h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
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
              whileHover={{ x: 12, backgroundColor: "#fefce8" }}
              className="flex items-center p-6 bg-white border border-gray-100 shadow-sm rounded-2xl"
            >
              <CheckCircle className="text-green-500 mr-5 flex-shrink-0" size={24} />
              <p className="font-semibold text-gray-700 text-lg">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-yellow-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-20">
            <WordSlide text="Our Core Values" />
          </h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { title: "Reliability", desc: "Commitment kept." },
              { title: "Integrity", desc: "Honest flow." },
              { title: "Consistency", desc: "Standard quality." },
              { title: "Partnership", desc: "Long-term focus." }
            ].map((val, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="bg-yellow-600/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-yellow-400/30 text-3xl font-black shadow-lg"
                >
                  {val.title[0]}
                </motion.div>
                <div className="font-bold text-2xl mb-2">{val.title}</div>
                <p className="text-yellow-100/80 text-base">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;