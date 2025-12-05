import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// --- FAQ Data ---
const faqData = [
  {
    question: "Which betting site is best in India?",
    answer: "Yes, our platform is completely free to use. We provide information and reviews to help you make informed decisions. We also only recommend sites that are safe, secure, and licensed." 
  },
  {
    question: "Are betting sites legal in India in 2025?",
    answer: "Yes, our platform is completely free to use. We provide information and reviews to help you make informed decisions. We also only recommend sites that are safe, secure, and licensed." 
  },
  {
    question: "Which betting app has the lowest minimum deposit?",
    answer: "Yes, our platform is completely free to use. We provide information and reviews to help you make informed decisions. We also only recommend sites that are safe, secure, and licensed." 
  },
  {
    question: "How do I withdraw money from betting sites in India?",
    answer: "Yes, our platform is completely free to use. We provide information and reviews to help you make informed decisions. We also only recommend sites that are safe, secure, and licensed." 
  },
  {
    question: "What payment methods do Indian betting sites accept?",
    answer: "Yes, our platform is completely free to use. We provide information and reviews to help you make informed decisions. We also only recommend sites that are safe, secure, and licensed." 
  }
];

const FaqItem = ({ item, isOpen, toggle }) => {
  return (
    <div 
      className={`mb-4 rounded-2xl transition-all duration-300 border ${
        isOpen 
          ? 'bg-blue-50 border-blue-500 shadow-md' 
          : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
      }`}
    >
      <button
        onClick={toggle}
        className="flex items-center justify-between cursor-pointer w-full p-6 text-left focus:outline-none"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
          isOpen ? 'text-blue-600' : 'text-gray-900'
        }`}>
          {item.question}
        </span>
        
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
            isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100'
        }`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const SiteFaq = () => {
  const [openIndex, setOpenIndex] = useState(-1); // First item open by default, or set to -1 for all closed

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-10 md:py-10 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-blue-50 opacity-60 blur-[120px] pointer-events-none"></div> */}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4 border border-blue-100">
             <HelpCircle className="text-blue-600 w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SiteFaq;