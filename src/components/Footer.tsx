
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6">
              Eclypse<sup className="text-sm">®</sup>
            </h3>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
            <p className="mb-2">+91 123-456-7890</p>
            <p className="text-sm text-gray-400 mb-4">Email</p>
            <p>eclypse@gmail.com</p>
          </div>
          
          <div>
            <nav className="space-y-2">
              <a href="/" className="block hover:text-gray-300 transition-colors">Home</a>
              <a href="/about" className="block hover:text-gray-300 transition-colors">About</a>
              <a href="/buy" className="block hover:text-gray-300 transition-colors">Buy</a>
              <a href="/customers" className="block hover:text-gray-300 transition-colors">Our Customers</a>
              <a href="/contact" className="block hover:text-gray-300 transition-colors">Contacts</a>
            </nav>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <div className="flex space-x-4">
            <button className="w-8 h-8 bg-gray-800 rounded hover:bg-gray-700 transition-colors"></button>
            <button className="w-8 h-8 bg-gray-800 rounded hover:bg-gray-700 transition-colors"></button>
          </div>
          
          <p className="text-sm text-gray-400">© Eclypse 2025</p>
          
          <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
            <span>Restart</span>
            <span>R</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
