import React from 'react';
import { MessageSquare, WifiOff, Smartphone, UserCheck, MapPin, BellRing, Cpu, CheckCircle2, SmartphoneCharging } from 'lucide-react';

// --- Data for the Mobile App Advantages ---
const guideData = [
  {
    icon: <MessageSquare size={32} />,
    title: 'Fast Feedback',
    description: 'Player assessments provide direct user insights, acting as an ongoing debugging program. Operators can review comments live to fix technical flubs and customize the experience.'
  },
  {
    icon: <WifiOff size={32} />,
    title: 'Offline Access',
    description: 'Check account balances and evaluate past bets without an internet connection. This offline integration encourages users to utilize the app regardless of connectivity.'
  },
  {
    icon: <SmartphoneCharging size={32} />,
    title: 'User Experience Focus',
    description: 'Prioritizing speed and accessibility, mobile apps are perfect for sports betting where real-time decision-making can affect outcomes significantly.'
  },
  {
    icon: <UserCheck size={32} />,
    title: 'Personalized Experience',
    description: 'Apps analyze user behavior to create tailored betting alternatives and notifications. This personalization makes betting engaging and helps retain loyal consumers.'
  },
  {
    icon: <MapPin size={32} />,
    title: 'Location Services',
    description: 'Geolocation ensures regulatory compliance by using the device GPS to allow players to bet only in legal jurisdictions, shielding users from legal issues.'
  },
  {
    icon: <BellRing size={32} />,
    title: 'Push Notifications',
    description: 'Send timely information on game starts and last-minute lines via push notifications. Instant updates enhance app involvement and user retention unlike websites.'
  },
  {
    icon: <Cpu size={32} />,
    title: 'Technology Integration',
    description: 'Apps link effectively with device capabilities (biometrics) and other apps (e-wallets, social media), creating a seamless, secure, and fast user experience.'
  }
];

const WhyChooseMobileApps = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <Smartphone size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">App Advantages</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Mobile Apps?</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-90">
            Mobile betting offers distinct advantages over traditional desktop sites. From offline access to personalized alerts, see why millions of Indian bettors prefer apps.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guideData.map((step, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : '' /* Center last item on medium screens if needed, or let it flow */
              }`}
            >
              
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {step.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity duration-300 text-blue-600">
                <CheckCircle2 size={40} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMobileApps;