import React from 'react';
import { Layout, Tv, CreditCard, Zap, ShieldCheck, Headphones, Smartphone, CheckCircle2 } from 'lucide-react';

// --- Feature Data Mapping ---
const featuresData = [
  {
    icon: <Layout size={32} />,
    title: 'Simple User Interface',
    description: 'Apps should have simple, intuitive interfaces. Users should rapidly find sports, betting options, and odds via the app. A sleek, organised software makes it easy for novices and experts to use.'
  },
  {
    icon: <Tv size={32} />,
    title: 'Broadcasting & Live Events',
    description: 'A top app covers football, basketball, and niche sports. Vital features include In-Play Betting, Live Streaming, and strong security measures (2FA, KYC) during registration.'
  },
  {
    icon: <CreditCard size={32} />,
    title: 'Payment Method Integration',
    description: 'Convenience requires many payment alternatives. Credit/debit cards, eWallets (PayPal, Skrill), and cryptocurrency transactions are essential for secure deposits and withdrawals.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Real-time Odds Updates',
    description: 'Update odds and betting lines instantly. Users stay interested via push notifications. Features like bet tracking, editing, and welcome bonuses (free bets, cashback) retain users.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Responsible Gambling Tools',
    description: 'Self-exclusions, deposit limitations, and reality checks encourage responsible gaming. Apps should provide resources and links to problem gambling organizations.'
  },
  {
    icon: <Headphones size={32} />,
    title: 'Customer Service',
    description: 'A responsive customer service system is crucial. Questions and concerns may require assistance via live chat, phone, or email support at any time.'
  }
];

const BettingAppsFeatures = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 opacity-60 blur-[120px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 opacity-80 blur-[100px] rounded-full -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Intro Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Smartphone size={16} className="text-blue-600" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Mobile Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Betting Apps <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                in India
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed opacity-90 mb-6">
              Many Indian betting applications are available online; they offer seamless experiences across sports. The best betting applications have user-friendly designs that help in navigation, real-time updates, and solid security.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 relative shadow-sm">
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-lg shadow-lg shadow-blue-600/20">
              <CheckCircle2 size={24} />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Popular cricket betting apps</strong> offer real-money IPL and other cricket betting opportunities. These legal betting applications in India provide a safe platform for fans. Football and IPL betting applications are also in India's top 10. Easy-to-download online betting apps make betting more accessible.
            </p>
          </div>
        </div>

        {/* --- Features Grid Section --- */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Features to Look for <span className="text-blue-600">in the Best Apps</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100 group-hover:border-blue-200">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed opacity-90 flex-grow">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BettingAppsFeatures;