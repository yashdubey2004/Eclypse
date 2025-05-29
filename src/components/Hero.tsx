import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white relative pt-20 flex flex-col items-start w-full">
      {/* Eclypse Title in top left */}
      <div className="absolute left-8 z-20" style={{ top: '64px' }}>
        <h1 className="font-light text-left text-[27px] sm:text-[40.5px] lg:text-[54px] leading-none tracking-tight">
          Eclypse<sup className="text-lg font-normal align-super">®</sup>
        </h1>
      </div>
      {/* Centered Photo */}
      <div className="w-full flex justify-center items-center mt-24 mb-6">
        <img
          src="/Hero_mp4.png"
          alt="Model in red Eclypse garment"
          className="object-contain rounded-lg"
          style={{ maxHeight: '450px', width: 'auto', maxWidth: '100%' }}
        />
      </div>
      {/* Description below photo, centered and aesthetic */}
      <div className="w-full flex justify-center mb-6">
        <div className="max-w-3xl w-full text-center px-6 py-4 bg-gradient-to-r from-gray-900/60 via-black/80 to-gray-900/60 rounded-xl shadow-lg border border-gray-700 mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-5xl text-gray-100 font-light tracking-wide" style={{ fontSize: '150%', letterSpacing: '0.02em', lineHeight: '1.3' }}>
            Rooted in a philosophy of <span className="font-semibold text-white">quiet luxury</span>, our garments are designed to speak softly in cut, in movement, in presence.
          </p>
        </div>
      </div>
      {/* Learn More Button below description, centered */}
      <div className="w-full flex justify-center mb-8">
        <button
          className="mt-6 flex items-center justify-center space-x-2 text-lg font-semibold border border-white rounded-full px-8 py-3 bg-transparent text-white transition-all duration-200 hover:bg-white hover:text-black focus:outline-none"
          onClick={() => navigate('/about')}
        >
          <span>Learn more about Eclypse</span>
          <span>→</span>
        </button>
      </div>
      {/* Copyright */}
      <div className="absolute bottom-8 right-8 text-sm text-gray-400 z-20">
        © 2025
      </div>
    </section>
  );
};

export default Hero;
