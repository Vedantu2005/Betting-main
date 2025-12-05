import React from 'react';
import { ShieldCheck, Globe, TrendingUp, Smartphone, CreditCard, Gift, Award, Scale } from 'lucide-react';

// --- Data for the 7 Factors ---
const factorsData = [
  {
    number: '01',
    icon: <Award size={32} />,
    title: 'Reputation and Trust',
    description: 'Check online reviews of bettors, industry watchdogs, and online forums to ensure the site has a decent reputation among online gamblers. Trustworthy platforms guarantee fair and safe betting.'
  },
  {
    number: '02',
    icon: <Scale size={32} />,
    title: 'Licenses and Regulation',
    description: 'Always choose licensed and regulated betting sites. Because they follow strict fair play rules. The UK Gambling Commission and Malta Gaming Authority issue licences.'
  },
  {
    number: '03',
    icon: <Globe size={32} />,
    title: 'Betting Market Variety',
    description: 'You should choose a site that offers variety in sports, leagues, and bets, which enhances excitement and gives you more opportunities to win.'
  },
  {
    number: '04',
    icon: <TrendingUp size={32} />,
    title: 'Competitor Odds',
    description: 'The online sites with competitive odds will let you win big. You can find the greatest bet pricing with odds comparison tools to maximize your returns.'
  },
  {
    number: '05',
    icon: <Smartphone size={32} />,
    title: 'UI/Mobile Compatibility',
    description: 'Bets go smoothly on an easy-to-navigate, mobile-responsive site. Choose mobile-friendly or app-based sites for betting on the go.'
  },
  {
    number: '06',
    icon: <CreditCard size={32} />,
    title: 'Payments and Security',
    description: 'Choose sites with safe payment alternatives like e-wallets (UPI, Paytm), credit cards, and bank transfers for smooth and encrypted transactions.'
  },
  {
    number: '07',
    icon: <Gift size={32} />,
    title: 'Bonuses & Promotions',
    description: 'Use sign-up, deposit, and free bet incentives. Note any restrictions or requirements in the terms and conditions to get the best value.'
  },
];

const KeyFactors = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
     

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <ShieldCheck size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Expert Guide</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Key Factors to Consider <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              in Sports Betting Sites
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just sign up anywhere. Use our checklist to ensure you're betting on a platform that is safe, fair, and profitable.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factorsData.map((factor, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden flex flex-col ${index === 6 ? 'lg:col-start-2' : ''}`}
            >
              
              {/* Large Background Number Watermark */}
              <div className="absolute top-0 right-2 text-[120px] font-black text-gray-900 opacity-[0.03] leading-none -mt-4 -mr-4 select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                {factor.number}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-blue-100 group-hover:border-blue-200 group-hover:scale-110 transition-all duration-300 relative z-10">
                {factor.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {factor.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {factor.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default KeyFactors;