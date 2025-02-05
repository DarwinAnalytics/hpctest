import React from 'react';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, Button } from '@mui/material';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Super Hybrid Seeds</h3>
            <p className="mb-4 text-sm">
              Leading provider of high-quality agricultural seeds, committed to
              empowering farmers with innovative and sustainable farming solutions.
            </p>
            <div className="flex space-x-4">
              <IconButton href="#" target="_blank" className="hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </IconButton>
              <IconButton href="#" target="_blank" className="hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </IconButton>
              <IconButton href="#" target="_blank" className="hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </IconButton>
              <IconButton href="#" target="_blank" className="hover:text-white transition-colors">
                <YouTubeIcon className="w-5 h-5" />
              </IconButton>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
            <li>
    <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
  </li>
  <li>
    <Link to="/products/FieldCropSeeds" className="hover:text-white transition-colors">Products</Link>
  </li>
 
  <li>
    <Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link>
  </li>
  <li>
    <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
  </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
            <li>
    <Link to="/products/FieldCropSeeds" className="hover:text-white transition-colors">
      Field Crop Seeds
    </Link>
  </li>
  <li>
    <Link to="/products/VegetableSeeds" className="hover:text-white transition-colors">
      Vegetable Seeds
    </Link>
  </li>
  <li>
    <Link to="/products/FruitSeeds" className="hover:text-white transition-colors">
      Fruit Seeds
    </Link>
  </li>
  <li>
    <Link to="/products/Oilseeds" className="hover:text-white transition-colors">
      Oilseeds
    </Link>
  </li>
  <li>
    <Link to="/products/FodderCropSeeds" className="hover:text-white transition-colors">
      Fodder Crop Seeds
    </Link>
  </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">
              Subscribe to receive updates about new products and farming tips.
            </p>
            <div className="flex">
              <TextField
                variant="outlined"
                placeholder="Your email"
                className="bg-gray-800 text-white rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                        <SendIcon className="w-5 h-5" />
                      </Button>
                    </InputAdornment>
                  ),
                  style: { color: 'white' }, // Text color inside the input
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-center md:text-left mb-4 md:mb-0">
              © 2024 Mahadev Seeds. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;