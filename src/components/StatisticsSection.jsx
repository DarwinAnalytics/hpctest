import React from 'react';
import { AccountCircle, Star, Public, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StatisticsSection = () => {
  const stats = [
    {
      icon: <AccountCircle className="text-blue-600 w-16 h-16" />,
      number: "10,000+",
      label: "Happy Farmers",
      description: "Nationwide network of successful agricultural partnerships"
    },
    {
      icon: <Star className="text-yellow-600 w-16 h-16" />,
      number: "50+",
      label: "Seed Varieties",
      description: "Innovative, high-performance seed solutions for diverse crops"
    },
    {
      icon: <Public className="text-teal-600 w-16 h-16" />,
      number: "25+",
      label: "States Covered",
      description: "Comprehensive agricultural support across the country"
    },
    {
      icon: <Home className="text-purple-600 w-16 h-16" />,
      number: "15+",
      label: "Years Experience",
      description: "Decades of agricultural research and sustainable innovation"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-blue-600 font-semibold tracking-wide uppercase mb-4">
            Our Impact
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Growing Success Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering farmers with cutting-edge agricultural solutions and unwavering support
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <div className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {stat.number}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {stat.label}
                </h4>
                <p className="text-gray-600 mb-4">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-100 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Agricultural Journey?
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover how our innovative seed solutions can elevate your farming potential and drive sustainable success
            </p>
            <div className="flex justify-center gap-6">
             <Link to='/contact'>
             <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl">
                Get Started
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                Learn More
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;