import React from 'react';
import { CheckCircle2, UserPlus, Mail, Share2, Smartphone, Download, ShieldCheck } from 'lucide-react';

const RegisterLogin = () => {

  // Helper for the step cards
  const RegistrationCard = ({ icon, title, steps, accentColor = "text-blue-600" }) => (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full group">
      
      {/* Header Icon */}
      <div className={`w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors ${accentColor}`}>
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">{title}</h3>

      <ul className="space-y-4 flex-grow">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 size={20} className={`flex-shrink-0 mt-1 ${accentColor}`} />
            <span className="text-gray-600 text-sm leading-relaxed opacity-90">
              {step}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-100 opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <UserPlus size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Account Setup</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Register</span> & Login
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed opacity-90">
            Getting started is simple. Choose your preferred method below to create your secure betting account today.
          </p>
        </div>

        {/* --- 3-Column Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: General Steps */}
          <RegistrationCard 
            icon={<Smartphone size={28} />}
            title="General Registration"
            steps={[
              "First, download the official sports betting app for your device.",
              "Open the app and select the ‘Registration’ button.",
              "Provide basic information to complete the initial Sign Up.",
              "Upload your ID (Aadhaar/PAN) for mandatory verification."
            ]}
          />

          {/* Card 2: Email Method */}
          <RegistrationCard 
            icon={<Mail size={28} />}
            title="Registration by Email"
            steps={[
              "Select the 'Email' tab on the registration screen.",
              "Enter your currency, phone number, full name, and a strong password.",
              "Check your inbox for a verification link.",
              "Click the link to activate your account instantly."
            ]}
          />

          {/* Card 3: Social Method */}
          <RegistrationCard 
            icon={<Share2 size={28} />}
            title="Social Networks"
            steps={[
              "Select 'Social Networks and Messengers' option.",
              "Choose your preferred platform (Google, Facebook, Telegram, etc.).",
              "Authorize the app to access your basic profile info.",
              "Instant login without remembering a new password."
            ]}
          />

        </div>

        {/* Footer Tip */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-600 shadow-sm">
            <ShieldCheck size={18} />
            <span><strong>Pro Tip:</strong> Always verify your account immediately to ensure fast withdrawals later.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RegisterLogin;