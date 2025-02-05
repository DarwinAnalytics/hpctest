import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-emerald-800"
            >
              Growing Dreams, Planting Futures
            </motion.h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're more than just a seed company. We're cultivators of potential, 
              passionate about bringing nature's most promising seeds to farmers, 
              gardeners, and agricultural innovators.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="/aboutimageplantingfuture.png" 
              alt="Seed Company Overview" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower agricultural success by delivering high-quality, 
              innovative seeds that drive sustainable growth and transform 
              farming landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Our Seed Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Emily Green", role: "Lead Botanist", image: "/emily.jpg" },
              { name: "Michael Seeds", role: "Agricultural Strategist", image: "/michael.jpg" },
              { name: "Sarah Harvest", role: "Research Director", image: "/sarah.jpg" }
            ].map((member) => (
              <motion.div 
                key={member.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-emerald-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Innovation", 
                description: "Continuously pushing the boundaries of seed technology.",
                icon: "🌱"
              },
              { 
                title: "Sustainability", 
                description: "Committed to environmentally responsible agricultural practices.",
                icon: "🌍"
              },
              { 
                title: "Partnership", 
                description: "Growing success together with farmers and researchers.",
                icon: "🤝"
              }
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Grow Together?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our seeds can transform your agricultural vision.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-white text-emerald-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;