import React from 'react';
import { CheckCircle2, Search, UserPlus, Smartphone, Download, ShieldCheck, PlayCircle } from 'lucide-react';

const HowToStartBetting = () => {
  
  // Helper for the styled list items
  const StepItem = ({ children }) => (
    <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-white hover:shadow-md transition-all duration-300 group">
      <div className="mt-1 flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors">
        <CheckCircle2 size={20} />
      </div>
      <span className="text-gray-600 text-base leading-relaxed group-hover:text-gray-900 transition-colors">
        {children}
      </span>
    </li>
  );

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-100 opacity-60 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header --- */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 font-bold tracking-widest uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <PlayCircle size={16} />
            <span>Quick Start Guide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How to Start Betting on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Betting Apps
            </span>
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Betting App Use Steps
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Before using any betting app, learn the "how to use a betting app steps". Install and use the app step-by-step to ensure a smooth experience.
            </p>
          </div>
        </div>

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Find & Download */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <Search size={120} className="text-blue-600" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100">
                <Download size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Find & Download</h3>
            </div>

            <ul className="space-y-4 relative z-10">
              <StepItem>
                Choose a betting platform to begin. Various betting apps have different <strong className="text-gray-900">minimum deposits</strong> and maximum payouts.
              </StepItem>
              <StepItem>
                After choosing a platform, download the program from a trusted source. Betting apps have websites. Visiting their official website is the safest way.
              </StepItem>
              <StepItem>
                Select the App Version for Your Device. <strong className="text-gray-900">Android and iOS</strong> are the main supported platforms.
              </StepItem>
              <StepItem>
                Select the device-specific version to install. Go to the mobile sport betting app download page (online or app store).
              </StepItem>
            </ul>
          </div>

          {/* Card 2: Register */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <UserPlus size={120} className="text-blue-600" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Register & Secure</h3>
            </div>

            <ul className="space-y-4 relative z-10">
              <StepItem>
                Register or sign in after installing the app. Complete the <strong className="text-gray-900">sign-up form</strong> to register for the first time.
              </StepItem>
              <StepItem>
                If you've registered on their website previously, you'll only need your log-in details to access the app.
              </StepItem>
              <StepItem>
                Signing up requires personal information and a secure password to verify your identity.
              </StepItem>
              <StepItem>
                Choose a strong password (8+ chars, digits, special characters) to safeguard your data and winnings.
              </StepItem>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowToStartBetting;