import React from 'react';

const ShowcaseImages: React.FC = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Happy Golden Retriever",
      description: "Healthy and active with DongoPet care"
    },
    {
      url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Adorable Kitten",
      description: "Growing strong with proper nutrition"
    },
    {
      url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Playful Puppy",
      description: "Energetic and well-fed companion"
    },
    {
      url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Curious Cat",
      description: "Exploring safely with AI guidance"
    },
    {
      url: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Loyal Companion",
      description: "Protected by smart health monitoring"
    },
    {
      url: "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Peaceful Rest",
      description: "Comfortable and cared for"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Happy Pets, Happy Lives
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            See how DongoPet is making a difference in the lives of pets and their families around the world!
          </p>
        </div>

        {/* Cascade Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`animate-fade-in-up hover:scale-105 transition-all duration-500 ${
                index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'
              } ${index % 3 === 1 ? 'lg:mt-8' : index % 3 === 2 ? 'lg:mt-16' : 'lg:mt-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl mb-4 group">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 animate-pulse">
                    {image.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-800">
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-orange-300 mb-2 animate-bounce">98%</div>
            <div className="text-white/80 text-sm">Pet Health Improved</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-yellow-300 mb-2 animate-bounce animation-delay-200">2M+</div>
            <div className="text-white/80 text-sm">Foods Analyzed</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-green-300 mb-2 animate-bounce animation-delay-400">24/7</div>
            <div className="text-white/80 text-sm">AI Vet Support</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-blue-300 mb-2 animate-bounce animation-delay-600">150+</div>
            <div className="text-white/80 text-sm">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseImages;