import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import ScannerFeature from './components/ScannerFeature';
import AIVet from './components/AIVet';
import EmergencyCard from './components/EmergencyCard';
import PetProfile from './components/PetProfile';
import DownloadCTA from './components/DownloadCTA';
import ShowcaseImages from './components/ShowcaseImages';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <ScannerFeature />
        <AIVet />
        <EmergencyCard />
        <PetProfile />
        <ShowcaseImages />
        <DownloadCTA />
        <ContactUs />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black/30 backdrop-blur-lg border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2024 DongoPet. Made with ❤️ for pet lovers everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;