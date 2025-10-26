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
  PlayCircle,
  FileText,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import { services } from "../utils/services";
import ContactFormDialog from "./ContactFormDialog";
import SEO from "./SEO";

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

  const getServiceGradient = (serviceName: string) => {
    const gradients: { [key: string]: string } = {
      "phishing-simulation-awareness":
        "from-red-400 via-orange-400 to-yellow-400",
      "malware-ransomware-simulation":
        "from-red-400 via-pink-400 to-purple-400",
      "website-brand-protection": "from-green-400 via-teal-400 to-cyan-400",
      "vulnerability-assessments": "from-blue-400 via-indigo-400 to-purple-400",
      "incident-response": "from-orange-400 via-red-400 to-pink-400",
      "cybersecurity-training": "from-purple-400 via-blue-400 to-cyan-400",
    };
    return gradients[serviceName] || "from-blue-400 via-purple-400 to-cyan-400";
  };

  const service = services.find((s) => s.urlName === serviceName);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <SEO
          title="Service Not Found - CyberTech Experts"
          description="The requested cybersecurity service could not be found."
          url="/service/not-found"
        />
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.detailedDescription || service.description,
    provider: {
      "@type": "Organization",
      name: "CyberTech Experts",
      url: "https://cybertechexperts.org",
    },
    areaServed: "Worldwide",
    serviceType: "Cybersecurity Services",
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <SEO
        title={`${service.title} - CyberTech Experts`}
        description={service.detailedDescription || service.description}
        keywords={`${
          service.title
        }, cybersecurity, ${service.title.toLowerCase()}, security services, ${serviceName}`}
        url={`/service/${serviceName}`}
        type="article"
        structuredData={serviceSchema}
      />
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
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            <span
              className={`bg-gradient-to-r ${getServiceGradient(
                serviceName || ""
              )} bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] hover:animate-text-glow transition-all duration-500`}
            >
              {service.title}
            </span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            <span className="text-blue-300 font-medium">
              {service.detailedDescription || service.description}
            </span>
          </p>
        </div>

        {/* Service Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          {service.features && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-black text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                    Key Features
                  </span>
                </h3>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 font-light tracking-wide">
                      {feature}
                    </span>
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
                <h3 className="text-xl font-black text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                    Benefits
                  </span>
                </h3>
              </div>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 font-light tracking-wide">
                      {benefit}
                    </span>
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
                <h3 className="text-xl font-black text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                    Use Cases
                  </span>
                </h3>
              </div>
              <ul className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 font-light tracking-wide">
                      {useCase}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Additional Sections for Process Flow and Deliverables */}
        {(service.processFlow || service.deliverables) && (
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Process Flow */}
            {service.processFlow && (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <PlayCircle className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-black text-white leading-tight">
                    <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                      How It Works
                    </span>
                  </h3>
                </div>
                <div className="space-y-4">
                  {service.processFlow.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-200 leading-relaxed font-light tracking-wide">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables */}
            {service.deliverables && (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-xl font-black text-white leading-tight">
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                      Deliverables
                    </span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 font-light tracking-wide">
                        {deliverable}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Additional Sections for Scenarios and Measurements */}
        {(service.scenarios || service.measurements) && (
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Scenarios */}
            {service.scenarios && (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  <h3 className="text-xl font-black text-white leading-tight">
                    <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                      Common Scenarios
                    </span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.scenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 font-light tracking-wide">
                        {scenario}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Measurements */}
            {service.measurements && (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <BarChart3 className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-black text-white leading-tight">
                    <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                      What We Measure
                    </span>
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.measurements.map((measurement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 font-light tracking-wide">
                        {measurement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
              Ready to Get Started?
            </span>
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto font-light tracking-wide">
            <span className="text-blue-300 font-medium">
              Contact our cybersecurity experts
            </span>{" "}
            to learn more about how {service.title} can protect your
            organization.
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
