import React, { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
  description: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "img1",
    src: "/images/image 1.PNG",
    category: "Strength Zone",
    title: "Pro Physique Zone",
    description: "Premium heavy-duty machines and weight training facilities.",
  },
  {
    id: "img2",
    src: "/images/image 2.PNG",
    category: "Coaching Arena",
    title: "Dedicated Training Area",
    description: "Excellent layout with personalized focus on client results.",
  },
  {
    id: "img4",
    src: "/images/image 4.PNG",
    category: "Aerobic Cardio",
    title: "Cardio Section",
    description: "Stamina-building treadmills and elite fitness trackers.",
  },
  {
    id: "img3",
    src: "/images/image 3.PNG",
    category: "Bodybuilding Equipment",
    title: "Advanced Muscle Sculpting",
    description: "Highly requested machine configurations for premium variations.",
  },
];

export default function GymGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % GALLERY_IMAGES.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <div id="gallery-section" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Our Elite Facility
          </h2>
          <p className="text-neutral-400 mt-2 max-w-xl">
            Take a visual tour inside Pro Physique Fitness Club. We provide premium variations, a highly motivating bodybuilding environment, and well-maintained equipment.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 text-amber-500">
            4 Interactive Views
          </span>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 text-white">
            High-Grade Equipment
          </span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_IMAGES.map((img, index) => (
          <div
            key={img.id}
            onClick={() => setActiveImageIndex(index)}
            className="group relative h-80 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/60 cursor-pointer shadow-lg hover:shadow-amber-500/5 hover:border-neutral-700 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-100"
            />

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-opacity duration-300" />

            {/* Expand Button */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-neutral-800 p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 text-white">
              <Maximize2 className="w-4 h-4 text-amber-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 z-50 bg-neutral-900 border border-neutral-800 text-white p-3 rounded-full hover:bg-neutral-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-50 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-white p-3 rounded-full transition-colors hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 z-50 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-white p-3 rounded-full transition-colors hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <img
                src={GALLERY_IMAGES[activeImageIndex].src}
                alt={GALLERY_IMAGES[activeImageIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] object-contain max-w-full block"
              />
            </div>
            
            <div className="text-center mt-5 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
                {GALLERY_IMAGES[activeImageIndex].category}
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                {GALLERY_IMAGES[activeImageIndex].title}
              </h3>
              <p className="text-neutral-400 text-sm mt-2">
                {GALLERY_IMAGES[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
