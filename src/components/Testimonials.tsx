
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Understated, but unforgettable. It feels like it was made for me",
      author: "Random Woman",
      location: "NY, USA",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The attention to detail is extraordinary. Every stitch tells a story",
      author: "Sarah Chen",
      location: "CA, USA", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Eclypse understands luxury in a way that speaks to the soul",
      author: "Maria Rodriguez",
      location: "TX, USA",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="text-6xl mb-8">"</div>
          <blockquote className="text-3xl lg:text-4xl font-light mb-12 leading-relaxed">
            {testimonials[currentTestimonial].quote}
          </blockquote>
          
          <div className="flex items-center justify-center space-x-8 mb-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <p className="text-xl font-light">{testimonials[currentTestimonial].author}</p>
              <p className="text-gray-400">{testimonials[currentTestimonial].location}</p>
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-12 h-12 rounded-full border-2 ${
                  index === currentTestimonial ? 'border-white' : 'border-gray-600'
                } hover:border-white transition-colors`}
              >
                <img 
                  src={testimonials[index].image} 
                  alt={testimonials[index].author}
                  className="w-full h-full rounded-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
