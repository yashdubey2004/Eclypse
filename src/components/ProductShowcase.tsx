
import React from 'react';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Street photography with red garment"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Fashion detail"
                className="w-full h-32 object-cover rounded mb-4"
              />
            </div>
            <div className="bg-red-600 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-light mb-2">Premium wool blend in</h3>
                <p className="text-lg">signature vermilion</p>
              </div>
            </div>
            <div className="col-span-2 bg-gray-900 p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Craftsmanship detail"
                className="w-full h-24 object-cover rounded mb-4"
              />
            </div>
            <div className="bg-white text-black p-6 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
