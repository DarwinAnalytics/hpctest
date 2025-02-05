import React, { useState } from 'react';
import { Button, IconButton, Rating } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Star from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "The yield from these seeds was exceptional. My wheat crop showed remarkable resistance to diseases and gave 20% higher yield than usual.",
      crop: "Wheat Farmer"
    },
    {
      name: "Anita Patel",
      location: "Gujarat",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "These organic seeds have transformed my farming practice. The germination rate is excellent, and the technical support provided is invaluable.",
      crop: "Vegetable Farmer"
    },
    {
      name: "Suresh Singh",
      location: "Haryana",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "I've been using their groundnut seeds for three seasons now. The quality is consistently high, and the results speak for themselves.",
      crop: "Groundnut Farmer"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-blue-600 font-semibold tracking-wide uppercase mb-4">
            Success Stories
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Farmers Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from farmers who have transformed their agricultural journey with our innovative seeds
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Previous Button */}
            <IconButton 
              onClick={prev} 
              className="absolute left-0 lg:-left-16 z-10 bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <ArrowLeftIcon className="text-gray-700 w-8 h-8" />
            </IconButton>

            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full transform transition-all duration-300 hover:shadow-3xl">
              <div className="p-12 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-blue-100">
                  <FormatQuoteIcon className="w-24 h-24" />
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Testimonial Image */}
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-6"
                  />

                  {/* Rating */}
                  <Rating
                    name="read-only"
                    value={testimonials[currentIndex].rating}
                    readOnly
                    precision={0.5}
                    sx={{
                      '& .MuiRating-iconFilled': { color: '#FFD700' },
                      '& .MuiRating-iconEmpty': { color: '#e4e5e9' }
                    }}
                  />

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-xl mb-8 max-w-2xl italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Farmer Details */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">
                      {testimonials[currentIndex].crop}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <IconButton 
              onClick={next} 
              className="absolute right-0 lg:-right-16 z-10 bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <ArrowRightIcon className="text-gray-700 w-8 h-8" />
            </IconButton>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Cultivate Success?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join a community of progressive farmers who are transforming agriculture with our innovative seed solutions
          </p>
       <Link to='/contact'>
       <Button 
            variant="contained" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg"
          >
            Start Your Agricultural Journey
          </Button>
       </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;