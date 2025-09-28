import React, { useState } from 'react';
import { StructuredData } from './StructuredData';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOFaqProps {
  faqs: FAQItem[];
  className?: string;
}

export const SEOFaq: React.FC<SEOFaqProps> = ({ 
  faqs, 
  className = 'space-y-4' 
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <StructuredData type="faq" data={faqs} />
      <div className={className}>
        <h2 className="text-2xl font-bold mb-6">Questions Fréquentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleItem(index)}
              aria-expanded={openItems.includes(index)}
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SEOFaq;
