import React, { useState } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        {isOpen ? <ExpandLess className="text-green-600" /> : <ExpandMore className="text-green-600" />}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

const MahadevSeedsFAQ = () => {
  const faqData = [
    {
      question: "What types of seeds does Mahadev Seeds offer?",
      answer: "Mahadev Seeds provides a wide range of high-quality agricultural seeds, including varieties of grains, vegetables, pulses, and special hybrid seeds tailored for different climatic conditions and farming needs.",
    },
    {
      question: "How can I purchase seeds from Mahadev Seeds?",
      answer: "You can purchase our seeds through our official website, authorized agricultural dealers, or directly contact our sales team. We offer both bulk and retail packaging to cater to farmers and gardeners of all scales.",
    },
    {
      question: "Are your seeds certified?",
      answer: "Yes, all our seeds are certified by relevant agricultural authorities. We ensure high germination rates, purity, and compliance with national agricultural standards.",
    },
    {
      question: "Do you provide agricultural guidance with your seeds?",
      answer: "Absolutely! We offer comprehensive agricultural support, including planting guidelines, crop management advice, and technical assistance to help farmers maximize their crop yield.",
    },
    {
      question: "What makes Mahadev Seeds different from other seed companies?",
      answer: "We pride ourselves on continuous research, innovative breeding techniques, and a deep understanding of local agricultural needs. Our seeds are developed to provide higher yields, disease resistance, and adaptability to various environmental conditions.",
    },
    {
      question: "How do I store seeds for optimal germination?",
      answer: "Store our seeds in a cool, dry place away from direct sunlight. Keep them in their original sealed packets and maintain a consistent temperature between 10-20°C with low humidity to preserve seed viability.",
    },
    {
      question: "Do you offer seeds for organic farming?",
      answer: "Yes, we have a dedicated line of organic seeds produced using sustainable agricultural practices. These seeds are ideal for organic farming and meet all organic certification requirements.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Mahadev Seeds - Frequently Asked Questions</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Can't find your answer? Contact our customer support at{' '}
          <a href="mailto:support@mahadevseeds.com" className="text-green-600 ml-1 hover:underline">
            support@mahadevseeds.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default MahadevSeedsFAQ;