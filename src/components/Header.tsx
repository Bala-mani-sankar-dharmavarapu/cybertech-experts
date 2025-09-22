import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleSectionNavigation = (sectionId: string) => {
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    };

    if (location.pathname === "/") {
      // If already on home page, just scroll to section
      scrollToSection();
    } else {
      // If on another page, navigate to home first, then scroll to section
      navigate("/");
      setTimeout(() => {
        scrollToSection();
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-dark backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/cybertechexperts-logo.png"
              alt="Cyber Tech Experts Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-white">
              CYBER TECH EXPERTS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("/")}
              className={`transition-colors duration-300 ${
                location.pathname === "/"
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/academy")}
              className={`transition-colors duration-300 ${
                location.pathname === "/academy"
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              Academy
            </button>
            <button
              onClick={() => handleSectionNavigation("about")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => handleSectionNavigation("services")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => handleSectionNavigation("blog")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Blog
            </button>
            <button
              onClick={() => handleSectionNavigation("contact")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleSectionNavigation("contact")}
              className="bg-gradient-secondary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
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
              <button
                onClick={() => handleNavigation("/")}
                className={`transition-colors duration-300 text-left ${
                  location.pathname === "/"
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/academy")}
                className={`transition-colors duration-300 text-left ${
                  location.pathname === "/academy"
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                Academy
              </button>
              <button
                onClick={() => handleSectionNavigation("about")}
                className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
              >
                About Us
              </button>
              <button
                onClick={() => handleSectionNavigation("services")}
                className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleSectionNavigation("blog")}
                className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Blog
              </button>
              <button
                onClick={() => handleSectionNavigation("contact")}
                className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
              >
                Contact
              </button>
              <button
                onClick={() => handleSectionNavigation("contact")}
                className="bg-gradient-secondary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-full mt-4"
              >
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
