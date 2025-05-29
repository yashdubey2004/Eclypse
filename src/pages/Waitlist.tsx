
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../components/CartProvider';

const Waitlist = () => {
  const { getTotalItems } = useCart();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar cartItemCount={getTotalItems()} />
      
      <main className="pt-24">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-light mb-12">Join the Waitlist</h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Be the first to discover new collections and exclusive pieces. 
              Join our community of discerning individuals who appreciate quiet luxury.
            </p>
            
            {isSubmitted ? (
              <div className="bg-gray-900 p-8 rounded-lg max-w-md mx-auto">
                <h3 className="text-2xl font-light mb-4">Thank you</h3>
                <p className="text-gray-300">
                  You've been added to our waitlist. We'll notify you about new releases and exclusive access.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="bg-transparent border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black py-4 rounded-full hover:bg-gray-200 transition-colors font-medium"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            )}
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-light mb-4">Exclusive Access</h3>
                <p className="text-gray-300 text-sm">
                  Get early access to new collections before they're available to the public.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light mb-4">Limited Editions</h3>
                <p className="text-gray-300 text-sm">
                  Be notified about special releases and limited edition pieces.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light mb-4">Personal Styling</h3>
                <p className="text-gray-300 text-sm">
                  Receive personalized styling advice and curated recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Waitlist;
