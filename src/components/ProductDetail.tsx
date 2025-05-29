
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductDetailProps {
  onAddToCart: () => void;
}

const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-12">Silhouette No. 1 – Vermilion</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Model in urban setting"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-8">
            <div className="max-w-md">
              <p className="text-lg text-gray-300 mb-8">
                A tailored composition in motion. Cut from structured wool with a sculpted 
                shoulder and softened hem, this piece captures presence without force. Worn 
                here in the stillness of a city in motion.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Product view 1"
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Product view 2"
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Product view 3"
                className="w-full h-32 object-cover rounded"
              />
            </div>
            
            <button 
              onClick={onAddToCart}
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Add to Cart - $7,999
            </button>
          </div>
        </div>
        
        <div className="mt-20 space-y-1">
          {['Size & Fit', 'Delivery & Returns', 'How This Was Made'].map((section) => (
            <div key={section} className="border-b border-gray-800">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between py-6 text-left text-xl font-light hover:text-gray-300 transition-colors"
              >
                <span>{section}</span>
                <ChevronDown 
                  className={`w-6 h-6 transition-transform ${
                    expandedSection === section ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === section && (
                <div className="pb-6 text-gray-300">
                  <p>Detailed information about {section.toLowerCase()} will be displayed here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
