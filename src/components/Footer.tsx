import React from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../utils/services";
import { email, linkedinLink, instaLink } from "../utils/info";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
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
            <p className="text-gray-300 text-sm leading-relaxed">
              Cyber Tech Experts helps businesses stay ahead of cybercriminals
              with certified professionals, attack simulations, and brand
              protection services.
            </p>
            <div className="flex space-x-4">
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Contact us via email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={instaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg text-center">
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {services.slice(0, 3).map((service) => (
                  <div key={service.id} className="group">
                    <Link
                      to={
                        service.urlName === "cybersecurity-training"
                          ? "/academy"
                          : `/service/${service.urlName}`
                      }
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm leading-relaxed block"
                    >
                      {service.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {services.slice(3, 6).map((service) => (
                  <div key={service.id} className="group">
                    <Link
                      to={
                        service.urlName === "cybersecurity-training"
                          ? "/academy"
                          : `/service/${service.urlName}`
                      }
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm leading-relaxed block"
                    >
                      {service.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Cyber Tech Experts. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
