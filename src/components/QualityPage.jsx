import React from 'react';
import { motion } from 'framer-motion';

const QualityPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Quality Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6"
          >
            Uncompromising Seed Quality
          </motion.h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Our commitment to excellence begins with the most rigorous quality 
            control process in the agricultural industry, ensuring every seed 
            meets the highest standards of genetic purity and performance.
          </p>
        </div>
      </section>

      {/* Quality Certification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Certified Quality Assurance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Genetic Purity",
                description: "99.9% genetic consistency verified through advanced molecular testing.",
                icon: "🧬"
              },
              {
                title: "Germination Guarantee",
                description: "Minimum 95% germination rate backed by comprehensive testing.",
                icon: "🌱"
              },
              {
                title: "Seed Health",
                description: "Rigorous pathogen screening and zero-tolerance disease policy.",
                icon: "🛡️"
              }
            ].map((cert, index) => (
              <motion.div 
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-50 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-6xl mb-5 text-emerald-700">{cert.icon}</div>
                <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Our Comprehensive Quality Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "Seed Selection",
                description: "Meticulous genetic screening and selection of premium parent lines.",
                icon: "🔬"
              },
              {
                step: "Field Trials",
                description: "Extensive multi-location testing to validate performance and adaptability.",
                icon: "🌾"
              },
              {
                step: "Laboratory Analysis",
                description: "Advanced molecular and genetic purity testing using state-of-the-art equipment.",
                icon: "🧪"
              },
              {
                step: "Final Certification",
                description: "Rigorous final inspection and quality grading before packaging.",
                icon: "✅"
              }
            ].map((process, index) => (
              <motion.div 
                key={process.step}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="flex items-center mb-8 bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mr-6 text-emerald-700">{process.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                    {process.step}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Recognized Quality Certifications
          </h2>
          <div className="grid md:grid-cols-4 gap-8 items-center justify-center">
            {[
              "/iso-logo.png",
              "/global-gap-logo.png",
              "/usda-organic-logo.png",
              "/seed-association-logo.png"
            ].map((logo, index) => (
              <motion.div 
                key={logo}
                whileHover={{ scale: 1.1 }}
                className="flex justify-center items-center"
              >
                <img 
                  src={logo} 
                  alt={`Certification Logo ${index + 1}`} 
                  className="max-h-24 grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment CTA */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Quality Promise
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We don't just meet industry standards – we set them. Every seed 
            carries our commitment to agricultural excellence.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-white text-emerald-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            Learn More About Our Quality
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;