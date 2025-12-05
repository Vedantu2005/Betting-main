import React from 'react';
import { UserPlus, Gift, MousePointerClick, Settings, CreditCard, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const RegistrationBonusInfo = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Section 1: Registration Guide --- */}
        <div className="mb-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <UserPlus size={16} />
              <span>Getting Started</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How to Register on a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Betting Website
              </span>
            </h2>
            <p className="text-lg text-gray-600 opacity-90">
              Joining a top betting site is simple. Follow this 3-step process to create your account and start playing securely.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative">
              <div className="absolute top-6 right-6 text-gray-200 font-black text-5xl opacity-40 group-hover:opacity-100 group-hover:text-blue-100 transition-all">01</div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100 mb-6 group-hover:scale-110 transition-transform">
                <MousePointerClick size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit & Initiate</h3>
              <p className="text-gray-600 leading-relaxed">
                Visit your selected betting site's homepage. Look for the <span className="text-gray-900 font-semibold">"Join Now"</span> or "Create Account" button, usually located in the top right corner.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative">
              <div className="absolute top-6 right-6 text-gray-200 font-black text-5xl opacity-40 group-hover:opacity-100 group-hover:text-blue-100 transition-all">02</div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100 mb-6 group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enter Details</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill in the registration form with accurate personal details. Create a secure username and password to protect your login credentials.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative">
              <div className="absolute top-6 right-6 text-gray-200 font-black text-5xl opacity-40 group-hover:opacity-100 group-hover:text-blue-100 transition-all">03</div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100 mb-6 group-hover:scale-110 transition-transform">
                <Settings size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Preferences</h3>
              <p className="text-gray-600 leading-relaxed">
                Set your deposit limits (daily/weekly), odds format, and time zone. Don't forget to enter a <span className="text-gray-900 font-semibold">Welcome Bonus Code</span> if you have one!
              </p>
            </div>

          </div>
        </div>

        {/* --- Section 2: Bonus Guide (Featured Card) --- */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-200  overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <Gift size={300} className="text-blue-600" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <Gift size={18} className="text-blue-600" />
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Maximizing Rewards</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Claim Your <br /> Betting Bonuses?
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Getting bonuses is easy and typically follows a standard procedure. Top sites offer welcome packages, free bets, and deposit matches to boost your bankroll.
              </p>

              <button className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
                View Top Bonus Offers <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                 <CheckCircle className="text-blue-600" size={24} />
                 Claiming Checklist
               </h3>
               
               <ul className="space-y-4">
                 <li className="flex items-start gap-4">
                   <div className="mt-1 p-1 bg-white rounded-full text-blue-600 shadow-sm">
                     <ArrowRight size={14} />
                   </div>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     <strong className="text-gray-900 block text-base mb-1">Register & Verify</strong>
                     Complete your registration and verify your email/phone number.
                   </p>
                 </li>
                 
                 <li className="flex items-start gap-4">
                   <div className="mt-1 p-1 bg-white rounded-full text-blue-600 shadow-sm">
                     <CreditCard size={14} />
                   </div>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     <strong className="text-gray-900 block text-base mb-1">First Deposit</strong>
                     Make a qualifying first deposit. Many bonuses trigger only after a minimum amount is deposited.
                   </p>
                 </li>

                 <li className="flex items-start gap-4">
                   <div className="mt-1 p-1 bg-white rounded-full text-blue-600 shadow-sm">
                     <FileText size={14} />
                   </div>
                   <p className="text-gray-600 text-sm leading-relaxed">
                     <strong className="text-gray-900 block text-base mb-1">Read T&Cs</strong>
                     Always check wagering requirements (e.g., 5x rollover) to understand how to convert bonus funds to cash.
                   </p>
                 </li>
               </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RegistrationBonusInfo;