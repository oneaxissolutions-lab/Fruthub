import React from "react";

// Images directly from src
import gallery1 from "./gallery1.jpeg";
import gallery2 from "./gallery2.jpeg";
import gallery3 from "./gallery3.jpeg";
import gallery4 from "./gallery4.jpeg";
import gallery5 from "./gallery5.jpeg";
import gallery6 from "./gallery6.jpeg";
import gallery7 from "./gallery7.jpeg";
import gallery8 from "./gallery8.jpeg";
import gallery9 from "./gallery9.jpeg";

const images = [
  { id: 1, src: gallery1, title: "Gallery Item 1" },
  { id: 2, src: gallery2, title: "Gallery Item 2" },
  { id: 3, src: gallery3, title: "Gallery Item 3" },
  { id: 4, src: gallery4, title: "Gallery Item 4" },
  { id: 5, src: gallery5, title: "Gallery Item 5" },
  { id: 6, src: gallery6, title: "Gallery Item 6" },
  { id: 7, src: gallery7, title: "Gallery Item 7" },
  { id: 8, src: gallery8, title: "Gallery Item 8" },
  { id: 9, src: gallery9, title: "Gallery Item 9" },
];

export default function Gallery() {
  return (
    <section className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Image Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl overflow-hidden border-2 border-green-500
                       shadow-lg shadow-green-500/40 hover:scale-105
                       transition duration-300"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-900">
                {image.title}
              </h2>
              <p className="text-sm text-green-700">Format: JPEG</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
