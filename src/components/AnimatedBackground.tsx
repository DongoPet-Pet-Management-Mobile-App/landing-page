import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Falling Paw Prints - darker for visibility */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-orange-600/40 text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-50px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            animationName: 'fall',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          🐾
        </div>
      ))}
      
      {/* Additional floating elements - darker */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-3 h-3 bg-orange-600/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Floating hearts - darker */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-red-500/30 text-lg animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
