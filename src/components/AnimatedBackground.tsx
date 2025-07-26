import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      
      {/* Falling Paw Prints */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-orange-400/30 text-2xl"
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
      
      {/* Additional floating elements */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-3 h-3 bg-orange-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Floating hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-orange-400/20 text-lg animate-float"
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