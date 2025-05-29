
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProductDetail from '../components/ProductDetail';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { useCart } from '../components/CartProvider';

const Index = () => {
  const { addToCart, getTotalItems } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'silhouette-1',
      name: 'Silhouette No. 1 – Vermilion',
      price: 7999,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar cartItemCount={getTotalItems()} />
      <Hero />
      <ProductShowcase />
      <ProductDetail onAddToCart={handleAddToCart} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
