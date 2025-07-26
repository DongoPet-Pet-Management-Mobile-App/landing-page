import React from 'react';
import { Heart, Smartphone, Shield, Scan, Brain, User } from 'lucide-react';

const Header: React.FC = () => {
  const features = [
    { icon: Scan, text: "Smart Food Scanner" },
    { icon: Brain, text: "AI Veterinary Assistant" },
    { icon: Shield, text: "Emergency Pet Card" },
    { icon: User, text: "Custom Pet Profiles" },
    { icon: Heart, text: "Health Monitoring" },
    { icon: Smartphone, text: "Mobile First Design" },
  ];

  return (
    <header className="relative z-20 py-4 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="DongoPet" className="w-[40px] h-[40px]" />
            <span className="text-2xl font-bold text-white">
              Dongo<span className="text-orange-400">Pet</span>
            </span>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Download App
          </button>
        </div>
        
        {/* Scrolling Features */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mx-8 text-white/80 hover:text-orange-400 transition-colors"
              >
                <feature.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
