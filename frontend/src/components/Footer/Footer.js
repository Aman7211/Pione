import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/pioneer ventures.png';

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center mt-[-30px] w-full md:w-1/4">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="logo" className="w-64" />
            </Link>
            <p className="text-gray-300 text-sm text-center mt-4">
              Innovation meets opportunity across multiple industries
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 text-center">
            <h4 className="text-lg font-semibold text-white mb-8">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-8">
              <nav className="space-y-2">
                <Link to="/" className="text-gray-400 hover:text-gray-50 block">
                  Home
                </Link>
                <Link to="/about" className="text-gray-400 hover:text-gray-50 block">
                  About
                </Link>
                <Link to="/services" className="text-gray-400 hover:text-gray-50 block">
                  Services
                </Link>
               
              </nav>
              <nav className="space-y-2">
                <Link to="/gallery" className="text-gray-400 hover:text-gray-50 block">
                  Gallery
                </Link>
                <Link to="/careers" className="text-gray-400 hover:text-gray-50 block">
                  Career
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-gray-50 block">
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 text-center">
            <h4 className="text-lg font-semibold text-white mb-8">Contact</h4>
            <p className="text-gray-400">A-142 Noida Sector 63</p>
            <p className="text-gray-400">
              <Link to="mailto:amanrathore9811@gmail.com">info@pioneerventure.in</Link>
            </p>
            <p className="text-gray-400">
              <Link to={'tel:9810475719'} className="pointer">9810475719</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 border-t border-gray-700 py-6 px-4 text-center">
        <p className="text-xs text-gray-400">&copy; 2024 Pioneer Ventures. All rights reserved.</p>
    
      </div>
    </div>
  );
};

export default Footer;
