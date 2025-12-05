import React from 'react';
import { Trophy, MousePointerClick, DollarSign, CheckCircle, HelpCircle } from 'lucide-react';

const guideData = [
  {
    step: '01',
    icon: <Trophy size={32} />,
    title: 'Choose a sport to bet on',
    description: 'First, pick a sport, league, or event to bet on. Choose a sport you know for beginners. Learning about a sport and its players improves your odds of making accurate forecasts.'
  },
  {
    step: '02',
    icon: <MousePointerClick size={32} />,
    title: 'Choose a Wager',
    description: 'Choose your bet after choosing a sport. Many wagers are available. First-time bettors should choose money lines, which are easy to grasp and anticipate.'
  },
  {
    step: '03',
    icon: <DollarSign size={32} />,
    title: 'Determine Bet Amount',
    description: 'Your first bet is near! Decide how much to bet before making your choice. Start small. Make sure the reward is fair, but only gamble what you can afford to lose.'
  },
  {
    step: '04',
    icon: <CheckCircle size={32} />,
    title: 'Place Wager',
    description: 'You chose a sport, bet, and stake. Now, just lock in your bet. Check your bet information and click ‘Place Bet’ to confirm your wager instantly.'
  },
];

const BettingGuide = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 opacity-60 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <HelpCircle size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Beginner's Tutorial</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Betting Guide – 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
               How to Bet?
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Learn how to place your first bet in 4 simple steps. Don't worry if you're new; our tutorial takes you through the basics.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guideData.map((step, index) => (
            <div 
              key={step.step}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col md:flex-row gap-6 items-start"
            >
              
              {/* Step Number Background Watermark */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-900 opacity-[0.03] select-none pointer-events-none">
                {step.step}
              </div>

              {/* Icon Box */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default BettingGuide;