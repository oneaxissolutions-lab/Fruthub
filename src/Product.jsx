import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { ArrowLeft, Package, Award, Leaf, ThermometerSnowflake, ShieldCheck } from 'lucide-react';
import source from './assets/source.jpg'; 

const Product = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Page load hone par sabse upar scroll karega
        window.scrollTo(0, 0);
        document.title = "Fresh Fruits & Vegetables Exporters – Fruthub Exports Pvt. Ltd.";
    }, []);

    // WhatsApp Redirect Function
    const handleWhatsAppClick = () => {
        const phoneNumber = "919817008240";
        const message = "Hello Fruthub Exports! I am interested in your Export Catalogue and premium produce. Please share more details.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const scrollConfig = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.1 } 
    };

    // Animation: Upar se neeche aane ke liye (y: -50)
    const slideDown = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
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

    const categories = [
        { label: "Core Fruits", value: "Cavendish Banana, Pomegranate, Grapes" },
        { label: "Premium Veg", value: "Onions, Green Chillies, Lemon" },
        { label: "Quality Grade", value: "A-Grade Export Quality" },
        { label: "Sourcing", value: "Direct Farm Procurement" },
        { label: "Packaging", value: "Ventilated Corrugated Boxes" },
        { label: "Certification", value: "APEDA & Global GAP Standards" },
        { label: "Cold Chain", value: "End-to-End Temp. Controlled" },
        { label: "Logistics", value: "Sea & Air Freight Ready" },
    ];

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen overflow-hidden">
            
            {/* Back Button & Title - Slides Down */}
            <motion.div {...scrollConfig} variants={slideDown} className="mb-12">
                <button 
                    onClick={() => navigate('/')}
                    className="group flex items-center text-[#0B6A32] font-bold mb-6 hover:opacity-80 transition-all"
                >
                    <ArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform" />
                    Back to Home
                </button>
                <h1 className="text-5xl md:text-7xl font-black text-[#064422] tracking-tight leading-tight">
                    Premium Fruits & <br/>
                    <span className="text-[#0B6A32]">Vegetables</span>
                </h1>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div {...scrollConfig} variants={slideInLeft} className="space-y-8">
                    <p className="text-2xl text-gray-600 font-light leading-relaxed">
                        Fruthub Exports delivers the essence of Indian agriculture to the world. We bridge the gap between <span className="font-semibold text-[#222222]">nature's finest harvests</span> and global dinner tables.
                    </p>
                    <div className="space-y-4 text-[#0B6A32] font-bold">
                        <div className="flex items-center gap-3"><Leaf size={24} className="text-green-600"/> Sustainable Farming Practices</div>
                        <div className="flex items-center gap-3"><ThermometerSnowflake size={24} className="text-blue-500"/> Advanced Post-Harvest Cooling</div>
                        <div className="flex items-center gap-3"><ShieldCheck size={24} className="text-green-700"/> Multi-Stage Quality Inspections</div>
                    </div>
                </motion.div>

                <motion.div {...scrollConfig} variants={slideInRight} className="relative">
                    <div className="aspect-[4/3] md:aspect-video bg-gray-200 rounded-[40px] shadow-2xl overflow-hidden border-8 border-white group relative">
                        <img 
                            src={source}
                            alt="Fresh Indian Produce for Export" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                        <p className="text-[#064422] font-black text-xl leading-none">Global</p>
                        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Standards</p>
                    </div>
                </motion.div>
            </div>

            {/* Capability Grid - Slides Down */}
            <motion.section {...scrollConfig} variants={slideDown} className="mb-24">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100">
                    <h2 className="text-3xl font-bold text-[#064422] mb-10 text-center">
                        Export Capability & Standards
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((spec, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#0B6A32] transition-all hover:shadow-lg group">
                                <p className="text-xs uppercase text-gray-400 mb-1 font-bold tracking-wider group-hover:text-[#0B6A32]">{spec.label}</p>
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
                    className="p-10 bg-[#064422] rounded-[40px] text-white flex flex-col justify-center relative overflow-hidden group"
                >
                    <Award className="mb-6 text-[#75E6DA] group-hover:scale-110 transition-transform" size={56} />
                    <h3 className="text-3xl font-bold mb-4">Farm-to-Port Mastery</h3>
                    <p className="text-green-50/70 text-lg">From the fertile fields of India to international ports, our seamless supply chain ensures freshness.</p>
                </motion.div>

                <motion.div 
                    {...scrollConfig} 
                    variants={slideInRight}
                    className="p-10 bg-white border-2 border-[#0B6A32] rounded-[40px] flex flex-col justify-center group"
                >
                    <Package className="mb-6 text-[#0B6A32] group-hover:rotate-6 transition-transform" size={56} />
                    <h3 className="text-3xl font-bold text-[#064422] mb-4">Bespoke Solutions</h3>
                    <p className="text-gray-600 text-lg">Customized sorting, grading, and sustainable packaging solutions tailored to your needs.</p>
                </motion.div>
            </div>

            {/* Contact CTA - Redirects to WhatsApp */}
            <motion.div 
                {...scrollConfig} 
                variants={slideDown}
                className="bg-[#0B6A32] rounded-[40px] p-12 text-center text-white relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                
                <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">Secure Your Supply <br/> of Freshness</h2>
                <motion.button 
                    onClick={handleWhatsAppClick}
                    whileHover={{ scale: 1.05, shadow: "0px 20px 30px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#064422] px-16 py-5 rounded-full font-black text-xl shadow-xl relative z-10 hover:bg-gray-50 transition-colors"
                >
                    REQUEST EXPORT CATALOGUE
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Product;