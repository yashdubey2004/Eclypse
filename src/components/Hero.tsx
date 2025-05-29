
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white relative pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-light tracking-tight">
              Eclypse<sup className="text-2xl">®</sup>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
            </p>
            <button className="flex items-center space-x-2 text-lg border-b border-white pb-1 hover:border-gray-300 transition-colors">
              <span>Learn more about Eclypse</span>
              <span>→</span>
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Model in red Eclypse garment"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-sm text-gray-400">
        © 2025
      </div>
    </section>
  );
};

export default Hero;
