import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./1.jpg",
    "./ludooDice.jpg",
    "./ludooDice.jpg",
    "./ludooDice.jpg",
  ];

  const gradientBorderStyles = `
    @keyframes borderFlow {
      0% { background-position: 0% 0%; }
      100% { background-position: 200% 200%; }
    }

    .gradient-border {
      position: relative;
      padding: 3px;
      border-radius: 0.75rem;
      background: linear-gradient(
        45deg,
        #ff00ff,
        #00ffff,
        #ffff00,
        #ff00ff,
        #00ffff
      );
      background-size: 200% 200%;
      animation: borderFlow 3s linear infinite;
    }

    @media (min-width: 768px) {
      .gradient-border {
        border-radius: 1rem;
      }
    }

    .carousel-inner {
      position: relative;
      border-radius: 0.75rem;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      .carousel-inner {
        border-radius: 1rem;
      }
    }
  `;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-2">
      <style>{gradientBorderStyles}</style>
      
      {/* Gradient Border Container */}
      <div className="gradient-border">
        {/* Carousel Container */}
        <div className="carousel-inner">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="min-w-full">
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? "bg-[#00ffff] shadow-glow" 
                : "bg-gray-300 opacity-50"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;