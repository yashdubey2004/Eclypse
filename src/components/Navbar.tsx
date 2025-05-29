import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  cartItemCount?: number;
}

const Navbar = ({ cartItemCount = 0 }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <div className="w-7 h-7 bg-gradient-to-br from-black to-gray-800 rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-widest text-white group-hover:text-gray-300 transition-colors">Eclypse</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <Link to="/about" className="relative px-2 py-1 text-lg font-medium hover:text-gray-300 transition-colors after:block after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            About Us
          </Link>
          <Link to="/waitlist" className="relative px-2 py-1 text-lg font-medium hover:text-gray-300 transition-colors after:block after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
            Waitlist
          </Link>
          <Link to="/cart" className="relative flex items-center px-2 py-1 text-lg font-medium hover:text-gray-300 transition-colors">
            <ShoppingCart size={22} className="mr-1" />
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md border-2 border-black">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link 
            to="/buy" 
            className="ml-4 bg-gradient-to-r from-white to-gray-200 text-black px-7 py-2 rounded-full font-semibold shadow-md hover:from-gray-200 hover:to-white hover:text-black transition-all duration-200 border border-white/20"
          >
            Buy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
