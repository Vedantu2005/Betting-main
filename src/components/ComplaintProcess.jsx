import React from 'react';
import { Search, Mail, Gavel } from 'lucide-react';

const ComplaintProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <Search size={48} className="text-blue-600" strokeWidth={1.5} />,
      title: "Investigation begins",
      description: "You will hear back from us within two working days of submitting your complaint. We might have to ask for more details to understand your issue entirely."
    },
    {
      id: 2,
      icon: <Mail size={48} className="text-blue-600" strokeWidth={1.5} />,
      title: "Contacting the casino",
      description: "Our dispute resolution team then proceeds and contacts the casino. If the casino fails to respond, we will employ other avenues to resolve your issue."
    },
    {
      id: 3,
      icon: <Gavel size={48} className="text-blue-600" strokeWidth={1.5} />,
      title: "Solving your issue",
      description: "We work with you and the casino to ensure your issue is resolved to your satisfaction."
    }
  ];

  return (
    <div className="bg-white text-gray-600 font-sans p-6 md:p-10 -mt-10 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        
        {/* Header Section */}
        <div className="mb-8 space-y-4">
          <h1 className="text-2xl md:text-4xl font-normal text-gray-900">
            AskGamblers Online Casino Complaint Process Explained
          </h1>
          <p className="text-lg text-gray-600 max-w-5xl">
            Before it is resolved or closed, every complaint goes through the same process. Here’s a rough breakdown of your complaint’s journey with AGCCS:
          </p>
        </div>

        {/* Main Process Card Container */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl border border-gray-200 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Map through steps */}
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center relative z-10 group">
                {/* Icon Circle */}
                <div className="mb-6 p-5 rounded-full bg-blue-50 shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(step.icon, { className: "group-hover:text-white text-blue-600 transition-colors duration-300" })}
                  </div>
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Footer Text */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-200">
          Keep in mind that casino complaints can be complex, so patience is crucial. Handling gambling complaints takes time, which is why we have set up a notification system, allowing you to monitor the status of your complaint at all times. Once the casino responds to the AskGamblers complaint, you will be notified about the outcome and have a chance to reply. Finally, please refrain from discussing your complaint publicly (e.g., in the Forum) until it has been resolved or closed.
        </p>

      </div>
    </div>
  );
}

export default ComplaintProcess