import React from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  Phone,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../utils/services";
import { email, linkedinLink, instaLink, phoneNumber } from "../utils/info";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Academy", path: "/academy" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
  ];

  const quickLinks = [
    { name: "Careers", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "FAQ", path: "#" },
    { name: "Support", path: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/cybertechexperts-logo.png"
                  alt="Cyber Tech Experts Logo"
                  className="h-12 w-12 object-contain"
                />
                <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-md"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-white block">
                  CYBER TECH EXPERTS
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  Securing Your Digital Future
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading cybersecurity firm specializing in threat protection,
              attack simulations, and comprehensive security training. We
              empower organizations to stay ahead of evolving cyber threats.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">{email}</span>
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">{phoneNumber}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-xs">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="h-5 w-5 text-blue-400" />
                <span className="text-xs">Industry Leader</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-400" />
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={
                      service.urlName === "cybersecurity-training"
                        ? "/academy"
                        : `/service/${service.urlName}`
                    }
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a
                  href={`mailto:${email}`}
                  className="p-3 bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="Contact us via email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center">
              <p>
                © {currentYear}{" "}
                <span className="text-white font-semibold">
                  Cyber Tech Experts
                </span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
