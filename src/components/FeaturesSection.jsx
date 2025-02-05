import React from 'react';
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NatureIcon from "@mui/icons-material/Nature";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircleIcon className="text-blue-600 w-16 h-16" />,
      title: "Premium Quality Seeds",
      description: "Carefully selected and rigorously tested to ensure maximum germination rates and optimal plant health",
      color: "blue"
    },
    {
      icon: <EmojiEventsIcon className="text-green-600 w-16 h-16" />,
      title: "Certified Organic",
      description: "100% organic seeds, free from GMOs and harmful chemicals, supporting sustainable agricultural practices",
      color: "green"
    },
    {
      icon: <NatureIcon className="text-teal-600 w-16 h-16" />,
      title: "High Yield Varieties",
      description: "Advanced hybrid seed technologies developed to maximize crop productivity and resilience",
      color: "teal"
    },
    {
      icon: <TrendingUpIcon className="text-purple-600 w-16 h-16" />,
      title: "Growth Guarantee",
      description: "Comprehensive performance promise backed by our advanced agricultural research and development",
      color: "purple"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-blue-600 font-semibold tracking-wide uppercase mb-4">
            Our Commitment
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Seeds?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience innovative agricultural solutions designed to empower farmers and enhance crop performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <div className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className={`inline-block text-${feature.color}-600 font-semibold hover:underline`}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
         <Link to='/contact'>
         <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 hover:shadow-xl">
            Explore Our Seed Collection
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;