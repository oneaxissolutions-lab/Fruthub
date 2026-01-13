import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, Apple, X, Zap, ShieldCheck, 
  Thermometer, Clock, Globe, Salad, PhoneCall, ArrowLeft
} from 'lucide-react';

// --- IMAGE IMPORTS ---
import babycorn from './assets/babycorn.jpg';
import bittergourd from './assets/bittergourd.jpg';
import mushroom from './assets/mushroom.jpg';
import cauliflower from './assets/cauliflower.jpg';
import boroclii from './assets/boroclii.jpg';
import cabbage from './assets/cabbage.jpg';
import capsicum from './assets/capsicum.jpg';
import frenchbeans from './assets/frenchbeans.jpg';
import okra from './assets/okra.jpg';
import tarroroot from './assets/tarroroot.jpg';
import drumstick from './assets/drumstick.jpg';
import avacado from './assets/avacado.jpg';
import banana from './assets/banana.jpg';
import greenapple from './assets/greenapple.jpg';
import freshgrapes from './assets/freshgrapes.jpg';
import berries from './assets/berries.jpg';
import dragonfruit from './assets/dragonfruit.jpg';
import premiumkiwi from './assets/premiumkiwi.jpg';
import mangpsteen from './assets/mangpsteen.jpg';
import passionfruit from './assets/passionfruit.jpg';
import pineapple from './assets/pineapple.jpg'; 
import cucumber from './assets/cucumber.jpg';
import raadish from './assets/raadish.jpg';
import beetroot from './assets/beetroot.jpg';
import turnip from './assets/turnip.jpg';
import lettuce from './assets/lettuce.jpg';
import celery from './assets/celery.jpg';
import redcabbage from './assets/redcabbage.jpg';
import cherry from './assets/cherry.jpg';
import kale from './assets/kale.jpg';
import zucchini from './assets/zucchini.jpg';
import caroot from './assets/caroot.jpg';

const Fruit = () => {
  const [activeTab, setActiveTab] = useState('Daily Veggies + Exotic Picks');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const inventory = {
    "Daily Veggies + Exotic Picks": [
      { name: "Mushroom", img: mushroom, tag: "Organic Button", specs: { nutrition: "High Protein", shelf: "7-10 Days", temp: "2°C-4°C", moq: "500 KG" } },
      { name: "Cauliflower", img: cauliflower, tag: "Fresh White", specs: { nutrition: "Vitamin C", shelf: "14 Days", temp: "0°C-1°C", moq: "1 Ton" } },
      { name: "Broccoli", img: boroclii, tag: "Premium Green", specs: { nutrition: "Iron & Fiber", shelf: "10-14 Days", temp: "1°C-2°C", moq: "300 KG" } },
      { name: "Cabbage", img: cabbage, tag: "Crispy Export", specs: { nutrition: "Vitamin K", shelf: "3-4 Weeks", temp: "0°C", moq: "2 Tons" } },
      { name: "Capsicum", img: capsicum, tag: "Trio Colors", specs: { nutrition: "Vitamin A", shelf: "12 Days", temp: "7°C-10°C", moq: "500 KG" } },
      { name: "French Beans", img: frenchbeans, tag: "Tender Green", specs: { nutrition: "Folic Acid", shelf: "8 Days", temp: "4°C-7°C", moq: "300 KG" } },
      { name: "Okra", img: okra, tag: "Lady Finger", specs: { nutrition: "Fiber Rich", shelf: "7 Days", temp: "8°C-10°C", moq: "1 Ton" } },
      { name: "Taro Root", img: tarroroot, tag: "Arbi", specs: { nutrition: "Low GI", shelf: "2-3 Months", temp: "Ambient", moq: "1 Ton" } },
      { name: "Drumstick", img: drumstick, tag: "Moringa", specs: { nutrition: "Superfood", shelf: "10 Days", temp: "10°C", moq: "200 KG" } },
      { name: "Bitter Gourd", img: bittergourd, tag: "Karela", specs: { nutrition: "Medicinal", shelf: "12 Days", temp: "10°C", moq: "500 KG" } },
      { name: "Baby Corn", img: babycorn, tag: "Young Maize", specs: { nutrition: "Low Cal", shelf: "5-7 Days", temp: "2°C", moq: "100 KG" } }
    ],
    "Premium Quality Fruits": [
      { name: "Banana", img: banana, tag: "G9 Variety", specs: { nutrition: "Potassium", shelf: "7-10 Days", temp: "13°C", moq: "10 Tons" } },
      { name: "Avocado", img: avacado, tag: "Hass Variety", specs: { nutrition: "Healthy Fats", shelf: "5-7 Days", temp: "5°C-7°C", moq: "200 KG" } },
      { name: "Green Apple", img:greenapple, tag: "Crispy Granny", specs: { nutrition: "Antioxidants", shelf: "6 Weeks", temp: "2°C", moq: "1 Ton" } },
      { name: "Fresh Grapes", img: freshgrapes, tag: "Seedless", specs: { nutrition: "Vitamin K", shelf: "14 Days", temp: "0°C", moq: "500 KG" } },
      { name: "Mixed Berries", img:berries, tag: "Premium Grade", specs: { nutrition: "Vitamin C", shelf: "3-5 Days", temp: "1°C", moq: "100 KG" } },
      { name: "Dragon Fruit", img: dragonfruit, tag: "Exotic Pink", specs: { nutrition: "Fiber Rich", shelf: "10 Days", temp: "10°C", moq: "200 KG" } },
      { name: "Premium Kiwi", img: premiumkiwi, tag: "Zespri Gold", specs: { nutrition: "Vitamin C", shelf: "2 Weeks", temp: "0°C", moq: "300 KG" } },
      { name: "Mangosteen", img:mangpsteen, tag:"Exotic" , specs:{ nutrition:"Xanthones" , shelf:"7 Days" , temp:"12°C" , moq:"150 KG"}},
      { name: "Passion Fruit", img:passionfruit, tag: "Purple Aromatic", specs: { nutrition: "Vitamin A", shelf: "10 Days", temp: "7°C", moq: "100 KG" } },
      { name: "Pineapple", img: pineapple, tag: "Sweet Exotic", specs: { nutrition: "Magnesium", shelf: "5 Days", temp: "10°C", moq: "200 KG" } }
    ],
    "Salads": [
      { name: "Cucumber", img: cucumber, tag: "English Seedless", specs: { nutrition: "Hydrating", shelf: "7 Days", temp: "10°C", moq: "500 KG" } },
      { name: "Radish", img: raadish, tag: "White Long", specs: { nutrition: "Detoxifying", shelf: "10 Days", temp: "4°C", moq: "500 KG" } },
      { name: "Carrot", img: caroot, tag: "Premium Orange", specs: { nutrition: "Beta Carotene", shelf: "4 Weeks", temp: "1°C", moq: "1 Ton" } },
      { name: "Beetroot", img: beetroot, tag: "Iron Rich", specs: { nutrition: "Blood Health", shelf: "3 Weeks", temp: "2°C", moq: "1 Ton" } },
      { name: "Turnip", img:turnip, tag: "Shalgam", specs: { nutrition: "Low Calorie", shelf: "2 Weeks", temp: "2°C", moq: "500 KG" } },
      { name: "Lettuce", img: lettuce, tag: "Iceberg / Romaine", specs: { nutrition: "Fiber", shelf: "5 Days", temp: "1°C", moq: "200 KG" } },
      { name: "Kale", img: kale, tag: "Curly Green", specs: { nutrition: "Superfood", shelf: "6 Days", temp: "1°C", moq: "100 KG" } },
      { name: "Celery", img: celery, tag: "Aromatic Stalks", specs: { nutrition: "Anti-inflammatory", shelf: "10 Days", temp: "1°C", moq: "200 KG" } },
      { name: "Cherry Tomatoes", img: cherry, tag: "Sweet Red", specs: { nutrition: "Lycopene", shelf: "8 Days", temp: "12°C", moq: "100 KG" } },
      { name: "Zucchini", img: zucchini, tag: "Green / Yellow", specs: { nutrition: "Vitamin B6", shelf: "10 Days", temp: "8°C", moq: "300 KG" } },
      { name: "Red Cabbage", img: redcabbage, tag: "Purple Crunchy", specs: { nutrition: "Vitamin C", shelf: "4 Weeks", temp: "0°C", moq: "500 KG" } }
    ]
  };

  const openWhatsApp = () => window.open("https://wa.me/919817008240", "_blank");

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20 font-sans text-sm">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-black text-xl text-green-700 italic uppercase tracking-tighter"></div>
        </div>

       

        
      </nav>

      <main className="pt-28 max-w-7xl mx-auto px-6">
        
        {/* --- BACK TO HOME BUTTON (New Position) --- */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-3 text-gray-500 hover:text-green-700 transition-colors group">
            <div className="bg-white border border-gray-200 p-2.5 rounded-full group-hover:bg-green-100 group-hover:border-green-200 transition-all shadow-sm">
              <ArrowLeft size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Home</span>
          </a>
        </div>

        {/* --- HERO SECTION --- */}
        <div className="w-full bg-green-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden mb-12 shadow-2xl">
            <div className="relative z-10">
                <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Certified Global Exporter</span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
                    Freshness <br/> <span className="text-green-500 underline decoration-white/20 underline-offset-8">Across Borders</span>
                </h2>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        </div>

        {/* --- CATEGORIES TAB --- */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.keys(inventory).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-[10px] uppercase border-2 transition-all 
              ${activeTab === tab ? "bg-[#FFD700] border-[#FFD700] text-green-900 scale-105 shadow-md" : "border-green-600 text-green-700 hover:bg-yellow-50"}`}>
              {tab === 'Salads' ? <Salad size={14}/> : tab.includes('Fruits') ? <Apple size={14}/> : <Leaf size={14}/>}
              {tab}
            </button>
          ))}
          <button onClick={openWhatsApp} className="flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-[10px] uppercase border-2 border-green-600 text-green-700 hover:bg-yellow-50 transition-all">
            <PhoneCall size={14} /> On Demand
          </button>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {inventory[activeTab].map(product => (
              <motion.div 
                key={product.name} 
                layout 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }} 
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-50">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black text-green-800 uppercase">
                      {product.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-black text-base text-gray-900 uppercase truncate">{product.name}</h3>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-[9px] mt-1 tracking-widest">
                      SPECS <ChevronIcon />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* --- SPECIFICATION MODAL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden relative shadow-2xl" onClick={e => e.stopPropagation()}>
              
              <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-10 bg-gray-100 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                <X size={18} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img src={selectedProduct.img} className="w-full h-full object-cover" alt={selectedProduct.name} />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <span className="text-green-600 font-bold text-[10px] uppercase tracking-widest">{selectedProduct.tag}</span>
                  <h2 className="text-3xl font-black text-gray-900 uppercase mt-1 mb-6 leading-none">{selectedProduct.name}</h2>
                  
                  <div className="space-y-4">
                    <Spec icon={<ShieldCheck size={16}/>} label="Nutrition" value={selectedProduct.specs.nutrition} />
                    <Spec icon={<Clock size={16}/>} label="Shelf Life" value={selectedProduct.specs.shelf} />
                    <Spec icon={<Thermometer size={16}/>} label="Storage" value={selectedProduct.specs.temp} />
                    <Spec icon={<Globe size={16}/>} label="MOQ" value={selectedProduct.specs.moq} />
                  </div>

                  <button onClick={openWhatsApp} className="w-full mt-8 py-4 bg-green-600 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-lg hover:bg-green-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

const Spec = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="bg-green-50 p-2 rounded-xl text-green-600">{icon}</div>
    <div>
      <p className="text-[8px] font-black text-gray-400 uppercase leading-none mb-1">{label}</p>
      <p className="font-bold text-xs text-gray-800">{value}</p>
    </div>
  </div>
);

const ChevronIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

export default Fruit;