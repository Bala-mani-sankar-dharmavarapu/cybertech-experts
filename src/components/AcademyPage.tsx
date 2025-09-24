import React, { useEffect, useState } from "react";
import { CheckCircle, ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactFormDialog from "./ContactFormDialog";

const AcademyPage: React.FC = () => {
  const navigate = useNavigate();
  const [isEnrollDialogOpen, setIsEnrollDialogOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = "/CyberTechExperts-Curriculum.pdf";
    link.download = "CyberTechExperts-Curriculum.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => {
              navigate("/");
              // Restore scroll position when returning to home
              setTimeout(() => {
                const savedScrollPosition =
                  sessionStorage.getItem("homeScrollPosition");
                if (savedScrollPosition) {
                  window.scrollTo(0, parseInt(savedScrollPosition));
                }
              }, 100);
            }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-xl font-bold tracking-wider uppercase mb-6">
              CYBERSECURITY ACADEMY
            </h1>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                Master the Art of Cyber Strategy
              </span>
              <br />
              <span className="text-green-400 drop-shadow-lg animate-fade-in-up hover:animate-text-glow transition-all duration-500">
                Build Your Future in Cybersecurity
              </span>
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              <span className="text-green-300 font-medium">
                From real-world attack simulations to global certifications,
              </span>{" "}
              we prepare you to outsmart cybercriminals and protect what matters
              most.
            </p>
          </div>

          {/* Download Curriculum Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-green-700/30 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                  📚 Download Our Complete Curriculum
                </span>
              </h3>
              <p className="text-gray-200 mb-6 font-light tracking-wide">
                <span className="text-green-300 font-medium">
                  Get the full curriculum overview
                </span>{" "}
                and see exactly what you'll learn in our comprehensive
                cybersecurity training programs.
              </p>
              <button
                onClick={handleDownloadCurriculum}
                className="group bg-gradient-secondary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center space-x-3 mx-auto"
              >
                <Download className="h-5 w-5" />
                <span>Download Curriculum PDF</span>
              </button>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                What You'll Learn
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Networking Essentials
                </h4>
                <p className="text-gray-300 text-sm">
                  IPs, protocols, firewalls & traffic analysis
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Operating Systems
                </h4>
                <p className="text-gray-300 text-sm">
                  Windows & Linux system security, permissions, and OS hardening
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Information Security Basics
                </h4>
                <p className="text-gray-300 text-sm">
                  Encryption, authentication, compliance & risk management
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Cloud Security
                </h4>
                <p className="text-gray-300 text-sm">
                  Secure AWS, Azure & cloud-native environments
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Ethical Hacking & Pen-Testing
                </h4>
                <p className="text-gray-300 text-sm">
                  Reconnaissance, exploitation, OWASP Top 10, Wireshark,
                  Metasploit & more
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Defensive Security & Incident Response
                </h4>
                <p className="text-gray-300 text-sm">
                  Detect, respond, and neutralize cyber threats
                </p>
              </div>
            </div>
          </div>

          {/* Hands-On Labs Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                Hands-On Labs & Real-World Simulations
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm border border-blue-700/30 rounded-xl p-6">
                <h4 className="text-blue-400 font-semibold text-lg mb-3">
                  Kali Linux, Burp Suite, Wireshark, Nmap
                </h4>
                <p className="text-gray-300 text-sm">
                  Professional penetration testing tools and platforms
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm border border-red-700/30 rounded-xl p-6">
                <h4 className="text-red-400 font-semibold text-lg mb-3">
                  Web App Exploitation
                </h4>
                <p className="text-gray-300 text-sm">
                  SQL Injection, XSS, CSRF and other web vulnerabilities
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm border border-green-700/30 rounded-xl p-6">
                <h4 className="text-green-400 font-semibold text-lg mb-3">
                  Wi-Fi Hacking & Wireless Security
                </h4>
                <p className="text-gray-300 text-sm">
                  Wireless network security assessment and penetration testing
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-sm border border-purple-700/30 rounded-xl p-6">
                <h4 className="text-purple-400 font-semibold text-lg mb-3">
                  Malware Defense & Forensic Analysis
                </h4>
                <p className="text-gray-300 text-sm">
                  Malware analysis, reverse engineering, and digital forensics
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 backdrop-blur-sm border border-yellow-700/30 rounded-xl p-6">
                <h4 className="text-yellow-400 font-semibold text-lg mb-3">
                  Incident Handling & Recovery
                </h4>
                <p className="text-gray-300 text-sm">
                  Real-world incident response and business continuity
                </p>
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                Certification-Aligned Training
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold text-lg mb-2">
                  CompTIA Security+
                </h4>
                <p className="text-gray-300 text-sm">
                  Foundation-level security certification
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold text-lg mb-2">
                  CompTIA PenTest+
                </h4>
                <p className="text-gray-300 text-sm">
                  Intermediate penetration testing certification
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold text-lg mb-2">
                  EC-Council CEH
                </h4>
                <p className="text-gray-300 text-sm">
                  Certified Ethical Hacker certification
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold text-lg mb-2">eJPT</h4>
                <p className="text-gray-300 text-sm">
                  Junior Penetration Tester certification
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 backdrop-blur-sm border border-orange-700/30 rounded-xl p-6 max-w-md mx-auto">
                <h4 className="text-orange-400 font-semibold text-lg mb-2">
                  OSCP
                </h4>
                <p className="text-gray-300 text-sm">
                  Offensive Security Certified Professional
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                Why Choose CyberTech Experts Academy?
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Learn from certified professionals (CISSP, CEH, OSCP)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    24/7 access to labs & expert support
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Curriculum trusted by enterprises & learners worldwide
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Job-ready skills for ethical hacking, SOC analysis, and
                    penetration testing
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-700/30 rounded-xl p-8">
                <h4 className="text-2xl font-black text-white mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                    🚀 Start Your Cybersecurity Journey Today
                  </span>
                </h4>
                <p className="text-gray-200 mb-6 font-light tracking-wide">
                  <span className="text-orange-300 font-medium">
                    Join CyberTech Experts Academy
                  </span>{" "}
                  and gain the skills to defend businesses, stop attacks, and
                  build a future-proof career.
                </p>
                <button
                  onClick={() => setIsEnrollDialogOpen(true)}
                  className="bg-gradient-secondary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 w-full"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <ContactFormDialog
        isOpen={isEnrollDialogOpen}
        onClose={() => setIsEnrollDialogOpen(false)}
        formType="enroll"
      />
    </div>
  );
};

export default AcademyPage;
