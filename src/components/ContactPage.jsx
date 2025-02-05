import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Formspree endpoint (replace with your actual Formspree form ID)
      const response = await fetch('https://formspree.io/f/mldeyaqv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        // Handle error
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Rest of the component remains the same as in the original code
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Contact Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6"
          >
            Get in Touch with Us
          </motion.h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            We're here to answer your questions, discuss your agricultural needs, 
            and help you find the perfect seed solutions for your success.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">
                Send Us a Message
              </h2>
              
              {submitted ? (
                <div className="text-green-600 text-xl font-semibold">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  // Optional: Add Formspree form endpoint directly if preferred
                  // action="https://formspree.io/f/your_form_id"
                  // method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="w-full bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-800 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Rest of the component remains the same */}
            {/* ... */}
              {/* Contact Information */}
                        <motion.div 
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="space-y-8"
                        >
                          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                              Head Office
                            </h3>
                            <div className="space-y-3">
                              <p className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z" />
                                </svg>
                                (+91) 7909732727
                              </p>
                              <p className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                mahadevseedsind@gmail.com
                              </p>
                              <p className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                3591, Gali Kartar singh arya old sabzi mandi Delhi, 110007 
                              </p>
                            </div>
                          </div>
            
                          {/* Business Hours */}

                          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                              Branch Office
                            </h3>
                            <div className="space-y-3">
                              <p className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z" />
                                </svg>
                                (+91) 7909732727
                              </p>
                              <p className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                mahadevseedsind@gmail.com
                              </p>
                              <p className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                56/306 Udyog nagar palda indore (M.P), 452001
                              </p>
                            </div>
                          </div>
             
                        </motion.div>


          </div>
        </div>
      </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-8">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043236!2d-118.4041691!3d34.0901764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3e1d0d10c1%3A0x505ac6d524c1d48d!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1623984259412!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }} 
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;