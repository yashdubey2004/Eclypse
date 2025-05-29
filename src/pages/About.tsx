
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../components/CartProvider';

const About = () => {
  const { getTotalItems } = useCart();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar cartItemCount={getTotalItems()} />
      
      <main className="pt-24">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl lg:text-7xl font-light mb-12">About Eclypse</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in 
                cut, in movement, in presence. Each piece is crafted with meticulous attention to detail, 
                embodying a timeless elegance that transcends fleeting trends.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Eclypse represents more than fashion—it's a commitment to thoughtful design, 
                sustainable practices, and the art of understated sophistication. Our collections 
                are born from a desire to create garments that exist in harmony with the wearer, 
                enhancing rather than overwhelming.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h3 className="text-2xl font-light mb-4">Our Philosophy</h3>
                  <p className="text-gray-300">
                    We believe in the power of restraint. In a world of excess, Eclypse offers 
                    sanctuary through simplicity, allowing the wearer's authentic self to emerge.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-4">Our Craft</h3>
                  <p className="text-gray-300">
                    Every garment is constructed using traditional techniques combined with 
                    innovative materials, ensuring both heritage and forward-thinking design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <img 
                src="/cart1.png"
                alt="Eclypse craftsmanship"
                className="w-full h-80 object-cover rounded-lg"
              />
              <img 
                src="/cart2.png"
                alt="Eclypse design process"
                className="w-full h-80 object-cover rounded-lg"
              />
              <img 
                src="/cart3.png"
                alt="Eclypse materials"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
