import React from 'react';
import { Scale, ShieldAlert, MapPin, Smartphone, AlertTriangle, FileText } from 'lucide-react';

const LegalBettingInfo = () => {
  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100 opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100 opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <Scale size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Legal Disclaimer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Legal Betting Apps <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              in India
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-90">
            Navigating the legal landscape of online betting in India can be complex. Here is a breakdown of the current regulations and state-wise restrictions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1: The Current Status */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">App Availability & Usage</h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed opacity-90 mb-6">
              Android and iOS sports betting applications are technically available but occupy a grey area. There are no specific central laws prohibiting the act of <span className="text-gray-900 font-semibold">downloading betting apps</span>.
            </p>

            <div className="mt-auto bg-orange-50 rounded-xl p-5 border-l-4 border-orange-500 flex gap-4">
              <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-gray-900 font-bold text-sm mb-1">State-wise Restrictions</h4>
                <p className="text-sm text-gray-600">
                  Legality varies by state. While some parts of India allow online betting, others have strict bans. Always check your local state laws before downloading.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: The Legal Act */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Public Gaming Act of 1867</h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed opacity-90 mb-6">
              The primary legislation is the <span className="text-gray-900 font-semibold">Public Gaming Act of 1867</span>, which outlaws operating a gambling house. However, this pre-internet law creates ambiguity regarding *online* platforms.
            </p>

            <div className="mt-auto bg-red-50 rounded-xl p-5 border-l-4 border-red-500 flex gap-4">
              <ShieldAlert className="text-red-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-gray-900 font-bold text-sm mb-1">Socio-Economic Concerns</h4>
                <p className="text-sm text-gray-600">
                  Despite rules, platforms market heavily. This raises financial risks, especially among younger demographics. We strongly advise responsible gambling practices.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 max-w-2xl mx-auto">
            <AlertTriangle size={12} className="inline mr-1 mb-0.5" />
            <strong>Disclaimer:</strong> The information provided here is for informational purposes only and does not constitute legal advice. Betting laws are subject to change.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LegalBettingInfo;