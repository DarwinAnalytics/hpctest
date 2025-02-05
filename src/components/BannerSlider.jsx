import React from 'react';
import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

const BannerSlider = () => {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Text Content */}
              <div className="sm:text-center lg:text-left lg:col-span-6">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Premium Seeds for</span>
                  <span className="block text-green-600">Better Growth</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                  Discover our collection of high-quality seeds for sustainable farming and agriculture. Trusted by farmers worldwide.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                  <Link to='/contact'>
                  <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Explore Now
                      {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
              
              {/* Image Space */}
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative rounded-lg shadow-lg w-full h-64 lg:h-96 bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-400"><img src='/landingpage.png' alt="lpage"></img></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;