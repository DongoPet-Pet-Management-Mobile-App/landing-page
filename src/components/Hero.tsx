import React from 'react';
import { Smartphone, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Logo/Title */}
        <div className="animate-bounce mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 backdrop-blur-sm rounded-full mb-4">
            <img src="/favicon.png" alt="DongoPet" className="w-[100px] h-[80px]" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          Dongo<span className="text-yellow-200">Pet</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Your smart pet care buddy in your pocket! 🐾
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Scan pet food, get AI vet advice, manage emergencies, and create amazing pet profiles - all in one beautiful app!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Download Now
            <Sparkles className="w-4 h-4 group-hover:animate-spin" />
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105">
            Watch Demo
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-white animate-bounce">50K+</div>
            <div className="text-white/70">Happy Pets</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white animate-bounce animation-delay-200">4.9★</div>
            <div className="text-white/70">App Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white animate-bounce animation-delay-400">24/7</div>
            <div className="text-white/70">AI Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white animate-bounce animation-delay-600">100+</div>
            <div className="text-white/70">Pet Breeds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;