import React from 'react';

// --- 1. Import all images directly ---
// NOTE: Ensure these paths are correct for your project structure.
import img from './assets/img.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';
import img6 from './assets/img6.jpeg';
import img7 from './assets/img7.jpeg';
import img8 from './assets/img8.jpeg';
import img9 from './assets/img9.jpeg';


// --- 2. Define Image Data using the imported variables ---
const images = [
  { id: 1, src: img, alt: 'Image 1: Abstract Red Theme' },
  { id: 2, src: img2, alt: 'Image 2: Lush Green Theme' },
  { id: 3, src: img3, alt: 'Image 3: Deep Blue Theme' },
  { id: 4, src: img4, alt: 'Image 4: Purple Night Theme' },
  { id: 5, src: img5, alt: 'Image 5: Bright Yellow Theme' },
  { id: 6, src: img6, alt: 'Image 6: Cool Cyan Theme' },
  { id: 7, src: img7, alt: 'Image 7: Warm Orange Theme' },
  { id: 8, src: img8, alt: 'Image 8: Regal Indigo Theme' },
  { id: 9, src: img9, alt: 'Image 9: Fresh Mint Theme' },
];

const Gallery = () => {
  return (
    // Background changed to white (bg-white)
    <div className="min-h-screen bg-white p-4 md:p-8 perspective-1000">
      
      {/* Gallery Header with Animation (text changed to dark gray) */}
      <h1 className="text-5xl font-extrabold text-gray-800 text-center drop-shadow-lg mb-12 animate-fade-in">
         Gallery
      </h1>

      {/* Responsive Grid Container */}
      <div className="container mx-auto grid 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
                      gap-6">
        
        {images.map((image) => (
          // This wrapper acts as the "Scene"
          <div 
            key={image.id} 
            className="group h-0 pb-[100%] relative cursor-pointer"
          >
            {/* The Flipping Container */}
            <div className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl transition-transform duration-700 ease-in-out transform-gpu 
                          group-hover:rotate-y-180 preserve-3d">
              
              {/* --- FRONT FACE: The Image Card (Cleaned up) --- */}
              <div 
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden 
                           backface-hidden shadow-2xl"
                style={{ 
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* REMOVED: Placeholder text div from here */}
              </div>

              {/* --- BACK FACE: The Glassmorphism Caption (White background will make this look subtle) --- */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden 
                              backface-hidden rotate-y-180 
                              
                              /* Glassmorphism Styles: Increased opacity for visibility on white BG */
                              backdrop-blur-sm bg-gray-100/30 border border-gray-300/50
                              flex items-center justify-center p-4">
                
                <p className="text-gray-800 text-xl font-semibold drop-shadow-lg text-center select-none">
                  {image.alt}
                </p>
              </div>
            </div>
            
             {/* Hidden image element for accessibility */}
            <img src={image.src} alt={image.alt} className="sr-only" />

          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;