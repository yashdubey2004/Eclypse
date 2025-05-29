import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductDetailProps {
  onAddToCart: () => void;
}

const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [sizeForm, setSizeForm] = useState({
    height: '',
    weight: '',
    bodyShape: '',
    fitPreference: '',
  });
  const [sizeResult, setSizeResult] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleSizeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSizeForm({ ...sizeForm, [e.target.name]: e.target.value });
  };

  const handleSizeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy AI logic for demo
    setSizeResult(
      `Recommended Size: M (92% match) — Our AI suggests Medium for your profile.`
    );
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-12">Silhouette No. 1 – Vermilion</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <img 
              src="/cartmain.png" 
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
                src="/cart1.png" 
                alt="Product view 1"
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="cart2.png" 
                alt="Product view 2"
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="cart3.png" 
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
          {/* Size & Fit */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('Size & Fit')}
              className="w-full flex items-center justify-between py-6 text-left text-xl font-light hover:text-gray-300 transition-colors"
            >
              <span>Size & Fit</span>
              <ChevronDown 
                className={`w-6 h-6 transition-transform ${
                  expandedSection === 'Size & Fit' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === 'Size & Fit' && (
              <div className="pb-8 text-gray-300">
                <form
                  onSubmit={handleSizeSubmit}
                  className="bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 rounded-2xl p-8 max-w-lg mx-auto flex flex-col gap-5 border border-gray-800 shadow-xl"
                >
                  <label className="text-xl font-semibold text-white mb-2 text-center tracking-wide">
                    Smart Size Prediction
                  </label>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="number"
                      name="height"
                      value={sizeForm.height}
                      onChange={handleSizeInput}
                      placeholder="Height (cm)"
                      className="flex-1 px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                      required
                    />
                    <input
                      type="number"
                      name="weight"
                      value={sizeForm.weight}
                      onChange={handleSizeInput}
                      placeholder="Weight (kg)"
                      className="flex-1 px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <select
                      name="bodyShape"
                      value={sizeForm.bodyShape}
                      onChange={handleSizeInput}
                      className="flex-1 px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    >
                      <option value="">Body Shape</option>
                      <option value="slim">Slim</option>
                      <option value="regular">Regular</option>
                      <option value="athletic">Athletic</option>
                      <option value="broad">Broad</option>
                    </select>
                    <select
                      name="fitPreference"
                      value={sizeForm.fitPreference}
                      onChange={handleSizeInput}
                      className="flex-1 px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    >
                      <option value="">Fit Preference</option>
                      <option value="tailored">Tailored</option>
                      <option value="relaxed">Relaxed</option>
                      <option value="oversized">Oversized</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow"
                  >
                    Get My Size
                  </button>
                  {sizeResult && (
                    <div className="mt-4 text-green-400 text-lg font-semibold text-center bg-black/60 rounded-lg py-2">
                      {sizeResult}
                    </div>
                  )}
                </form>
                <div className="mt-6 text-center text-gray-400 text-sm">
                  Unsure? <span className="underline cursor-pointer hover:text-white">View detailed size chart</span>
                </div>
              </div>
            )}
          </div>
          {/* Delivery & Returns */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('Delivery & Returns')}
              className="w-full flex items-center justify-between py-6 text-left text-xl font-light hover:text-gray-300 transition-colors"
            >
              <span>Delivery & Returns</span>
              <ChevronDown 
                className={`w-6 h-6 transition-transform ${
                  expandedSection === 'Delivery & Returns' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === 'Delivery & Returns' && (
              <div className="pb-8 text-gray-300">
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-semibold text-white mb-4">Delivery & Return Process</h4>
                  {/* Flowchart */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex flex-col items-center">
                      <div className="bg-black border-2 border-gray-700 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <span className="text-white text-2xl font-bold">1</span>
                      </div>
                      <span className="text-base text-gray-200">Order Placed</span>
                    </div>
                    <span className="text-3xl text-gray-600 hidden md:block">→</span>
                    <div className="flex flex-col items-center">
                      <div className="bg-black border-2 border-gray-700 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <span className="text-white text-2xl font-bold">2</span>
                      </div>
                      <span className="text-base text-gray-200">Dispatched in 24h</span>
                    </div>
                    <span className="text-3xl text-gray-600 hidden md:block">→</span>
                    <div className="flex flex-col items-center">
                      <div className="bg-black border-2 border-gray-700 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <span className="text-white text-2xl font-bold">3</span>
                      </div>
                      <span className="text-base text-gray-200">Delivered in 2-5 days</span>
                    </div>
                    <span className="text-3xl text-gray-600 hidden md:block">→</span>
                    <div className="flex flex-col items-center">
                      <div className="bg-black border-2 border-gray-700 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <span className="text-white text-2xl font-bold">4</span>
                      </div>
                      <span className="text-base text-gray-200">Easy Returns<br />within 14 days</span>
                    </div>
                  </div>
                  <div className="mt-6 text-gray-400 text-center text-sm max-w-xl">
                    <span className="block mb-2">Returns are free and easy. Simply contact our concierge team and we’ll arrange a pickup at your convenience. Refunds are processed within 48 hours of receiving the returned item.</span>
                    <span className="block">For more details, see our <span className="underline cursor-pointer hover:text-white">Returns Policy</span>.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* How This Was Made */}
          <div className="border-b border-gray-800">
            <button
              onClick={() => toggleSection('How This Was Made')}
              className="w-full flex items-center justify-between py-6 text-left text-xl font-light hover:text-gray-300 transition-colors"
            >
              <span>How This Was Made</span>
              <ChevronDown 
                className={`w-6 h-6 transition-transform ${
                  expandedSection === 'How This Was Made' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === 'How This Was Made' && (
              <div className="pb-8 text-gray-300">
                <div className="bg-gray-900/70 rounded-xl p-6 border border-gray-800 max-w-2xl mx-auto">
                  <h4 className="text-lg font-semibold text-white mb-4">Crafted for Quiet Luxury</h4>
                  <ul className="list-disc pl-6 space-y-2 text-base">
                    <li>
                      <span className="text-white font-medium">Premium Materials:</span> Sourced from ethical mills, our wool is selected for its softness, durability, and rich color.
                    </li>
                    <li>
                      <span className="text-white font-medium">Hand-Finished:</span> Each garment is hand-cut and assembled by skilled artisans, ensuring every detail meets our exacting standards.
                    </li>
                    <li>
                      <span className="text-white font-medium">Sustainable Practices:</span> We use eco-friendly dyes and minimal-waste processes, reflecting our commitment to the environment.
                    </li>
                    <li>
                      <span className="text-white font-medium">Timeless Design:</span> Designed to transcend trends, each silhouette is a statement of understated elegance and comfort.
                    </li>
                  </ul>
                  <div className="mt-6 text-gray-400 text-sm">
                    Experience the difference of true luxury—crafted with care, designed for life.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
