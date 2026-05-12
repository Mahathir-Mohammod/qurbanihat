"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqData from "../../../public/faq-data.json";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = faqData;

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const uniqueIndex = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex);
  };

  return (
    <main className="min-h-screen bg-gray-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Support
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our Qurbani services, animal selection,
            delivery process, and more.
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 rounded-2xl border border-white/10 overflow-hidden">

              <div className="bg-emerald-500/10 px-6 py-4 border-b border-white/5">
                <h2 className="text-xl font-semibold text-emerald-400">
                  {category.category}
                </h2>
              </div>

              <div className="divide-y divide-white/5">
                {category.questions.map((item, questionIndex) => {
                  const uniqueIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === uniqueIndex;

                  return (
                    <div key={questionIndex} className="transition-colors duration-200 hover:bg-white/5">
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:ring-inset">
                        <span className="text-lg font-medium text-white pr-4">
                          {item.question}
                        </span>
                        <span className="flex-shrink-0 ml-2">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </span>
                      </button>
                      
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="px-6 pb-5 pt-2">
                          <p className="text-gray-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            Can not find the answer you are looking for? Our support team is here to help you with any questions.
          </p>
          <a
            href="mailto:support@qurbanihat.com"
            className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors duration-200">
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;