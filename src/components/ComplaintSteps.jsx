import React from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComplaintSteps = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white text-gray-600 font-sans p-6 md:p-12 flex justify-center">
      <div className="max-w-7xl w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-2xl md:text-4xl font-normal text-gray-900">
            Things to Know Before Filing a Casino Complaint
          </h1>
          
          {/* User Profile */}
          <div className="flex items-center gap-3 bg-blue-50 py-2 px-4 rounded-full border border-blue-100">
            <div className="w-8 h-8 rounded-full bg-white border border-blue-200 overflow-hidden flex items-center justify-center">
               <User size={20} className="text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-900 underline decoration-dotted decoration-gray-400 underline-offset-4 cursor-pointer hover:text-blue-600">
              Goran Gaćeša
            </span>
          </div>
        </div>

        {/* Intro Text */}
        <p className="text-lg text-gray-600 mb-12 max-w-4xl">
          Running into trouble with a casino can be stressful; AGCCS is there to take a part of that stress away and help you right the wrong.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1 Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Step 1</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Before submitting an online casino complaint, you should exhaust as many options as possible with the casino, including getting in touch with the online casino disputes team. Once you hit the wall with the casino, you are welcome to file a complaint with AGCCS.
            </p>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Step 2</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 flex-grow">
              Carefully read through AGCCS complaint guidelines. By adhering to our guidelines you can help us expedite the process, ensuring that we have enough grounds and information to intervene.
            </p>
            <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 transition-colors text-sm font-medium w-full md:w-auto text-center">
              Read guidelines
            </button>
          </div>

          {/* Step 3 Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Step 3</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 flex-grow">
              If you have exhausted all dispute resolution avenues with the casino and read through our guidelines carefully, you are welcome to submit a complaint via our complaint form.
            </p>
            <button
             onClick={()=>navigate('/register-complain')}
             className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded transition-colors text-sm font-bold shadow-md hover:bg-blue-700 w-full md:w-auto text-center">
              Submit complaint
            </button>
          </div>

        </div>

        {/* Footer / Tip Section */}
        <div className="space-y-6 text-sm text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-200">
          <p>
            <strong className="text-gray-900">Tip:</strong> AskGamblers <a href="#" className="text-blue-600 hover:underline">casino reviews</a> provide an overview of past and pending complaints against casinos. Perusing them can give you a deeper insight into the casino's AGCCS track record.
          </p>
          <p>
            In addition to our reviews being written by casino experts, they also include a unique <a href="#" className="text-blue-600 hover:underline">CasinoRank</a> score calculated via a complex algorithm that takes multiple criteria into consideration, from the diversity of casino deposit methods and withdrawal speed to customer support responsiveness and AGCCS history.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ComplaintSteps