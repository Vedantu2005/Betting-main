import React from 'react';
import { CheckCircle2, Scale, ShieldCheck, Trophy, Globe, TrendingUp, MapPin, Search, Zap, Target, AlertCircle } from 'lucide-react';

const CricketBettingTipsPage = () => {

  // Helper for the tips list
  const TipItem = ({ text }) => (
    <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
      <CheckCircle2 size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
      <span className="text-gray-600 text-base leading-relaxed">{text}</span>
    </li>
  );

  // Helper for League Cards
  const LeagueCard = ({ icon, title, description, footerText, accentColor = "text-blue-600" }) => (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full group">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 bg-gray-50 rounded-xl shadow-sm border border-gray-100 group-hover:bg-white transition-colors ${accentColor}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      {footerText && (
        <div className="mt-auto pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">Key Details</p>
            <p className="text-gray-700 text-xs leading-relaxed font-medium">{footerText}</p>
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header & Intro --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <Target size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Winning Strategy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cricket <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Betting Tips</span>
          </h2>
        </div>

        {/* --- Section 1: Fundamentals (2 Cards) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"><Scale size={100} className="text-blue-600" /></div>
            <div className="flex items-center gap-4 mb-4">
               <div className="p-2 bg-blue-50 rounded-lg text-blue-600 border border-blue-100"><Scale size={24} /></div>
               <h3 className="text-xl font-bold text-gray-900">Understanding the Law</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Understanding Indian gambling law is essential. Knowing the legal status in your state is like having a roadmap because regulations vary. It provides secure betting so you can enjoy the excitement without worry.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity"><ShieldCheck size={100} className="text-blue-600" /></div>
            <div className="flex items-center gap-4 mb-4">
               <div className="p-2 bg-blue-50 rounded-lg text-blue-600 border border-blue-100"><ShieldCheck size={24} /></div>
               <h3 className="text-xl font-bold text-gray-900">Choosing a Platform</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Choosing established websites with licenses ensures data security. It's like finding a trustworthy friend for your betting trip. Always check user reviews to analyze a platform's reputation before joining.
            </p>
          </div>
        </div>

        {/* --- Section 2: The Checklist (Full Width) --- */}
        <div className="mb-20">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-lg relative">
             <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl transform -rotate-6 hidden md:block border border-blue-100">
               <Zap size={32} className="text-blue-600" />
             </div>
             
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 pl-0 md:pl-8">
               Guide to Smarter Wagering
             </h3>
             <p className="text-gray-600 mb-8 pl-0 md:pl-8 max-w-3xl">
               Use this detailed checklist to place informed bets. These tips help beginners and experts improve their cricket betting game.
             </p>

             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-8">
                <TipItem text="Learn cricket rules and format specifics." />
                <TipItem text="Track team form and player conditions." />
                <TipItem text="Choose a trustworthy licensed sportsbook." />
                <TipItem text="Create account and complete registration." />
                <TipItem text="Fund your account via secure methods." />
                <TipItem text="Discover betting markets and bet types." />
                <TipItem text="Select a match or tournament to wager on." />
                <TipItem text="Find value bets by analysing odds." />
                <TipItem text="Enter stake and confirm your bet." />
                <TipItem text="Follow live updates to track progress." />
                <TipItem text="Set a strict budget and wager sensibly." />
             </ul>
          </div>
        </div>

        {/* --- Section 3: Strategy for Major Leagues --- */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Tips for Major Leagues</h2>
           <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Analyze team form, fitness, and pitch reports. In leagues like IPL and Big Bash, weather forecasts are crucial. For bigger returns, wager on <strong className="text-gray-900">"Top Batsman"</strong> or <strong className="text-gray-900">"Most Wickets"</strong>.
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-600 font-bold text-sm uppercase tracking-wider bg-yellow-50 py-2 px-4 rounded-full w-fit mx-auto border border-yellow-100">
                <TrendingUp size={16} /> In-Play Betting Strategy
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Markets allow you to profit from dynamic match shifts. Keep up with live updates to maximize profits.
              </p>
           </div>
        </div>

        {/* --- Section 4: League Predictions Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <LeagueCard 
            icon={<Trophy size={24} />}
            title="IPL Predictions"
            description="The world's most prestigious T20 league happening in April-May. Eight teams play home and away. Four teams reach playoffs."
            footerText="CSK, Mumbai Indians, RCB, KKR, Sunrisers, Royals, Kings XI, Daredevils."
          />

          <LeagueCard 
            icon={<MapPin size={24} />}
            title="Karnataka Premier"
            description="Founded in 2009, the KPL is a popular regional T20 league involving round-robin and play-offs."
            footerText="Bangalore Brigadiers, Mysuru Warriors, Bellary Tuskers, Hubli Tigers."
            accentColor="text-green-600"
          />

          <LeagueCard 
            icon={<MapPin size={24} />}
            title="Tamil Nadu Premier"
            description="Founded in 2016, the TNPL is a T20 tournament that highlights regional talent with round-robin matches."
            footerText="Chepauk Super Gillies, Lyca Kovai Kings, Trichy Warriors, Dindigul Dragons."
            accentColor="text-orange-600"
          />

          <LeagueCard 
            icon={<Globe size={24} />}
            title="Caribbean Premier"
            description="The CPL has grown significantly since 2013. Franchises have salary caps and must include specific player types."
            footerText="Barbados Tridents, Jamaica Tallawahs, Trinbago Knight Riders."
            accentColor="text-purple-600"
          />

        </div>

        {/* --- Footer Note --- */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             <strong className="text-gray-900">IPL Betting Tips:</strong> Use dependable tips and expert predictions. Analyze head-to-head stats and profit from match dynamics with in-play betting.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CricketBettingTipsPage;