import React from 'react';
import { UserPlus, Target, Zap, ShieldCheck, Gift, Download, Settings, HelpCircle } from 'lucide-react';

// --- Data for the 6 Steps ---
const stepsData = [
  {
    number: '01',
    icon: <UserPlus size={32} />,
    title: 'Account Creation',
    description: 'Download the app and create an account. You will need to provide personal information and validate your identity (KYC) to ensure a secure environment.'
  },
  {
    number: '02',
    icon: <Target size={32} />,
    title: 'Placing Bets',
    description: 'Use the cricket or IPL betting app to find your favorite sports. Bet real money on teams and players using the competitive odds provided by the platform.'
  },
  {
    number: '03',
    icon: <Zap size={32} />,
    title: 'Live Betting & Updates',
    description: 'Bet during matches with odds that update live based on the game. After winning, withdraw your funds quickly via secure payment methods.'
  },
  {
    number: '04',
    icon: <ShieldCheck size={32} />,
    title: 'Security & Legality',
    description: 'Indian legal betting applications protect users with high-end encryption and regulation. Always use approved apps to ensure safety and data privacy.'
  },
  {
    number: '05',
    icon: <Gift size={32} />,
    title: 'Promotions & Incentives',
    description: 'During important events like the IPL, leverage exclusive free bets and deposit incentives designed to boost your betting bankroll.'
  },
  {
    number: '06',
    icon: <Download size={32} />,
    title: 'Download Process',
    description: 'Download the app from app stores or the official website APK links for the fastest, most reliable access to betting platforms.'
  },
];

const HowAppsWork = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 opacity-40 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <Settings size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Operational Guide</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Betting Apps</span> Work
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed opacity-90">
            Understanding the mechanism of cricket and sports betting apps is simple. Here is the typical workflow from signup to cashout.
          </p>
        </div>

        {/* --- Steps Card Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <div 
              key={step.number}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col overflow-hidden"
            >
              
              {/* Large Watermark Number */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-black text-gray-900 opacity-[0.03] leading-none select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300 relative z-10 group-hover:border-blue-200">
                {step.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
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

export default HowAppsWork;