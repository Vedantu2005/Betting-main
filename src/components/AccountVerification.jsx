import React from 'react';
import { ShieldCheck, FileText, UserCheck, Upload, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

const AccountVerification = () => {
  return (
    <section className="bg-white py-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 opacity-60 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-100 opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
             <UserCheck size={16} className="text-blue-600" />
             <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">KYC Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Account <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Verification</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-90">
            Account verification (KYC) is essential for betting on any sports app. It ensures smooth withdrawals, prevents account blockage, and secures your winnings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* --- Left Column: Requirements (Spans 5) --- */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm border border-blue-100">
                  <FileText size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-blue-600">
                  <h4 className="text-gray-900 font-bold mb-2">Identity Proof</h4>
                  <p className="text-sm text-gray-600">
                    Indian punters must present KYC documents such as:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500">
                    <li>• Aadhaar Card</li>
                    <li>• PAN Card</li>
                    <li>• Driver's License</li>
                    <li>• Passport</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-green-500">
                  <h4 className="text-gray-900 font-bold mb-2">Financial Proof</h4>
                  <p className="text-sm text-gray-600">
                    For quick cashouts, users may need to provide a <strong className="text-gray-900">Bank Statement</strong> or utility bill to verify their address and financial status.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Steps (Spans 7) --- */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
               <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                 <ShieldCheck className="text-blue-600" /> Verification Steps
               </h3>

               <div className="space-y-8 relative">
                 {/* Vertical Line */}
                 <div className="absolute top-4 left-6 w-0.5 h-[85%] bg-gray-200 -z-10"></div>

                 {/* Step 1 */}
                 <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold shadow-sm">1</div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Log In & Access Profile</h4>
                     <p className="text-gray-600 text-sm">
                       Click the link to visit the bookmaker's site. Click “Login” and enter your credentials. Navigate to the <strong className="text-gray-900">Personal Profile</strong> section.
                     </p>
                   </div>
                 </div>

                 {/* Step 2 */}
                 <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 text-gray-500 font-bold shadow-sm">2</div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Fill Details</h4>
                     <p className="text-gray-600 text-sm">
                       Complete any blank fields under “Personal Profile”. Provide your accurate name, phone number, nationality, currency, and email address.
                     </p>
                   </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 text-gray-500 font-bold shadow-sm">3</div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Upload Documents</h4>
                     <p className="text-gray-600 text-sm">
                       Go to the <strong className="text-gray-900">KYC / Verification</strong> tab. Upload clear snapshots of your ID and bank documents. Ensure all corners are visible.
                     </p>
                   </div>
                 </div>

                 {/* Step 4 */}
                 <div className="flex gap-6">
                   <div className="w-12 h-12 bg-green-50 rounded-full border-2 border-green-500 flex items-center justify-center flex-shrink-0 text-green-600 font-bold shadow-sm">
                     <CheckCircle2 size={20} />
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Confirm & Wait</h4>
                     <p className="text-gray-600 text-sm">
                       Click “Confirm” after uploading. The team will review your docs (usually within 24-48 hours). Once approved, your withdrawals will be unlocked.
                     </p>
                   </div>
                 </div>

               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AccountVerification;