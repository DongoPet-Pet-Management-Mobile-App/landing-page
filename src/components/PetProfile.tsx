import React, { useState } from 'react';
import { Camera, Award, Calendar, Palette } from 'lucide-react';

const PetProfile: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const themes = [
    { id: 'default', name: 'Ocean Blue', colors: 'from-blue-500 to-cyan-500', accent: 'blue' },
    { id: 'sunset', name: 'Sunset Orange', colors: 'from-orange-500 to-red-500', accent: 'orange' },
    { id: 'forest', name: 'Forest Green', colors: 'from-green-500 to-emerald-500', accent: 'green' },
    { id: 'lavender', name: 'Lavender Purple', colors: 'from-purple-500 to-pink-500', accent: 'purple' },
  ];

  const handleThemeChange = (themeId : string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedTheme(themeId);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 animate-spin-slow">
            <img src="/favicon.png" alt="DongoPet" className="w-[120px] h-[60px]" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Pet Profiles
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Create beautiful, customizable profiles for each of your pets. Track their growth, achievements, and memories in style!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Preview */}
          <div className="animate-fade-in-left">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className={`bg-gradient-to-br ${themes.find(t => t.id === selectedTheme)?.colors || 'from-blue-500 to-cyan-500'} rounded-2xl p-6 text-white relative overflow-hidden transition-all duration-500 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-pulse animation-delay-400"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full -translate-x-8 -translate-y-8 animate-ping"></div>
                
                <div className="relative z-10">
                  {/* Profile Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                        🐕
                      </div>
                      <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform animate-bounce">
                        <Camera className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Max</h3>
                      <p className="text-white/80">Golden Retriever</p>
                      <p className="text-white/60 text-sm">Born: January 15, 2021</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-white/20 rounded-xl p-3 hover:bg-white/30 transition-colors duration-300 cursor-pointer hover:scale-105">
                      <div className="text-2xl font-bold animate-pulse">35</div>
                      <div className="text-xs text-white/80">kg</div>
                    </div>
                    <div className="text-center bg-white/20 rounded-xl p-3 hover:bg-white/30 transition-colors duration-300 cursor-pointer hover:scale-105">
                      <div className="text-2xl font-bold animate-pulse animation-delay-200">3</div>
                      <div className="text-xs text-white/80">years</div>
                    </div>
                    <div className="text-center bg-white/20 rounded-xl p-3 hover:bg-white/30 transition-colors duration-300 cursor-pointer hover:scale-105">
                      <div className="text-2xl font-bold animate-pulse animation-delay-400">12</div>
                      <div className="text-xs text-white/80">badges</div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Recent Achievements
                    </h4>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm hover:scale-110 transition-transform cursor-pointer animate-bounce">🏆</div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm hover:scale-110 transition-transform cursor-pointer animate-bounce animation-delay-200">💚</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm hover:scale-110 transition-transform cursor-pointer animate-bounce animation-delay-400">⭐</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center animate-spin-slow">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Theme Customization</h3>
              </div>
              <p className="text-white/80 mb-4">Choose from beautiful themes to personalize your pet's profile</p>
              
              <div className="grid grid-cols-2 gap-3">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      selectedTheme === theme.id 
                        ? 'border-orange-400 scale-105 shadow-lg shadow-orange-400/25' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <div className={`w-full h-8 bg-gradient-to-r ${theme.colors} rounded-lg mb-2 ${selectedTheme === theme.id ? 'animate-pulse' : ''}`}></div>
                    <p className="text-white text-sm">{theme.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Track Everything</h3>
              </div>
              <ul className="text-white/80 space-y-3">
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                  Growth milestones and weight tracking
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-100"></span>
                  Vaccination schedules and reminders
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-200"></span>
                  Favorite toys, foods, and activities
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-300"></span>
                  Photo memories and special moments
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-400"></span>
                  Health records and vet visits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProfile;