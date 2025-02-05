import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight as ArrowRightIcon,
   // Use Eco for a leaf icon
  WbSunny as SunIcon, // Use WbSunny for a sun icon
  WaterDrop as DropletsIcon, // Use WaterDrop for droplets
} from '@mui/icons-material';
import { Button, Box, Typography, Paper } from '@mui/material'; // Import MUI components
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Box className="relative ">
      <Box className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Box className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full">
              {/* <LeafIcon className="w-4 h-4 text-green-600" /> */}
              <Typography variant="body2" className="text-sm font-medium text-green-800">
                Sustainable Agriculture
              </Typography>
            </Box>

            <div  className="text-4xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              AGRICULTURE SOWING
              <br />
              SEEDS COMPANY
            </div>

            <Box className="flex space-x-3">
              <Box className="w-24 h-1.5 bg-green-500 rounded-full" />
              <Box className="w-12 h-1.5 bg-yellow-400 rounded-full" />
            </Box>

            <div className=" font-semibold text-2xl text-gray-800">
              Welcome to Mahadev Seeds
            </div>

            <Typography variant="body1" className="text-gray-600 leading-relaxed text-lg">
              As India's premier agriculture seed company, we deliver exceptional quality
              seeds that empower farmers to achieve maximum yields. Our disease-resistant
              varieties are scientifically developed to ensure sustainable farming success.
            </Typography>

            <motion.div whileHover={{ scale: 1.02 }}> {/* Wrap the button in a div for motion */}
            <Link to='/contact'>
            <Button
                variant="contained"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                endIcon={<ArrowRightIcon />} // Use endIcon prop for the icon
              >
                Learn More
              </Button>
            </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
          >
            {/* Main image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute top-0 right-0 w-4/5 h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/bannerpageimage2.png"
                alt="Modern farming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Secondary image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-0 left-0 w-3/5 h-[300px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/bannerpageimage1.png"
                alt="Seeds close-up"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Stats cards */}
            <Paper elevation={3} className="absolute top-[20%] left-[10%] p-4 rounded-xl"> {/* Use Paper for elevation */}
              <Box className="flex items-center space-x-2">
                <SunIcon className="w-5 h-5 text-yellow-500" />
                <Typography variant="body2" className="text-sm font-medium">20+ Years Experience</Typography>
              </Box>
            </Paper>

            <Paper elevation={3} className="absolute bottom-[30%] right-[5%] p-4 rounded-xl"> {/* Use Paper for elevation */}
              <Box className="flex items-center space-x-2">
                <DropletsIcon className="w-5 h-5 text-blue-500" />
                <Typography variant="body2" className="text-sm font-medium">100% Natural Seeds</Typography>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Box>

      {/* Bottom decoration */}
      <Box className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 80" className="w-full h-20 fill-current">
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,80L0,80Z"
            className="text-green-50"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Banner;