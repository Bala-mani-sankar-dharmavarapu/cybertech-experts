import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Search,
  Network,
  Cloud,
  Globe,
  Lock,
  ArrowRight,
} from "lucide-react";
import { services } from "../utils/services";

const Services: React.FC = () => {
  const navigate = useNavigate();

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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Center Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-accent-400 text-xl font-semibold tracking-wide uppercase">
            OUR SERVICES AT A GLANCE
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Comprehensive Cybersecurity Solutions
          </h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            From phishing simulations to incident response, we provide tailored
            cybersecurity solutions to protect your organization against modern
            threats.
          </p>
        </div>

        {/* Services Grid at Bottom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                if (service.urlName === "cybersecurity-training") {
                  navigate("/academy");
                } else {
                  navigate(`/service/${service.urlName}`);
                }
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="relative">
                  <div className="p-3 bg-gradient-secondary rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (service.urlName === "cybersecurity-training") {
                      navigate("/academy");
                    } else {
                      navigate(`/service/${service.urlName}`);
                    }
                  }}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
