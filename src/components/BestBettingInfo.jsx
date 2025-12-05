import React from 'react';
import { Smartphone, TrendingUp, Gift, Tv, CheckCircle2, HelpCircle } from 'lucide-react';

const BestBettingInfo = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 opacity-60 blur-[100px] rounded-full translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <HelpCircle size={16} />
              <span>Selection Criteria</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Best Betting Sites <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                in India
              </span>
            </h2>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 relative shadow-sm">
              {/* Decorative Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-2 rounded-lg shadow-lg shadow-blue-600/20">
                  <CheckCircle2 size={24} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Makes a Betting Site the Best in India?
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Every betting site and online bookmaker has benefits and cons, but they must excel in a few areas to make our best betting sites list in India. The betting odds must be valuable and offer a variety of markets. Our review crew highly recommends live betting with cash out and in-play features like live streaming. The top Indian betting sites should give sign-up incentives and promotions for frequent consumers.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Feature 1: Odds */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Competitive Odds</h4>
              <p className="text-sm text-gray-600">
                Valuable odds across a variety of sports markets are essential for long-term winning.
              </p>
            </div>

            {/* Feature 2: Live Features */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                <Tv size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Live Streaming</h4>
              <p className="text-sm text-gray-600">
                In-play features like Cash Out and HD Live Streaming enhance the thrill of the game.
              </p>
            </div>

            {/* Feature 3: Bonuses */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                <Gift size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sign-up Incentives</h4>
              <p className="text-sm text-gray-600">
                Generous welcome bonuses and regular promotions for frequent loyal consumers.
              </p>
            </div>

            {/* Feature 4: Mobile */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Mobile Priority</h4>
              <p className="text-sm text-gray-600">
                Top bookmakers must prioritise seamless mobile betting apps for on-the-go action.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BestBettingInfo;