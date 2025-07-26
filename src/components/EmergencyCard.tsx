import React, { useState } from 'react';
import { AlertCircle, Share2, Phone, MapPin, Heart } from 'lucide-react';

const EmergencyCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/30 backdrop-blur-sm rounded-full mb-6 animate-pulse">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Emergency Pet Card
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Store all your pet's critical information in one place. Share instantly with vets, pet sitters, or emergency services with just one tap!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Card */}
          <div className="animate-fade-in-left">
            <div className="relative h-96 perspective-1000 hover:scale-105 transition-transform duration-300">
              <div 
                className={`relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer hover:shadow-2xl ${isFlipped ? 'rotate-y-180' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl hover:shadow-red-500/25">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Emergency Card</h3>
                    <AlertCircle className="w-8 h-8 animate-pulse" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                        <Heart className="w-8 h-8" fill="currentColor" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Buddy</h4>
                        <p className="text-white/80">Golden Retriever • 3 years</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-colors duration-300">
                      <p className="font-semibold mb-2">Emergency Contact:</p>
                      <p>Dr. Sarah Johnson</p>
                      <p>📞 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <p className="text-center text-sm text-white/60 mt-8 animate-pulse">Click to flip</p>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white shadow-2xl hover:shadow-blue-500/25">
                  <h3 className="text-xl font-bold mb-4">Medical Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="hover:bg-white/10 p-2 rounded transition-colors">
                      <p className="font-semibold">Allergies:</p>
                      <p>Chicken, dairy products</p>
                    </div>
                    <div className="hover:bg-white/10 p-2 rounded transition-colors">
                      <p className="font-semibold">Medications:</p>
                      <p>Apoquel 5.4mg (twice daily)</p>
                    </div>
                    <div className="hover:bg-white/10 p-2 rounded transition-colors">
                      <p className="font-semibold">Last Vaccination:</p>
                      <p>March 15, 2024 (Rabies, DHPP)</p>
                    </div>
                    <div className="hover:bg-white/10 p-2 rounded transition-colors">
                      <p className="font-semibold">Microchip ID:</p>
                      <p>982000123456789</p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-white/60 mt-8 animate-pulse">Click to flip back</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse hover:animate-bounce">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">One-Tap Sharing</h3>
              </div>
              <p className="text-white/80">
                Instantly share your pet's emergency information via QR code, text, or email with veterinarians, pet sitters, or emergency services.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse hover:animate-bounce">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Emergency Contacts</h3>
              </div>
              <p className="text-white/80">
                Store multiple emergency contacts including your primary vet, emergency animal hospital, and trusted friends or family.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse hover:animate-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Location Services</h3>
              </div>
              <p className="text-white/80">
                Automatically include your current location when sharing emergency information to help responders reach you quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCard;