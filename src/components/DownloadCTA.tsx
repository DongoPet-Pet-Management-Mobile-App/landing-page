import React from 'react';
import { Download, Apple, Smartphone, Star } from 'lucide-react';

const DownloadCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Meet Your Pet's Best Friend?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Join thousands of happy pet parents who trust DongoPet to keep their furry friends healthy and happy!
          </p>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
          <button className="group bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px]">
            <Apple className="w-8 h-8" />
            <div className="text-left">
              <div className="text-xs text-gray-300">Download on the</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
          </button>
          
          <button className="group bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px]">
            <Smartphone className="w-8 h-8" />
            <div className="text-left">
              <div className="text-xs text-gray-300">Get it on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </button>
        </div>

        {/* Social Proof */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-600">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-yellow-400 mb-2">4.9★</div>
            <div className="text-white/80">App Store Rating</div>
            <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
            <div className="text-white/80">Happy Pet Parents</div>
            <div className="text-green-400 mt-2">🐾 Growing daily!</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
            <div className="text-white/80">Foods Scanned</div>
            <div className="text-blue-400 mt-2">📊 Always learning</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 animate-fade-in-up animation-delay-800">
          <h3 className="text-3xl font-bold text-white mb-4">
            Your Pet Deserves the Best Care
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Don't wait - download DongoPet today and give your furry friend the smart, loving care they deserve. It's free to start!
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
            Download Now - FREE
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;