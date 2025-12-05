import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// --- FAQ Data ---
const faqData = [
  {
    question: "Is 7Crickets.in Safe and Free to Use?",
    answer: "Yes, our platform is completely free to use. We provide information and reviews to help you make informed decisions. We also only recommend sites that are safe, secure, and licensed."
  },
  {
    question: "Where Can I Find Legal Cricket Betting Offers?",
    answer: "We list various legal and vetted betting offers from reputable sites. Please check our 'Betting Sites' and 'Betting Apps' sections for the latest promotions available in your region."
  },
  {
    question: "How Do I Deposit and Withdraw Money from Cricket Betting Sites?",
    answer: "Most sites offer multiple payment methods, including UPI, NetBanking, e-wallets (like Skrill or Neteller), and cryptocurrency. Withdrawals typically go back to the same method used for depositing."
  },
  {
    question: "What Are the Most Popular Cricket Betting Markets?",
    answer: "The most popular markets include Match Winner, Top Batsman, Top Bowler, Man of the Match, Total Runs in an Over, and 'To Win the Toss'. We cover strategies for all these markets in our 'Betting Tips' section."
  },
  {
    question: "How Long Does It Take to Receive My Winnings?",
    answer: "This varies by site and method. E-wallets are often the fastest (within 24 hours), while bank transfers may take 3-5 business days. We review withdrawal speeds for each site we list."
  },
];

const FaqItem = ({ item, isOpen, toggle }) => {
  return (
    <div 
      className={`mb-4 rounded-2xl transition-all duration-300 border ${
        isOpen 
          ? 'bg-blue-50/30 border-blue-500 shadow-md' 
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
            isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50'
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

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(); // First item open by default

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

export default FaqSection;