import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, ShieldCheck, ArrowLeft, Leaf, Award, Zap } from 'lucide-react';

const AboutPage = () => {
  
  // Viewport config: once: false triggers animations every time you scroll up or down
  const scrollConfig = { once: false, amount: 0.2 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 15 } 
    }
  };

  const wordContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const wordItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const WordSlide = ({ text, className }) => (
    <motion.span
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={scrollConfig}
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
      
      {/* 1. BACK TO HOME BUTTON (Positioned below a standard navbar height) */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-4"> {/* pt-32 ensures it starts below a ~80px navbar */}
        <motion.a
          href="/" 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={scrollConfig}
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-3 text-yellow-800 font-bold group"
        >
          <div className="p-2 bg-yellow-100 rounded-full group-hover:bg-yellow-400 transition-colors shadow-sm">
            <ArrowLeft size={20} />
          </div>
          <span className="tracking-wide uppercase text-sm">Back to Home</span>
        </motion.a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50/50 to-white pt-12 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto"> 
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-700 mb-6 tracking-tight">
            <WordSlide text="About Frutshub Exports Pvt. Ltd." />
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={scrollConfig}
            transition={{ delay: 0.5 }}
            className="h-1 w-24 bg-yellow-400 mx-auto mb-6"
          />
          <p className="text-xl text-gray-500 italic">"A Century of Heritage, A Future of Global Supply"</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollConfig}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Leaf className="text-green-600" /> Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Fruthub Exports Pvt. Ltd. is an Indian export company focused on supplying fresh 
              <span className="font-bold text-yellow-700 underline decoration-yellow-300 underline-offset-4 ml-1">
                Fruits and vegetables
              </span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={scrollConfig}
            className="bg-yellow-100 p-12 rounded-[3rem] border-2 border-dashed border-yellow-300 flex items-center justify-center order-1 md:order-2"
          >
            <span className="text-yellow-900 font-bold text-2xl text-center">
              100+ Years of Traditional Wholesale Expertise
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
          viewport={scrollConfig}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-yellow-500">
            <Globe className="mb-6 text-yellow-600 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">To connect global markets with reliable, quality-driven banana supplies.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-green-600">
            <ShieldCheck className="mb-6 text-green-600 w-10 h-10" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">To be recognized as India’s most reliable and professional banana exporter.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values with Flip Animation */}
      <section className="bg-yellow-800 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest text-yellow-200">Our Core Values</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={scrollConfig}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {["Reliability", "Integrity", "Consistency", "Partnership"].map((val, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group cursor-default">
                <motion.div 
                  whileInView={{ rotateY: [0, 180, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  viewport={scrollConfig}
                  className="bg-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-black shadow-xl group-hover:bg-yellow-500 transition-colors"
                >
                  {val[0]}
                </motion.div>
                <div className="font-bold text-xl">{val}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;