import React from 'react';
import { Smartphone, Scale, Banknote, Globe, Info, TrendingUp } from 'lucide-react';

const OnlineBetting = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-6 relative z-10"> 
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Info size={16} />
            <span>Market Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Online Betting Apps: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              What You Need to Know
            </span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Mobile Trends */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Mobile Revolution</h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed opacity-90">
              Indians are increasingly using online sports betting to enjoy their favourite sports. Indian bettors like online sports betting because they can place bets from home and have a large range of sports and betting alternatives. <span className="text-gray-900 font-semibold">Mobile technology</span> and the widespread use of smartphones have further boosted online sports betting in India by allowing customers to wager on the go.
            </p>
            
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-green-600 uppercase tracking-wider bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
               <TrendingUp size={14} /> Rapidly Growing Sector
            </div>
          </div>

          {/* Card 2: Legal & Payments */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100">
                  <Scale size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Legal Landscape</h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed opacity-90 mb-6">
                Indian online sports betting law is complicated. Although unregulated, internet sports betting is generally considered legal. However, it is permitted in some states but not others, creating a fragmented market where different operators serve different regions.
              </p>
            </div>

            {/* Payment Callout Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex gap-4 items-start mt-4 relative overflow-hidden">
               {/* Subtle background highlight */}
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
               
               <div className="mt-1 text-gray-900">
                 <Banknote size={24} />
               </div>
               <div>
                 <h4 className="text-gray-900 font-bold text-sm mb-1">Unique Payment Methods</h4>
                 <p className="text-sm text-gray-600">
                   While online payments are growing, many Indians prefer cash. Betting companies now offer <span className="text-gray-900 font-bold">prepaid cards and vouchers</span> to facilitate cash-based digital transactions securely.
                 </p>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OnlineBetting;