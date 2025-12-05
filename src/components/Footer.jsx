import React from 'react';
import { Facebook, Twitter, Instagram, Mail, ShieldCheck, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 relative overflow-hidden">
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Column (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h2 className="text-4xl font-extrabold italic tracking-tighter text-gray-900 flex items-center gap-2">
              <span className="text-blue-600">CRICKET</span>
            </h2>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              We cover all aspects of online betting in depth on our website to make
              you a well-informed bettor. Be sure to read all of our guidance to fully
              understand the rules, risks, and how to bet responsibly.
            </p>

            {/* 18+ Badge */}
            
          </div>

          {/* Navigation Column (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-sm"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Betting Sites', 'Betting Apps', 'Betting Tips'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Social Column (Spans 4 cols) */}
          <div className="lg:col-span-4">
              <h3 className="text-gray-900 text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-600 rounded-sm"></span> Support & Connect
            </h3>
            
            <ul className="space-y-3 mb-8">
              {['Contact Us', 'News', 'Write For Us'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-center text-gray-500">
            Copyright © {currentYear} 7Cricket. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;