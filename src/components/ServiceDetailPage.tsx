import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Users,
  Target,
  Search,
  Network,
  Cloud,
  Globe,
  Lock,
} from "lucide-react";
import { services } from "../utils/services";
import ContactFormDialog from "./ContactFormDialog";

const ServiceDetailPage: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();
  const navigate = useNavigate();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

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
    return <IconComponent className="h-12 w-12" />;
  };

  const service = services.find((s) => s.urlName === serviceName);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-300 mb-8">
            The requested service could not be found.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Service Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-secondary rounded-2xl mb-8">
            {getIcon(service.icon)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {service.detailedDescription || service.description}
          </p>
        </div>

        {/* Service Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          {service.features && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">
                  Key Features
                </h3>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {service.benefits && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Benefits</h3>
              </div>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Use Cases */}
          {service.useCases && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Use Cases</h3>
              </div>
              <ul className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our cybersecurity experts to learn more about how{" "}
            {service.title} can protect your organization.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsContactDialogOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <ContactFormDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
        formType="contact"
      />
    </div>
  );
};

export default ServiceDetailPage;
