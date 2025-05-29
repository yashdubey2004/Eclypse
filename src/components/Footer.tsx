import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold tracking-widest text-white mb-2">Eclypse</span>
          <span className="text-gray-400 text-sm mb-1">© 2025 Eclypse. All rights reserved.</span>
          <span className="text-gray-500 text-xs italic">Quiet luxury, timeless design.</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-gray-300 text-base">
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/waitlist" className="hover:text-white transition-colors">Waitlist</a>
          <a href="/cart" className="hover:text-white transition-colors">Cart</a>
          <a href="/buy" className="hover:text-white transition-colors">Buy</a>
        </div>
        <div className="flex flex-col items-center md:items-end text-gray-400 text-sm gap-1">
          <span>Contact: <a href="mailto:support@eclypse.com" className="underline hover:text-white">support@eclypse.com</a></span>
          <span>Instagram: <a href="https://instagram.com/eclypse" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">@eclypse</a></span>
          <span>Privacy Policy | Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
