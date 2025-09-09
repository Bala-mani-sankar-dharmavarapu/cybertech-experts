import React, { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-dark backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-8 w-8 text-blue-400" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-white">CYBER TECH EXPERTS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#blog"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-secondary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Get Free Quotes
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#blog"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
              <button className="bg-gradient-secondary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-full mt-4">
                Get Free Quotes
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
