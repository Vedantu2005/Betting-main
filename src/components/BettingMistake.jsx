import React from 'react';
import { AlertTriangle, Coins, TrendingUp, Flame, Target, UserX, Heart, Crosshair, ShieldAlert } from 'lucide-react';

// --- Data for the Mistakes ---
const mistakesData = [
  {
    icon: <Coins size={32} />,
    title: 'Changing Unit Size',
    description: 'Changing bet size based on recent performance is risky. Avoid doubling down when hot or chasing losses when cold. We recommend "flat-betting" (risking 1-3% of bankroll) to protect against bankruptcy and ensure long-term ROI.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Reacting to Trends',
    description: 'Novice bettors often overrate winning teams and fade losing ones based on recent streaks. Oddsmakers inflate lines for favorites knowing the public will bite. Smart bettors look for value in undervalued teams rather than chasing hype.'
  },
  {
    icon: <Flame size={32} />,
    title: 'Betting Too Much',
    description: 'Betting for "action" on 10–15 games a night is a recipe for disaster. One bad night can ruin your bankroll. Overbetting increases risk significantly. Stick to your best 1-3 researched games of the day.'
  },
  {
    icon: <Target size={32} />,
    title: 'Unrealistic Goals',
    description: 'Expecting to win 70% of bets or hit massive parlays instantly is unrealistic. Professional bettors aim for a 53-55% win rate to be profitable. Setting high expectations often leads to frustration and poor decisions.'
  },
  {
    icon: <UserX size={32} />,
    title: 'Buying "Guaranteed" Picks',
    description: 'Avoid "touts" selling guaranteed locks. Because the industry is unregulated, scammers use fake records and flashy marketing to sell bad picks. If it looks too good to be true, it probably is. Trust your own research.'
  },
  {
    icon: <Heart size={32} />,
    title: 'Heart vs. Head',
    description: 'Betting with your heart (on favorite teams or players) usually leads to losses. Emotional bettors ignore stats and misjudge odds. Successful betting requires cold, calculated analysis, often going against public sentiment.'
  },
  {
    icon: <Crosshair size={32} />,
    title: 'Fighting the Sharps',
    description: 'Don\'t bet against professional ("sharp") money. Watch for "Reverse Line Movement"—when the line moves opposite to the betting percentage. This indicates smart money is on the other side. Follow the sharps, don\'t fight them.'
  }
];

const BettingMistake = () => {
  return (
    <section className="bg-white py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-100 opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-100 opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6 shadow-sm">
             <ShieldAlert size={16} className="text-red-600" />
             <span className="text-red-600 text-xs font-bold uppercase tracking-widest">Risk Management</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Common Betting <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Mistakes</span> <br />
            & How to Avoid Them
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-90">
            Even experienced bettors fall into these traps. Learn to identify and avoid these common pitfalls to protect your bankroll and improve your strategy.
          </p>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mistakesData.map((item, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col ${
                index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : '' /* Center last item on large screens */
              }`}
            >
              
              {/* Icon */}
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 shadow-sm border border-red-100 group-hover:scale-110 transition-transform duration-300 group-hover:text-white group-hover:bg-red-600">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {item.description}
              </p>

              {/* Caution Corner Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity duration-300 text-red-500 pointer-events-none">
                <AlertTriangle size={32} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BettingMistake;