import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { ArrowLeft, Package, Truck, Award, CheckCircle2 } from 'lucide-react';
import source from './assets/source.jpeg';

const Product = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Cavendish Banana Exporters – Fruthub Exports Pvt. Ltd.";
    }, []);

    const scrollConfig = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -70 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 70 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    const scaleUp = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    const specs = [
        { label: "Variety", value: "Cavendish" },
        { label: "Color at Packing", value: "Mature Green" },
        { label: "Finger Length", value: "18–22 cm" },
        { label: "Hand Count", value: "4 / 5 / 6 hands" },
        { label: "Net Weight", value: "13 kg / 18 kg / 20 kg" },
        { label: "Packing", value: "Export-grade Corrugated" },
        { label: "Temperature", value: "13°C – 14°C" },
    ];

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen overflow-hidden">
            
            {/* Back Button & Title */}
            <motion.div {...scrollConfig} variants={slideInLeft} className="mb-12">
                <button 
                    onClick={() => navigate('/')}
                    className="group flex items-center text-[#0B6A32] font-bold mb-6 hover:opacity-80 transition-all"
                >
                    <ArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform" />
                    Back to Home
                </button>
                <h1 className="text-5xl md:text-6xl font-black text-[#064422] tracking-tight">
                    Cavendish <span className="text-[#0B6A32]">Bananas</span>
                </h1>
            </motion.div>

            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div {...scrollConfig} variants={slideInLeft} className="space-y-8">
                    <p className="text-2xl text-gray-600 font-light leading-relaxed">
                        We specialize in premium <span className="font-semibold text-[#222222]">export-ready bananas</span>, meticulously handled to ensure peak freshness from farm to port.
                    </p>
                    <div className="space-y-4 text-[#0B6A32] font-bold">
                        <div className="flex items-center gap-3"><CheckCircle2 size={24} /> Global GAP Certified</div>
                        <div className="flex items-center gap-3"><CheckCircle2 size={24} /> 100% Temperature Controlled</div>
                        <div className="flex items-center gap-3"><CheckCircle2 size={24} /> Optimized Shelf Life</div>
                    </div>
                </motion.div>

                
                <motion.div {...scrollConfig} variants={slideInRight} className="relative">
                    <div className="aspect-[4/3] md:aspect-video bg-gray-200 rounded-[40px] shadow-2xl overflow-hidden border-8 border-white group relative">
                        <img 
                            src={source}
                            alt="Premium Cavendish Bananas Export Quality" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Subtle Overlay to make it feel premium */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </motion.div>
            </div>

            {/* Technical Specifications Table */}
            <motion.section {...scrollConfig} variants={scaleUp} className="mb-24">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100">
                    <h2 className="text-3xl font-bold text-[#064422] mb-10 text-center">
                        Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specs.map((spec, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#0B6A32] transition-colors">
                                <p className="text-xs uppercase text-gray-400 mb-1 font-bold tracking-wider">{spec.label}</p>
                                <p className="text-lg font-bold text-[#222222]">{spec.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                <motion.div 
                    {...scrollConfig} 
                    variants={slideInLeft}
                    className="p-10 bg-[#064422] rounded-[40px] text-white flex flex-col justify-center"
                >
                    <Award className="mb-6 text-[#75E6DA]" size={56} />
                    <h3 className="text-3xl font-bold mb-4">Grade A Selection</h3>
                    <p className="text-green-50/70 text-lg">Pristine skin with zero blemishes, selected specifically for premium supermarket distribution and high-end retail.</p>
                </motion.div>

                <motion.div 
                    {...scrollConfig} 
                    variants={slideInRight}
                    className="p-10 bg-white border-2 border-[#0B6A32] rounded-[40px] flex flex-col justify-center"
                >
                    <Truck className="mb-6 text-[#0B6A32]" size={56} />
                    <h3 className="text-3xl font-bold text-[#064422] mb-4">Custom Branding</h3>
                    <p className="text-gray-600 text-lg">We offer private labeling, custom box designs, and specialized carton sizes to meet your specific market requirements.</p>
                </motion.div>
            </div>

            {/* Contact CTA */}
            <motion.div 
                {...scrollConfig} 
                variants={scaleUp}
                className="bg-[#0B6A32] rounded-[40px] p-12 text-center text-white relative overflow-hidden"
            >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                
                <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Ready to start your import?</h2>
                <motion.button 
                    whileHover={{ scale: 1.05, shadow: "0px 20px 30px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#064422] px-16 py-5 rounded-full font-black text-xl shadow-xl relative z-10"
                >
                    REQUEST A QUOTE
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Product;