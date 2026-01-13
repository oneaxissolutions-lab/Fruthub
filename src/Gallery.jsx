import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveLeft, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Image Imports ---
import img from './assets/img.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';

const images = [
  { id: 1, src: img, title: 'Fresh Produce' },
  { id: 2, src: img2, title: 'Organic Harvest' },
  { id: 3, src: img3, title: 'Premium Quality' },
  { id: 4, src: img4, title: 'Daily Veggies' },
  { id: 5, src: img5, title: 'Exotic Fruits' },
  { id: 6, src: img6, title: 'Pure Green' },
  { id: 7, src: img7, title: 'Farm Fresh' },
  { id: 8, src: img8, title: 'Healthy Picks' },
  { id: 9, src: img9, title: 'Global Export' },
];

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // WhatsApp configuration
  const phoneNumber = "919817008240";
  const message = "Hello! I am interested in your fresh produce. I would like to request a wholesale quote.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 overflow-x-hidden selection:bg-green-100">
      
      {/* 1. BACK TO HOME */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-8">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-3 text-gray-400 hover:text-green-700 transition-colors font-black uppercase tracking-widest text-[10px]"
        >
          <div className="p-2 rounded-full border border-gray-100 bg-white shadow-sm">
            <MoveLeft size={16} />
          </div>
          Return to Home
        </motion.button>
      </div>

      {/* 2. HEADER */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-6 text-gray-900">
              OUR <span className="text-green-600">FRESH</span> <br /> EXHIBIT
          </h1>
          <p className="max-w-xl text-gray-500 text-sm md:text-base font-medium">
              Hand-picked quality from the best farms. Explore our premium export-grade collection.
          </p>
        </motion.div>
      </header>

      {/* 3. GALLERY GRID */}
      <main className="max-w-[1600px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              className="group relative h-64 md:h-80 [perspective:1000px]"
            >
              <div className="w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl overflow-hidden shadow-sm">
                
                {/* Front Side */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white font-black text-[10px] uppercase tracking-widest">{image.title}</div>
                </div>

                {/* Back Side (Redirection added here too) */}
                <div className="absolute inset-0 h-full w-full bg-green-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col items-center justify-center text-center">
                  <Leaf className="mb-2 text-green-300" size={24} />
                  <p className="font-black uppercase text-sm tracking-tighter">Certified Quality</p>
                  <div className="h-[1px] w-8 bg-white/30 my-2"></div>
                  <p className="text-[9px] font-bold opacity-70 tracking-widest uppercase mb-4">Export Grade A+</p>
                  
                  {/* Small card redirect */}
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/50 rounded-full text-[8px] font-black uppercase tracking-widest hover:bg-white hover:text-green-700 transition-all">
                    Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* 4. FOOTER (Main Redirect Button) */}
      <footer className="py-24 border-t border-gray-100 bg-white text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h3 className="text-4xl font-black mb-6 tracking-tight">Ready to Order?</h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto text-sm">Bulk export orders with global tracking and logistics.</p>
            
            {/* Direct Link to WhatsApp */}
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-green-700 text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#f3c63d] hover:text-[#01411c] transition-all shadow-xl active:scale-95"
            >
              Request Wholesale Quote 
            </a>
          </motion.div>
      </footer>

    </div>
  );
};

export default Gallery;