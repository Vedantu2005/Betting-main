import React, { useState } from 'react';
import { 
  Globe, Languages, Landmark, Award, Share2, Building2, Smartphone, // General
  Download, RefreshCcw, Upload, Clock, Ban, // Payments
  Gamepad2, Percent, // Games
  MessageCircle, Mail, // Support
  ArrowDownToLine, Coins, XCircle, UserX, PauseCircle, AlertTriangle, ClipboardCheck, Lock, UserCheck // Responsible
} from 'lucide-react';

const ReviewTabs = () => {
  const [activeTab, setActiveTab] = useState('General'); // Default set to Games to show the change immediately

  const tabs = [
    'General', 'Payments', 'Games', 'Customer Support', 'Responsible Gambling'
  ];

  // --- Content Data ---
  const generalData = [
    { icon: <Globe size={20} />, title: "Website", content: "https://www.bitstarz.com", link: true },
    { icon: <Share2 size={20} />, title: "Affiliate Program", content: "BitStarz Casino Affiliates", link: true },
    { icon: <Languages size={20} />, title: "Languages", content: "Chinese, English, Japanese, Russian" },
    { icon: <Building2 size={20} />, title: "Company", content: "Gareton B.V.", link: true },
    { icon: <Landmark size={20} />, title: "Established", content: "2014" },
    { icon: <Smartphone size={20} />, title: "Casino Type", content: "Instant Play, Mobile, Live Casino, Crypto Casino" },
    { icon: <Award size={20} />, title: "Licences", content: "Curacao Gaming Control Board" },
  ];

  const paymentsData = {
    col1: [
      { icon: <Download size={20} />, title: "Deposit Methods", content: "MasterCard, Visa, Bank Wire Transfer, CoinsPaid, Neteller, iDebit, instaDebit, Interac, Skrill, Paysafecard, Sofort, Giropay, Siru Mobile, Payz, Jeton, AstroPay Direct, Neosurf, CashtoCode, MuchBetter, MiFinity, MoonPay, Pay4Fun, Pix, Flexepin, Rapid Transfer, Bitcoin, Bitcoin Cash, Litecoin, Dogecoin, USD Coin, EPS, Ethereum, Tether, Cardano, TRON, Binance, Ripple" },
      { icon: <RefreshCcw size={20} />, title: "Currencies", content: "Australian dollars, Canadian dollars, Euros, Japanese yen, Norwegian kroner, New Zealand dollars, Polish zlotys, Russian rubles, US dollars, Bitcoin, Litecoin, Dogecoin, Ethereum, Bitcoin Cash, Tether, Brazilian reals, TRON, ADA, Ripple, USD Coin, Binance Coin, Monero" }
    ],
    col2: [
      { icon: <Upload size={20} />, title: "Withdrawal Methods", content: "Visa, MasterCard, CoinsPaid, Bank Wire Transfer, Neteller, AstroPay Direct, iDebit, instaDebit, Interac, Skrill, Payz, Jeton, MiFinity, MuchBetter, Pay4Fun, Pix, Bitcoin, Bitcoin Cash, Litecoin, Ethereum, Dogecoin, Binance, Ripple, Tether, Cardano, TRON, USD Coin" },
      { icon: <Clock size={20} />, title: "Withdrawal Times", list: ["EWallets: 0-1 hours", "Bank Transfers: 1-5 days", "Cheques: Not offered", "Card Payments: 1-5 days", "Pending Time: 0-1 hours"] },
      { icon: <Clock size={20} />, title: "Withdrawal Limit", content: "No Limits" }
    ]
  };

  const gamesData = [
    { 
      icon: <Gamepad2 size={20} />, 
      title: "Software", 
      content: "1spin4win, 1x2Games, 3 Oaks Gaming, 4ThePlayer, Amatic Industries, Amusnet (Former EGT Interactive), Avatar UX, Belatra, Betsoft, BGaming, Big Time Gaming, Slammer Studios, Blueprint Gaming, Boomerang, Booming Games, Booongo Gaming, Bulletproof Games, CT Interactive, Electric Elephant, Elk Studios, Endorphina, Evolution Gaming, Evoplay, Fantasma Games, Fugaso, GameArt, Gamevy, Gaming Corps, Gamzix, Golden Hero Games, Habanero, Hacksaw Gaming, High5Games, IGT (WagerWorks), Iron Dog Studios, iSoftBet, KA Gaming, Kalamba Games, Mancala Gaming, Mascot Gaming, NetEnt, NetGame, Nolimit City, Onlyplay, Pocket Games Soft, Platipus Gaming, Play'n GO, Playson, Playtech, Pragmatic Play, Push Gaming, Quickfire, Quickspin, Red Tiger Gaming, ReelPlay, Reflex Gaming, Relax Gaming, Skywind Group, Slot Factory, SmartSoft Gaming, Spinomenal, Thunderkick, TrueLab Games, Wazdan, Yggdrasil Gaming, GameBeat, Zillion Games, Games Global, Felix Gaming, Nucleus Gaming, Four Leaf Gaming, Peter & Sons, Novomatic, Spribe, Clawbuster"
    },
    { icon: <Percent size={20} />, title: "RTP", content: "Not stated" }
  ];

  const supportData = [
    { icon: <MessageCircle size={20} />, title: "Live Chat" },
    { icon: <Mail size={20} />, title: "Contact", content: "Support Email: support@bitstarz.com" }
  ];

  const responsibleData = {
    col1: [
      { icon: <ArrowDownToLine size={20} />, title: "Deposit Limit Tool" },
      { icon: <Coins size={20} />, title: "Wager Limit Tool" },
      { icon: <XCircle size={20} />, title: "Loss Limit Tool" },
      { icon: <Clock size={20} />, title: "Time/Session Limit Tool" },
      { icon: <UserX size={20} />, title: "Self-Exclusion Tool" },
    ],
    col2: [
      { icon: <PauseCircle size={20} />, title: "Cool Off/Time-Out Tool" },
      { icon: <AlertTriangle size={20} />, title: "Reality Check Tool", unavailable: true }, 
      { icon: <ClipboardCheck size={20} />, title: "Self-Assessment Test", unavailable: true }, 
      { icon: <Lock size={20} />, title: "Withdrawal Lock", unavailable: true }, 
      { icon: <UserCheck size={20} />, title: "Self-Exclusion Register Participation", content: "No" },
    ]
  };

  // --- Helper Component ---
  const InfoItem = ({ icon, title, content, list, link, unavailable }) => (
    <div className={`flex items-start gap-4 mb-8 ${unavailable ? 'opacity-50' : ''}`}>
      <div className="text-gray-400 mt-1 flex-shrink-0">{icon}</div>
      <div className="w-full">
        <h4 className={`font-bold text-gray-900 mb-2 text-lg ${unavailable ? 'line-through decoration-gray-400' : ''}`}>
          {title}
        </h4>
        {content && (
          <p className={`text-gray-600 text-sm leading-relaxed ${link ? 'text-blue-600 hover:underline cursor-pointer' : ''}`}>
            {content}
          </p>
        )}
        {list && (
          <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside">
            {list.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white flex justify-center pb-20 font-sans ">
      <div className="max-w-6xl w-full ">
        
        {/* Tabs Header */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 cursor-pointer font-semibold text-sm whitespace-nowrap transition-colors duration-200 border-b-2 
                ${activeTab === tab 
                  ? 'border-blue-600 text-blue-600 bg-blue-50' 
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px] pl-5">
          
          {/* General Tab */}
          {activeTab === 'General' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <div className="flex flex-col">
                  {generalData.slice(0, 4).map((item, idx) => <InfoItem key={idx} {...item} />)}
              </div>
              <div className="flex flex-col">
                  {generalData.slice(4).map((item, idx) => <InfoItem key={idx} {...item} />)}
              </div>
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === 'Payments' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <div>
                {paymentsData.col1.map((item, idx) => <InfoItem key={idx} {...item} />)}
              </div>
              <div>
                {paymentsData.col2.map((item, idx) => <InfoItem key={idx} {...item} />)}
              </div>
            </div>
          )}

          {/* Games Tab - FULL WIDTH FIX */}
          {activeTab === 'Games' && (
             <div className="w-full">
               {gamesData.map((item, idx) => (
                 <div key={idx} className="w-full">
                    <InfoItem {...item} />
                 </div>
               ))}
             </div>
          )}

          {/* Customer Support Tab */}
          {activeTab === 'Customer Support' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
               <div>
                 {supportData.map((item, idx) => <InfoItem key={idx} {...item} />)}
               </div>
             </div>
          )}

           {/* Responsible Gambling Tab */}
           {activeTab === 'Responsible Gambling' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
               <div>
                 {responsibleData.col1.map((item, idx) => <InfoItem key={idx} {...item} />)}
               </div>
               <div>
                 {responsibleData.col2.map((item, idx) => <InfoItem key={idx} {...item} />)}
               </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ReviewTabs;