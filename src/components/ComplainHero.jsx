import React from 'react'
import { HeartHandshake, Coins, ClipboardList } from 'lucide-react';


const ComplainHero = () => {
  // Data for the three feature columns
  const features = [
    {
      id: 1,
      icon: <HeartHandshake size={64} className="text-blue-600" strokeWidth={1.5} />,
      text: "Since the launch of AskGamblers Casino Complaint Service, we have consistently provided an independent and expeditious complaints resolution between players and online casinos."
    },
    {
      id: 2,
      icon: <Coins size={64} className="text-blue-600" strokeWidth={1.5} />,
      text: "With transparency as one of our core values, AskGamblers was the first ever affiliate website to offer users a public complaint process."
    },
    {
      id: 3,
      icon: <ClipboardList size={64} className="text-blue-600" strokeWidth={1.5} />,
      text: "When handling complaints, there is no room for compromise. That is why our complaints decisions are fact-based, relying on rock-solid, undisputed, and unambiguous evidence."
    }
  ];

  // Data for the statistics cards
  const stats = [
    { id: 1, value: "34,212", label: "PROCESSED COMPLAINTS" },
    { id: 2, value: "$78,070,198", label: "MONEY RETURNED" },
    { id: 3, value: "26,652", label: "RESOLVED COMPLAINTS" },
    { id: 4, value: "104,888", label: "RECEIVED COMPLAINTS" }
  ];

  return (
    <div className="bg-white text-gray-900 font-sans flex flex-col items-center py-16 pt-30">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 space-y-2 px-6">
        <h1 className="text-3xl md:text-5xl font-normal tracking-wide text-gray-900">
          AskGamblers Online Casino Complaints
        </h1>
        <p className="text-lg md:text-xl font-bold text-gray-600 mt-2">
          With over 80% resolved complaints, AGCCS has your back!
        </p>
      </div>

      {/* Features Grid (Icons + Text) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20 px-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center">
            {/* Icon Container with specific styling to match the look */}
            <div className="mb-6 p-4 rounded-full bg-blue-50 shadow-sm border border-blue-100">
              {feature.icon}
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xs">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Cards Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 rounded-lg py-10 px-4 text-center shadow-md flex flex-col justify-center items-center group"
          >
            <span className="text-3xl md:text-4xl font-normal text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300 group-hover:text-blue-600">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider group-hover:text-gray-700">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ComplainHero