import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Shield,
  Search,
  Network,
  Cloud,
  Globe,
  Lock,
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
} from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  overview: string;
  features: string[];
  benefits: string[];
  process: string[];
  pricing: string;
  duration: string;
  teamSize: string;
  certifications: string[];
}

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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

  const serviceDetails: { [key: string]: ServiceDetail } = {
    "1": {
      id: "1",
      title: "Phishing Simulation & Awareness",
      description:
        "Conduct realistic phishing campaigns to measure employee readiness and train staff with engaging awareness modules.",
      icon: "Shield",
      overview:
        "Our phishing simulation and awareness program helps organizations build a human firewall by testing and training employees to recognize and respond to phishing attacks. We create realistic, targeted campaigns that mirror real-world threats while providing comprehensive training modules.",
      features: [
        "Realistic phishing campaign creation",
        "Custom email templates and scenarios",
        "Employee vulnerability assessment",
        "Interactive training modules",
        "Detailed reporting and analytics",
        "Compliance tracking and documentation",
        "Multi-language support",
        "Mobile-friendly training platform",
      ],
      benefits: [
        "Reduce phishing susceptibility by up to 90%",
        "Improve employee security awareness",
        "Meet compliance requirements",
        "Reduce security incident costs",
        "Build a security-conscious culture",
        "Real-time threat intelligence integration",
      ],
      process: [
        "Initial assessment and goal setting",
        "Custom campaign design and approval",
        "Phishing simulation deployment",
        "Employee training and education",
        "Progress monitoring and reporting",
        "Continuous improvement and optimization",
      ],
      pricing: "Starting from $2,500/month",
      duration: "Ongoing with monthly campaigns",
      teamSize: "1-2 security specialists",
      certifications: ["CISSP", "CISM", "Security+"],
    },
    "2": {
      id: "2",
      title: "Malware & Ransomware Simulation",
      description:
        "Safe, controlled attack simulations to test defenses and strengthen security posture.",
      icon: "Search",
      overview:
        "Our malware and ransomware simulation service provides safe, controlled environments to test your organization's defenses against advanced persistent threats. We simulate real-world attack scenarios without putting your systems at risk.",
      features: [
        "Controlled malware simulation",
        "Ransomware attack testing",
        "Endpoint detection testing",
        "Network segmentation validation",
        "Backup and recovery testing",
        "Incident response validation",
        "Security tool effectiveness testing",
        "Red team exercise coordination",
      ],
      benefits: [
        "Identify security gaps before real attacks",
        "Validate security tool effectiveness",
        "Improve incident response procedures",
        "Reduce recovery time objectives",
        "Enhance team preparedness",
        "Meet regulatory testing requirements",
      ],
      process: [
        "Environment preparation and isolation",
        "Attack scenario planning",
        "Simulation execution and monitoring",
        "Defense validation and testing",
        "Incident response evaluation",
        "Report generation and recommendations",
      ],
      pricing: "Starting from $5,000/project",
      duration: "1-2 weeks per simulation",
      teamSize: "3-5 security experts",
      certifications: ["CEH", "OSCP", "GCIH"],
    },
    "3": {
      id: "3",
      title: "Website & Brand Protection",
      description:
        "Identify and remove malicious domains with dark web monitoring and quick takedowns.",
      icon: "Globe",
      overview:
        "Protect your brand reputation and customers from cyber threats with our comprehensive website and brand protection services. We monitor the dark web, identify malicious domains, and provide rapid takedown services.",
      features: [
        "Dark web monitoring",
        "Domain reputation monitoring",
        "Malicious domain identification",
        "Rapid takedown services",
        "Brand abuse detection",
        "Certificate monitoring",
        "Social media monitoring",
        "Phishing site detection",
      ],
      benefits: [
        "Protect brand reputation",
        "Prevent customer data theft",
        "Reduce phishing attack success",
        "Maintain customer trust",
        "Compliance with regulations",
        "Early threat detection",
      ],
      process: [
        "Brand asset identification",
        "Monitoring setup and configuration",
        "Continuous threat scanning",
        "Threat analysis and validation",
        "Rapid response and takedown",
        "Regular reporting and updates",
      ],
      pricing: "Starting from $1,500/month",
      duration: "Ongoing monitoring",
      teamSize: "2-3 brand protection specialists",
      certifications: ["CISSP", "CISM", "Brand Protection Specialist"],
    },
    "4": {
      id: "4",
      title: "Vulnerability Assessments",
      description:
        "Network & application scans with prioritized roadmap for patching and compliance support.",
      icon: "Network",
      overview:
        "Comprehensive vulnerability assessments to identify security weaknesses in your network, applications, and infrastructure. We provide detailed reports with prioritized remediation plans and compliance support.",
      features: [
        "Network vulnerability scanning",
        "Web application testing",
        "Database security assessment",
        "Cloud infrastructure evaluation",
        "Mobile application testing",
        "Compliance gap analysis",
        "Risk prioritization matrix",
        "Remediation roadmap",
      ],
      benefits: [
        "Identify security vulnerabilities",
        "Prioritize remediation efforts",
        "Meet compliance requirements",
        "Reduce attack surface",
        "Improve security posture",
        "Cost-effective risk management",
      ],
      process: [
        "Scope definition and planning",
        "Automated vulnerability scanning",
        "Manual testing and validation",
        "Risk assessment and prioritization",
        "Report generation and presentation",
        "Remediation support and follow-up",
      ],
      pricing: "Starting from $3,000/assessment",
      duration: "2-4 weeks per assessment",
      teamSize: "2-4 security assessors",
      certifications: ["CISSP", "CISM", "CEH", "OSCP"],
    },
    "5": {
      id: "5",
      title: "24/7 Incident Response",
      description:
        "Rapid containment and recovery from cyber incidents with digital forensics analysis.",
      icon: "Lock",
      overview:
        "Our 24/7 incident response service provides rapid containment and recovery from cyber incidents. Our expert team is always ready to respond to security breaches with digital forensics analysis and recovery procedures.",
      features: [
        "24/7 incident response hotline",
        "Rapid containment procedures",
        "Digital forensics analysis",
        "Evidence preservation",
        "Recovery planning and execution",
        "Communication management",
        "Regulatory reporting support",
        "Post-incident analysis",
      ],
      benefits: [
        "Minimize incident impact",
        "Reduce recovery time",
        "Preserve evidence for legal proceedings",
        "Maintain business continuity",
        "Protect reputation",
        "Meet regulatory requirements",
      ],
      process: [
        "Incident detection and reporting",
        "Initial assessment and containment",
        "Forensic analysis and evidence collection",
        "Recovery planning and execution",
        "Communication and reporting",
        "Post-incident review and improvement",
      ],
      pricing: "Starting from $10,000/incident",
      duration: "Variable based on incident severity",
      teamSize: "5-10 incident response specialists",
      certifications: ["GCIH", "GCFA", "CISSP", "CISM"],
    },
    "6": {
      id: "6",
      title: "Cybersecurity Training",
      description:
        "SOC Analyst, Application Security, and Corporate Awareness training programs.",
      icon: "Cloud",
      overview:
        "Comprehensive cybersecurity training programs designed to build expertise in your team. From SOC analyst training to application security and corporate awareness, we provide hands-on, practical training solutions.",
      features: [
        "SOC analyst certification training",
        "Application security training",
        "Corporate security awareness",
        "Hands-on lab environments",
        "Certification exam preparation",
        "Custom training programs",
        "Online and in-person options",
        "Progress tracking and reporting",
      ],
      benefits: [
        "Build internal security expertise",
        "Reduce dependency on external resources",
        "Improve security posture",
        "Meet compliance training requirements",
        "Career development for employees",
        "Cost-effective skill building",
      ],
      process: [
        "Training needs assessment",
        "Custom curriculum development",
        "Training delivery and facilitation",
        "Hands-on practice and labs",
        "Assessment and certification",
        "Ongoing support and updates",
      ],
      pricing: "Starting from $2,000/person",
      duration: "1-4 weeks per program",
      teamSize: "2-3 certified trainers",
      certifications: ["CISSP", "CISM", "CEH", "Security+"],
    },
  };

  const service = serviceDetails[id || "1"];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <Link to="/services" className="text-blue-400 hover:text-blue-300">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-secondary rounded-xl">
                    {getIcon(service.icon)}
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-white">
                      {service.title}
                    </h1>
                    <p className="text-gray-300 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Clock className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="text-white font-semibold">Duration</div>
                  <div className="text-gray-300 text-sm">
                    {service.duration}
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <Users className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="text-white font-semibold">Team Size</div>
                  <div className="text-gray-300 text-sm">
                    {service.teamSize}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Service Overview
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.overview}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-400" />
                  <span className="text-white font-semibold">
                    Starting Price: {service.pricing}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Service Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700"
              >
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-white font-semibold">{step}</h3>
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
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your specific needs and get a
              customized quote for this service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-secondary text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Get Quote
              </Link>
              <a
                href="tel:+1-555-0123"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:border-blue-400 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
