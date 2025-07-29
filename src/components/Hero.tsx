import React from 'react';
import { Smartphone, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Logo/Title */}
        <div className="animate-bounce mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full mb-4 shadow-lg">
            <img src="/favicon.png" alt="DongoPet" className="w-[100px] h-[80px]" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 animate-fade-in-up drop-shadow-lg">
          Dongo<span className="text-orange-600">Pet</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-semibold">
          A pet care technology brand owned by Lavoro Group LLC
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          DongoPet is a project created and operated by Lavoro Group LLC, a registered company based in Florida, USA. 
          We build digital solutions to help pet owners manage their pets' health, safety, and wellness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Download Now
            <Sparkles className="w-4 h-4 group-hover:animate-spin" />
          </button>
          
          <button className="border-2 border-gray-700 text-gray-700 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            Watch Demo
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-orange-600 animate-bounce">50K+</div>
            <div className="text-gray-600 font-semibold">Happy Pets</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-orange-600 animate-bounce animation-delay-200">4.9★</div>
            <div className="text-gray-600 font-semibold">App Rating</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-orange-600 animate-bounce animation-delay-400">24/7</div>
            <div className="text-gray-600 font-semibold">AI Support</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl font-bold text-orange-600 animate-bounce animation-delay-600">100+</div>
            <div className="text-gray-600 font-semibold">Pet Breeds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
