import React from 'react';
import { Trophy, TrendingUp, Users, ShieldCheck, Zap } from 'lucide-react';

const IplBettingInfo = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 opacity-60 blur-[80px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10"> 

        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
             <Trophy size={14} />
             <span>IPL Season 17</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cricket & IPL Betting Sites in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">India</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-blue-600 pl-6">
            IPL cricket betting sites are the fastest cricket betting option. <span className="text-gray-900 font-semibold">Season 17 of IPL is here!</span> Your best IPL gambling guide is TheTopBookies. With 74 matches scheduled this year, IPL satta online is set to grow.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200  relative overflow-hidden">
          
          {/* Decorative Icon Background */}
          <div className="absolute -right-10 -top-10 text-gray-50 opacity-80 transform rotate-12 pointer-events-none">
             <TrendingUp size={300} />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Title & Key Stat */}
            <div className="lg:col-span-4">
               <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    The Popularity of Cricket Betting
                  </h3>
               </div>
               
               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-2 text-blue-600 font-bold">
                    <Zap size={20} /> Did you know?
                  </div>
                  <p className="text-sm text-gray-600">
                    The IPL matches attract <span className="text-gray-900 font-bold">90%</span> of the Indian population. Digital media has caused this sector to grow rapidly.
                  </p>
               </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-8 space-y-8">
              
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  India has more love towards cricket and especially for the IPL. Due to India's love of cricket and digital media, cricket betting or IPL cricket betting site has grown rapidly.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Many cricket bettors who are interested in regular betting are looking for a trustworthy online betting services with attractive odds, convenience, and rapid withdrawals. Even though there are many best sports betting sites available online, due to their powerful platforms, real-time betting possibilities, and wide range of payment methods, the <span className="text-gray-900 font-semibold">top 10 Indian betting sites</span> attract many consumers.
                </p>
              </div>

              <div className="flex gap-4 items-start p-4 bg-blue-50 rounded-xl border border-blue-100">
                 <ShieldCheck className="flex-shrink-0 text-blue-600 mt-1" size={24} />
                 <div>
                    <h4 className="text-gray-900 font-bold text-lg mb-1">Trust & Security</h4>
                    <p className="text-gray-600 text-base">
                      Online bettors look for secure sites with bonuses and live matches. India's engagement in the global betting business highlights the importance of choosing licensed, secure platforms for an entertaining experience.
                    </p>
                 </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IplBettingInfo;