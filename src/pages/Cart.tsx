import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';
import { useCart } from '../components/CartProvider';
import Navbar from '../components/Navbar';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar cartItemCount={getTotalItems()} />
        <div className="pt-24 px-6">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-3xl font-light mb-8 text-white">Your cart is empty</h1>
            <Link 
              to="/" 
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar cartItemCount={getTotalItems()} />
      <div className="pt-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-10">
            <Link to="/" className="flex items-center text-white hover:text-gray-300 transition-colors">
              <ChevronLeft className="w-5 h-5 mr-2" />
              <span className="text-xl">Back to Shop</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address & Form */}
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 rounded-2xl p-10 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <h2 className="text-xl font-semibold text-white">Add New Address</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Street Address</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Apt Number</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">State</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Zip</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-700 bg-black text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <button 
                    type="button"
                    className="flex-1 border border-gray-700 text-gray-200 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-400 text-white py-3 rounded-lg hover:from-red-700 hover:to-red-500 transition-colors font-semibold"
                  >
                    Save This Address
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-10 rounded-2xl shadow-xl border border-gray-800">
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-4">
                  By placing your order, you agree to our company Privacy policy and Conditions of use.
                </p>
              </div>

              <div className="bg-black/70 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-6">Order Summary</h3>
                
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-700"
                      />
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="text-sm text-gray-400">Quantity: 
                          <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={e => updateQuantity(item.id, Number(e.target.value))}
                            className="ml-2 w-14 px-2 py-1 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none"
                          />
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white">{item.price.toLocaleString()}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="border-t border-gray-800 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Items - Silhouette No. 1 – Vermilion</span>
                    <span className="text-white">7,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping and handling:</span>
                    <span className="text-white">200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Before tax:</span>
                    <span className="text-white">6,599</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax Collected:</span>
                    <span className="text-white">1,400</span>
                  </div>
                  <div className="border-t border-gray-800 pt-2">
                    <div className="flex justify-between text-xl font-semibold">
                      <span className="text-white">Order Total:</span>
                      <span className="text-white">8,199</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-red-400 text-white py-4 rounded-lg mt-8 font-bold text-lg hover:from-red-700 hover:to-red-500 transition-colors shadow-lg">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
