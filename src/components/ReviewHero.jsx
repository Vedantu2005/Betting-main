import React from 'react';
import { Trophy, Clock, Plus, Minus, ExternalLink, User } from 'lucide-react';

const ReviewHero = () => {
    return (
        <div className="mt-15 bg-white text-gray-900 p-4 md:p-10 flex justify-center font-sans">
            <div className="max-w-6xl w-full">

                {/* Top Section: Header & Stats */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-8">

                    {/* Logo Area */}
                    <div className="flex-shrink-0">
                        <img
                            src="/app5.png"
                            alt="BitStarz Casino"
                            className="w-32 h-32 rounded-full border-4 border-gray-100 shadow-xl object-cover"
                        />
                    </div>

                    {/* Title and Stats */}
                    <div className="flex-grow w-full">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">BitStarz Casino</h1>

                        <div className="flex flex-wrap gap-6 md:gap-10">
                            {/* Stat 1: CasinoRank */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center text-lg shadow-md">
                                    10
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base underline decoration-dotted underline-offset-4 decoration-gray-400 cursor-pointer hover:text-yellow-600 text-gray-900">CasinoRank</span>
                                    <span className="text-gray-500 text-xs md:text-sm">Trusted</span>
                                </div>
                            </div>

                            {/* Stat 2: Player Rating */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-lime-500 text-white font-bold flex items-center justify-center text-lg shadow-md">
                                    8.8
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 text-sm md:text-base">Player rating</span>
                                    <a href="#" className="text-gray-500 text-xs md:text-sm underline hover:text-blue-600">607 reviews</a>
                                </div>
                            </div>

                            {/* Stat 3: Complaint Response */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-lg shadow-md">
                                    <Clock size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 text-sm md:text-base">Complaint response</span>
                                    <span className="text-gray-500 text-xs md:text-sm underline decoration-dotted decoration-gray-400">1 day avg.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider & Badges */}
                <div className="border-t border-gray-200 py-4 mb-6 flex flex-wrap gap-6 items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded text-xs font-bold">A</div>
                        <span className="text-sm md:text-base text-gray-700 font-medium">AskGamblers Certificate of Trust</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Trophy size={18} className="text-yellow-500" />
                        <span className="text-sm md:text-base text-gray-700 font-medium">Best Casino 2022</span>
                    </div>
                </div>

                {/* Reviewer Intro */}
                <div className="flex items-start gap-4 mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex-shrink-0 border border-gray-200 shadow-sm">
                        <div className="w-full h-full flex items-center justify-center">
                            <User size={20} className="text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <div className="text-blue-600 underline cursor-pointer font-semibold text-sm md:text-base mb-1">
                            Bojana Djordjevic
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We objectively review and rate online casinos, thanks to <a href="#" className="underline text-blue-600 hover:text-blue-800">our CasinoRank algorithm</a> built on over a decade's experience working with casinos and players alike. <span className="text-gray-900 font-semibold">Get the truth. Then play.</span>
                        </p>
                    </div>
                </div>

                {/* Pros and Cons Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* What we like */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                            What we like
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-gray-500 border border-gray-300 rounded-full p-0.5">
                                    <Plus size={12} />
                                </div>
                                <span className="text-gray-600 text-sm md:text-base">No fees and instant payments for e-wallet and crypto players</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-gray-500 border border-gray-300 rounded-full p-0.5">
                                    <Plus size={12} />
                                </div>
                                <span className="text-gray-600 text-sm md:text-base">Dedicated crypto casino game selection</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-gray-500 border border-gray-300 rounded-full p-0.5">
                                    <Plus size={12} />
                                </div>
                                <span className="text-gray-600 text-sm md:text-base">Instant response on live chat and quick to resolve complaints</span>
                            </li>
                        </ul>
                    </div>

                    {/* What we don't like */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                            What we don't like
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 text-gray-500 border border-gray-300 rounded-full p-0.5">
                                    <Minus size={12} />
                                </div>
                                <span className="text-gray-600 text-sm md:text-base">Slower transaction times for Visa card and bank transfer payments</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ReviewHero;