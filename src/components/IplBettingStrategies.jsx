import React from 'react';
import { Brain, TrendingUp, Shield, Globe, Zap, Target, PieChart, BookOpen, AlertTriangle, Calculator, Layers, AlertCircle } from 'lucide-react';

// --- Data for the 5 Strategy Cards ---
const strategiesData = [
  {
    icon: <Brain size={32} />,
    title: 'Deep Data Analysis',
    description: 'Research team statistics, player performances, and match history. Monitor recent form and injuries for smarter judgments.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Find Winning Trends',
    description: 'Focus on teams surpassing opponents. Identifying successful trends early lets you remain ahead and make calculated bets.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Iron Discipline',
    description: 'Follow betting goals religiously. Don\'t chase losses or make emotional bets. Discipline is key to long-term success.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Explore Markets',
    description: 'Don\'t just bet on match winners. Explore top batsman, total sixes, and other markets to find hidden gems.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Stay Updated',
    description: 'Cricket is fast-paced. Follow news, social media, and expert analysis to get an edge in decision making.'
  }
];

const IplBettingStrategies = () => {
  return (
    <section className="bg-white py-10 relative overflow-hidden">
      
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <Target size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Pro Masterclass</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Key Strategies for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              IPL Betting Success
            </span>
          </h2>
        </div>

        {/* --- Top 5 Strategy Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {strategiesData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
          {/* Filler card for the 6th slot */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 flex flex-col justify-center items-center text-center shadow-sm">
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Want More?</h3>
             <p className="text-gray-600 mb-4">Read our full guide below.</p>
             <BookOpen size={32} className="text-blue-600 animate-bounce" />
          </div>
        </div>

        {/* --- Detailed Content Sections --- */}
        <div className="space-y-16">

          {/* Section 1: Introduction & Research */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
               <h2 className="text-3xl font-bold text-gray-900 mb-6">
                 Maximize Your Winnings
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-6">
                 Ready to up your IPL betting game? Strategy is needed to maximise earnings and minimise losses. Our goal at RealSprinters is to maximise your IPL betting experience with expert advice.
               </p>
               <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
                 <h4 className="text-gray-900 font-bold mb-2 flex items-center gap-2"><Brain size={20} className="text-blue-600" /> Research Techniques</h4>
                 <p className="text-gray-600 text-sm">
                   Knowledge is power. Investigate teams, players, recent form, head-to-head records, and pitch conditions. Don't just bet impulsively; find value bets with good odds where bookies may have mispriced probability.
                 </p>
               </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Creating Your Strategy</h3>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <div className="mt-1 text-blue-600"><Layers size={24} /></div>
                   <div>
                     <h5 className="text-gray-900 font-bold">Build a System</h5>
                     <p className="text-sm text-gray-600 mt-1">Structure your bets around aims and interests. Track wins, losses, and performance to identify strengths.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="mt-1 text-purple-600"><PieChart size={24} /></div>
                   <div>
                     <h5 className="text-gray-900 font-bold">Data & Statistics</h5>
                     <p className="text-sm text-gray-600 mt-1">Analyze past data patterns. Look at scoring averages and home-away records to personalise your approach.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>

          {/* Section 2: Bankroll Management (Highlighted) */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
               <Calculator size={200} className="text-gray-900" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-bold uppercase mb-4 border border-green-200">
                  <Calculator size={14} /> Crucial Advice
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Bankroll Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Effective bankroll management is crucial. Stick to your IPL betting budget religiously. To handle losses and gamble responsibly, divide your bankroll into smaller units and only bet a small percentage on each wager.
                </p>
                <div className="space-y-4">
                   <p className="text-gray-600 text-sm">
                     <strong className="text-gray-900">Manage Variance:</strong> Sports betting involves volatility. Understanding this helps you stay calm during losing streaks.
                   </p>
                   <p className="text-gray-600 text-sm">
                     <strong className="text-gray-900">Use Tools:</strong> Odds comparison software and betting calculators help you find the best value and calculate potential payouts accurately.
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Continuous Learning & Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-yellow-500" /> Advanced Tools
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Use advanced platforms like Ufabet Direct for professional forecasts. Keeping up with injuries, weather, and team news is vital for placing informed bets.
                </p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-blue-500" /> Continuous Learning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sports betting evolves. Experienced players adjust strategies over time. Engage in forums and communities to discuss trends and learn from experts.
                </p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target size={20} className="text-red-500" /> Personalized Tips
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn principles like moneyline and point spreads. Understanding odds interpretation is the first step to creating your own winning formula.
                </p>
             </div>
          </div>

          {/* Section 4: Avoiding Mistakes (Alert) */}
          <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500 shadow-sm">
             <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-red-500 mt-1 shadow-sm border border-red-100">
                   <AlertCircle size={24} />
                </div>
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 mb-4">
                     Avoiding Common <span className="text-red-600">Betting Mistakes</span>
                   </h2>
                   <p className="text-gray-700 leading-relaxed mb-4">
                     Bettors often fail due to erratic behavior and lack of accountability. Problems arise from <strong>how</strong> bets are made, not just bad luck.
                   </p>
                   <p className="text-gray-700 leading-relaxed">
                     Avoid emotional betting, chasing losses, and betting without research. Learning from mistakes hones your talents and leads to a profitable, successful betting journey.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IplBettingStrategies;