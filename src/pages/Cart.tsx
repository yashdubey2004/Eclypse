
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';
import { useCart } from '../components/CartProvider';
import Navbar from '../components/Navbar';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar cartItemCount={getTotalItems()} />
        <div className="pt-24 px-6">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-3xl font-light mb-8 text-black">Your cart is empty</h1>
            <Link 
              to="/" 
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemCount={getTotalItems()} />
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-black hover:text-gray-600 transition-colors">
              <ChevronLeft className="w-5 h-5 mr-2" />
              <span className="text-xl">Shipping Address</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <h2 className="text-xl font-medium text-black">Add New Address</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">Street Address</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Apt Number</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">State</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Zip</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <button 
                    type="button"
                    className="flex-1 border border-gray-300 text-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Save This Address
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  By placing your order, you agree to our company Privacy policy and Conditions of use.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-medium text-black mb-6">Order Summary</h3>
                
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium text-black">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-black">{item.price.toLocaleString()}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
                    <span className="text-black">7,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping and handling:</span>
                    <span className="text-black">200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before tax:</span>
                    <span className="text-black">6,599</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax Collected:</span>
                    <span className="text-black">1,400</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-xl font-medium">
                      <span className="text-black">Order Total:</span>
                      <span className="text-black">8,199</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition-colors">
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
