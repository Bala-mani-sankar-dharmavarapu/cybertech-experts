import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Search,
  Network,
  Cloud,
  Globe,
  Lock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Service } from "../types";

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: "1",
      title: "Phishing Simulation & Awareness",
      description:
        "Conduct realistic phishing campaigns to measure employee readiness and train staff with engaging awareness modules.",
      icon: "Shield",
    },
    {
      id: "2",
      title: "Malware & Ransomware Simulation",
      description:
        "Safe, controlled attack simulations to test defenses and strengthen security posture.",
      icon: "Search",
    },
    {
      id: "3",
      title: "Website & Brand Protection",
      description:
        "Identify and remove malicious domains with dark web monitoring and quick takedowns.",
      icon: "Globe",
    },
    {
      id: "4",
      title: "Vulnerability Assessments",
      description:
        "Network & application scans with prioritized roadmap for patching and compliance support.",
      icon: "Network",
    },
    {
      id: "5",
      title: "24/7 Incident Response",
      description:
        "Rapid containment and recovery from cyber incidents with digital forensics analysis.",
      icon: "Lock",
    },
    {
      id: "6",
      title: "Cybersecurity Training",
      description:
        "SOC Analyst, Application Security, and Corporate Awareness training programs.",
      icon: "Cloud",
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      Shield,
      Search,
      Network,
      Cloud,
      Globe,
      Lock,
    };
    const IconComponent = icons[iconName] || Shield;
    return <IconComponent className="h-8 w-8" />;
  };

  const features = [
    "24/7 Expert Support",
    "Custom Security Solutions",
    "Compliance & Certification",
    "Advanced Threat Detection",
    "Incident Response Planning",
    "Security Awareness Training",
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-secondary">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive cybersecurity solutions tailored to protect your
                organization against evolving threats
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-300">Clients Protected</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of security services designed
              to protect your digital assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group block"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105 h-full">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className="p-4 bg-gradient-secondary rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                        {getIcon(service.icon)}
                      </div>
                      <div className="absolute inset-0 bg-gradient-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-white font-semibold text-xl group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We provide comprehensive security solutions with unmatched
              expertise and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700"
              >
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-gray-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get started with our comprehensive cybersecurity services and
              protect your digital assets today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-secondary text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:border-blue-400 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
