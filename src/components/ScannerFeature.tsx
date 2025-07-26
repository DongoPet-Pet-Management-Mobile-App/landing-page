import React, { useState } from 'react';
import { Scan, Camera, CheckCircle, AlertTriangle, Heart, Zap, Database } from 'lucide-react';

interface ScanResult {
  name: string;
  safety: string;
  protein: string;
  fat: string;
  rating: number;
}

const ScannerFeature: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        name: "Premium Dog Food",
        safety: "Safe",
        protein: "28%",
        fat: "15%",
        rating: 4.5
      });
    }, 3000);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Smart Food Scanner
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Simply point your camera at any pet food or treat and get instant nutritional insights and safety warnings!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative animate-fade-in-left space-y-6">
            {/* Main Phone */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="bg-gray-900 rounded-2xl p-4 aspect-[9/16] relative overflow-hidden shadow-2xl">
                {/* Scanner Interface */}
                <div className="h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl flex flex-col items-center justify-center relative">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="w-32 h-32 border-4 border-orange-400 rounded-lg mb-4 relative">
                        <div className="absolute inset-0 bg-orange-400/20 rounded-lg animate-pulse"></div>
                        <div className="absolute inset-2 border-2 border-orange-400 rounded animate-ping"></div>
                      </div>
                      <p className="text-orange-400 font-semibold animate-bounce">Analyzing Food...</p>
                      <div className="flex justify-center mt-2 space-x-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce animation-delay-100"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce animation-delay-200"></div>
                      </div>
                    </div>
                  ) : scanResult ? (
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-bounce">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{scanResult.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-white/80">
                          <span>Safety:</span>
                          <span className="text-green-400">{scanResult.safety}</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Protein:</span>
                          <span className="text-blue-400">{scanResult.protein}</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Fat:</span>
                          <span className="text-yellow-400">{scanResult.fat}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setScanResult(null)}
                        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition-colors"
                      >
                        Scan Again
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-32 h-32 border-4 border-white/30 rounded-lg mb-4 flex items-center justify-center relative">
                        <Camera className="w-12 h-12 text-white/70" />
                        <div className="absolute inset-0 border-2 border-orange-400/50 rounded-lg animate-pulse"></div>
                      </div>
                      <button 
                        onClick={handleScan}
                        className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                      >
                        <Scan className="w-5 h-5 inline mr-2" />
                        Scan Food
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sample Food Images */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 border border-white/10 hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/1359330/pexels-photo-1359330.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Dog Food" 
                  className="w-full h-16 object-cover rounded-lg mb-2"
                />
                <p className="text-white/80 text-xs text-center">Premium Kibble</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 border border-white/10 hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/4498174/pexels-photo-4498174.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Cat Food" 
                  className="w-full h-16 object-cover rounded-lg mb-2"
                />
                <p className="text-white/80 text-xs text-center">Cat Treats</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-3 border border-white/10 hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Pet Treats" 
                  className="w-full h-16 object-cover rounded-lg mb-2"
                />
                <p className="text-white/80 text-xs text-center">Healthy Snacks</p>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse hover:animate-bounce">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nutrient Analysis</h3>
              </div>
              <p className="text-white/80">
                Get detailed breakdown of proteins, carbs, fats, and vitamins in any pet food product.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse animation-delay-200 hover:animate-bounce">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Safety Warnings</h3>
              </div>
              <p className="text-white/80">
                Instant alerts about ingredients that might be harmful to your specific pet breed and size.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse animation-delay-400 hover:animate-bounce">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Smart Recommendations</h3>
              </div>
              <p className="text-white/80">
                Personalized food suggestions based on your pet's age, breed, weight, and health conditions.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center animate-pulse animation-delay-600 hover:animate-bounce">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Allergy Detection</h3>
              </div>
              <p className="text-white/80">
                Advanced AI identifies potential allergens and provides alternative food suggestions for sensitive pets.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-pulse animation-delay-800 hover:animate-bounce">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Ingredient Database</h3>
              </div>
              <p className="text-white/80">
                Access to over 10,000 pet food ingredients with detailed nutritional information and safety ratings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerFeature;
