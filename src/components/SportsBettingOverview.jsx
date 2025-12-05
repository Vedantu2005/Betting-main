import React from 'react';
import { Wallet, Gift, Trophy, Globe, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const SportsBettingOverview = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Gradient Blob */}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
             <Globe size={16} />
             <span>Market Analysis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sports Betting Sites <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Overview</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Convenience & Payments (Full Width) */}
          <div className="md:col-span-12 bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
               <Wallet size={120} className="text-blue-600" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
               <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shadow-sm border border-blue-100">
                 <Wallet size={32} />
               </div>
               <div className="flex-1">
                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Payment & Convenience</h3>
                 <p className="text-lg text-gray-600 leading-relaxed mb-4">
                   Various platforms exist online, and choosing the correct platform is crucial. The top 10 betting sites allow Indian users to use <span className="text-gray-900 font-semibold">local payment methods</span> (UPI, Paytm) and offer <span className="text-blue-600 font-bold">instant withdrawals</span>, allowing consumers to access their profits quickly and conveniently.
                 </p>
                 <div className="flex gap-3">
                   <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 font-medium">UPI Accepted</span>
                   <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 font-medium">Fast Payouts</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Card 2: Bonuses (Half Width) */}
          <div className="md:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:translate-y-[-4px] transition-transform duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 border border-blue-100">
                <Gift size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Generous Bonuses</h3>
            </div>
            <p className="text-gray-600 leading-relaxed flex-grow mb-6">
              Many of the best online betting firms provide generous welcome incentives. Play sites with free bonuses to entice new customers, letting them play with extra dollars. The biggest sites also serve worldwide markets with top-notch services.
            </p>
            <div className="mt-auto flex items-center text-blue-600 text-sm font-bold cursor-pointer group/link hover:text-blue-700">
              Check Latest Offers <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Cricket/IPL Focus (Half Width) */}
          <div className="md:col-span-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:translate-y-[-4px] transition-transform duration-300 flex flex-col relative">
            
            {/* Sparkle Icon absolute */}
            <div className="absolute top-6 right-6 text-yellow-500 animate-pulse">
              <Sparkles size={24} />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 border border-blue-100">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">IPL & Cricket Boom</h3>
            </div>
            <p className="text-gray-600 leading-relaxed flex-grow mb-6">
              Online IPL betting sites see a massive boom during the season. It is important to choose the finest IPL betting sites in India with <span className="text-gray-900 font-semibold">minimum deposit</span> options. Introductory bonuses help beginners get started easily.
            </p>
            <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-yellow-600 uppercase tracking-wider bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100 w-fit">
               <TrendingUp size={14} /> Trending Season
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SportsBettingOverview;