import React, { useState } from 'react';
import { MessageCircle, Brain, Clock, Star } from 'lucide-react';

const AIVet: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');

  const questions = [
    {
      question: "Is chocolate dangerous for dogs?",
      answer: "Yes! Chocolate is toxic to dogs. It contains theobromine which can cause vomiting, diarrhea, and in severe cases, seizures. Keep all chocolate away from your furry friend! 🍫❌"
    },
    {
      question: "How often should I feed my cat?",
      answer: "Adult cats should eat 2-3 meals per day. Kittens need more frequent feeding (3-4 times daily). Always provide fresh water and measure portions based on your cat's weight! 🐱🍽️"
    },
    {
      question: "What vaccines does my puppy need?",
      answer: "Core vaccines include DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza) and Rabies. Your vet will create a schedule starting at 6-8 weeks. Non-core vaccines depend on lifestyle! 💉🐶"
    },
    {
      question: "My pet is limping, what should I do?",
      answer: "Check for visible injuries, foreign objects, or swelling. Restrict activity and contact your vet if limping persists over 24 hours or if there's severe pain. Don't give human pain meds! 🦴⚠️"
    },
    {
      question: "Best diet for senior dogs?",
      answer: "Senior dogs need easily digestible, high-quality protein with joint support supplements like glucosamine. Reduce calories if less active, increase fiber, and consider smaller, frequent meals! 👴🐕"
    },
    {
      question: "How to train a new puppy?",
      answer: "Start with basic commands (sit, stay, come), use positive reinforcement with treats and praise. Consistency is key! House training takes 4-6 months. Socialize early but safely! 🎾📚"
    },
    {
      question: "Signs of pet allergies?",
      answer: "Watch for excessive scratching, red/watery eyes, sneezing, skin rashes, or digestive issues. Common allergens include certain foods, pollen, dust mites, and flea saliva! 🤧🔍"
    },
    {
      question: "When to visit the vet?",
      answer: "Annual checkups are essential! Visit immediately for: difficulty breathing, seizures, severe vomiting/diarrhea, inability to urinate, or any sudden behavior changes! 🏥⏰"
    }
  ];

  const handleQuestionClick = (questionObj: { question: string; answer: string }) => {
    setIsTyping(true);
    setCurrentQuestion(questionObj.question);
    setTimeout(() => {
      setIsTyping(false);
      setCurrentAnswer(questionObj.answer);
    }, 2000);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            AI Veterinary Assistant
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Get instant, professional pet care advice 24/7 from our AI-powered veterinary assistant!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chat Interface */}
          <div className="animate-fade-in-left">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="bg-gray-900 rounded-2xl p-4 h-96 overflow-hidden">
                <div className="space-y-4">
                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-orange-600 text-white p-3 rounded-lg max-w-xs">
                      <p>Hi! I'm your AI vet assistant. How can I help you take better care of your pet today? 🐾</p>
                    </div>
                  </div>
                  
                  {/* User Message */}
                  {currentQuestion && (
                  <div className="flex gap-3 justify-end">
                    <div className="bg-slate-600 text-white p-3 rounded-lg max-w-xs">
                      <p>{currentQuestion}</p>
                    </div>
                    <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  )}
                  
                  {/* AI Response */}
                  {(currentQuestion || currentAnswer) && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-orange-600 text-white p-3 rounded-lg max-w-xs">
                      {isTyping ? (
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-100"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-200"></div>
                        </div>
                      ) : (
                        <p>{currentAnswer}</p>
                      )}
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Features & Quick Questions */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6" />
                24/7 Availability
              </h3>
              <p className="text-white/80 mb-4">
                Get instant answers to your pet care questions anytime, anywhere. No waiting for vet appointments!
              </p>
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="text-white/80 ml-2">4.9/5 accuracy rating</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Popular Questions:</h3>
              <div className="space-y-2">
                {questions.map((questionObj, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(questionObj)}
                    className="w-full text-left p-3 bg-white/5 rounded-lg text-white/80 hover:bg-orange-500/20 hover:text-white transition-all duration-200 hover:scale-105 border border-white/10"
                  >
                    {questionObj.question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVet;