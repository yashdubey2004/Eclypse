
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  cartItemCount?: number;
}

const Navbar = ({ cartItemCount = 0 }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link to="/waitlist" className="hover:text-gray-300 transition-colors">
            Waitlist
          </Link>
          <Link to="/cart" className="hover:text-gray-300 transition-colors relative">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link 
            to="/buy" 
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            Buy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
