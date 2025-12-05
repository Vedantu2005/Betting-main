import React from 'react';
import { CreditCard, Wallet, Landmark, Gift, CheckCircle2, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

const DepositInfo = () => {

  // Helper for the method cards (eWallets & Banking)
  const MethodCard = ({ icon, title, steps }) => (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full group">
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3 group/item">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-blue-600 transition-colors flex-shrink-0"></div>
            <span className="text-gray-600 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
              {step}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Section 1: Bonuses (Featured Card) --- */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Gift size={150} className="text-blue-600" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-blue-600">
              <Gift size={40} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                How to Claim Bonuses?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Bonus codes and minimum deposits are the most prevalent ways to claim bonuses. Check your email for exclusive coupons or look for welcome offers. Minimum deposits typically range from <span className="text-gray-900 font-bold">$5 to $20</span>.
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-600 cursor-pointer text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 whitespace-nowrap">
              View Offers
            </button>
          </div>
        </div>

        {/* --- Section 2: Deposit Methods Header --- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <DollarSign size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Payment Guide</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Deposit Money on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Betting Apps?
            </span>
          </h2>
        </div>

        {/* --- Deposit Methods Grid --- */}
        <div className="space-y-8">

          {/* Method 1: Credit Cards (Wide Card) */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CreditCard size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Debit & Credit Card Deposits</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Go to 'Deposit' or 'Add Funds' section.",
                "Enter card number, expiry, and CVV.",
                "Confirm deposit details and amount.",
                "Complete 3D Secure / OTP verification."
              ].map((text, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex gap-3 items-start hover:bg-white hover:shadow-md transition-all">
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Methods 2 & 3: eWallets & Banking (2-Column) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <MethodCard 
              icon={<Wallet size={32} />}
              title="eWallet Methods"
              steps={[
                "Select deposit amount and choose PayPal, Skrill, or Neteller.",
                "You will be redirected to the eWallet login page.",
                "Enter your security credentials to authorize.",
                "Funds reflect instantly in your betting balance."
              ]}
            />

            <MethodCard 
              icon={<Landmark size={32} />}
              title="Online Banking"
              steps={[
                "Choose 'Net Banking' and select your specific bank.",
                "Log in with your bank credentials securely.",
                "Confirm the transfer amount via OTP.",
                "Transfers may take up to 24 hours to reflect.",
                "Always save the transaction reference ID."
              ]}
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default DepositInfo;