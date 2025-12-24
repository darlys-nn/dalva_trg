import React, { useState, useEffect } from 'react';
import { SectionTitle } from './SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://res.cloudinary.com/dhluknxar/image/upload/v1766534281/f91bcfae-b891-4f3c-adc4-682c96b4eca9_d6z6f8.webp",
  "https://res.cloudinary.com/dhluknxar/image/upload/v1766534281/4443627c-117b-4dbc-ac09-2c3eea387a54_wzfb7q.webp",
  "https://res.cloudinary.com/dhluknxar/image/upload/v1766534281/7dd82b68-c968-4092-b8a5-586dd8e01257_svvlbe.webp",
  "https://res.cloudinary.com/dhluknxar/image/upload/v1766534280/65363300-e152-411a-818d-9b5f428ae8fe_ykchnw.webp",
  "https://res.cloudinary.com/dhluknxar/image/upload/v1766534280/3dc15c0f-c350-4467-820a-7dc0c729e37d_l84d3q.webp"
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section id="depoimentos" className="py-24 bg-primary-700 text-white relative overflow-hidden scroll-mt-24">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle 
          title="Vidas Transformadas" 
          subtitle="Prova Social"
          light={true}
        />

        <div className="max-w-[380px] mx-auto relative">
          {/* Main Carousel Container - Clean Images Only */}
          <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
            {images.map((imgUrl, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
                    : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
                }`}
              >
                <img 
                  src={imgUrl} 
                  alt={`Depoimento ${index + 1}`} 
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls - Positioned outside or on top of image edges */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-20 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary-700 transition-all z-20 shadow-lg backdrop-blur-sm border border-white/20"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-20 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary-700 transition-all z-20 shadow-lg backdrop-blur-sm border border-white/20"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === activeIndex ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-primary-100 text-lg max-w-2xl mx-auto italic font-light">
            "Resultados reais de quem decidiu enfrentar a raiz do problema."
          </p>
        </div>
      </div>
    </section>
  );
};