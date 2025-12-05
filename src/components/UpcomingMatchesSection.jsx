import React from 'react';
import { Facebook, Send, Instagram } from 'lucide-react'; 

const UpcomingMatchesSection = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      {/* Optional: Subtle background glow for modern feel (Adjusted for Light Mode) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">

          {/* Left Content Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-block w-16 h-1 bg-[#0a192f] rounded-full mb-2"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Upcoming Cricket Matches & Predictions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cricket is more than a sport for many people, they love to discuss and gives their opinions about the teams, players, and so on things. They also predicts and many times they guess right. For such people online cricket betting can be a great option to earn money with their intuition. They can place bets on cricket matches using your phone or computer. You can bet on different odds like who will win, how many runs will be scored, or even who will hit the most sixes.
            </p>
          </div>

          {/* Right Card Section */}
          <div className="lg:col-span-2 w-full">
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#0a192f] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              
              {/* Decorative accent inside card */}
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Send size={64} className="text-blue-600 transform rotate-12" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-wide">
                  Join our cricket betting community
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-blue-600 to-transparent mb-4 opacity-50"></div>
                
                <p className="text-gray-600 mb-8 text-base font-medium">
                  Follow us on social media to stay up to date!
                </p>
                
                <div className="flex items-center gap-5">
                  <a 
                    href="#" 
                    className="group/icon w-14 h-14 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-600/30"
                    aria-label="Facebook"
                  >
                    <Facebook size={26} className="group-hover/icon:scale-110 transition-transform" />
                  </a>
                  
                  <a 
                    href="#" 
                    className="group/icon w-14 h-14 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl text-gray-600 hover:text-white hover:bg-blue-500 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/30"
                    aria-label="Telegram"
                  >
                    <Send size={26} className="group-hover/icon:scale-110 transition-transform" />
                  </a>

                  <a 
                    href="#" 
                    className="group/icon w-14 h-14 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:border-transparent hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-500/30"
                    aria-label="Instagram"
                  >
                    <Instagram size={26} className="group-hover/icon:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingMatchesSection;