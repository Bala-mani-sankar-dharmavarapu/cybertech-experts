import React from "react";
import { Shield, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-white">CYBER TECH EXPERTS</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cyber Tech Experts helps businesses stay ahead of cybercriminals with 
              certified professionals, attack simulations, and brand protection services.
            </p>
            <div className="flex space-x-4">
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Cyber Security
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Cloud and DevOps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Product Design
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Data & Business
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  White Papers
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Cyber Security
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Cloud Computing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Infrastructure Security
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Blog and News
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Cyber Tech Experts. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
