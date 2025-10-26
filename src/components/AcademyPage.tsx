import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Download,
  Shield,
  Target,
  Users,
  Award,
  Rocket,
  BookOpen,
  Briefcase,
  Zap,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactFormDialog from "./ContactFormDialog";
import SEO from "./SEO";

const AcademyPage: React.FC = () => {
  const navigate = useNavigate();
  const [isEnrollDialogOpen, setIsEnrollDialogOpen] = useState(false);
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);

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

  const handleDownloadButtonClick = () => {
    setIsDownloadDialogOpen(true);
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CyberTech Experts Academy - Job-Ready Cybersecurity Training",
    description:
      "Comprehensive job-ready cybersecurity training and upskilling programs. Master ethical hacking, penetration testing, SOC operations, and malware analysis with hands-on labs. Prepare for industry certifications including OSCP, CEH, Security+, and PenTest+. Expert-led training with placement support for career switchers and IT professionals.",
    provider: {
      "@type": "Organization",
      name: "CyberTech Experts",
      url: "https://cybertechexperts.org",
    },
    educationalCredentialAwarded: [
      "CompTIA Security+",
      "CompTIA PenTest+",
      "CEH - Certified Ethical Hacker",
      "OSCP - Offensive Security Certified Professional",
      "eJPT - eLearnSecurity Junior Penetration Tester",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT40H",
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "Weekly",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: [
        "Career Changers",
        "IT Professionals",
        "Students",
        "Security Enthusiasts",
      ],
    },
    teaches: [
      "Ethical Hacking",
      "Penetration Testing",
      "SOC Operations",
      "Malware Analysis",
      "Network Security",
      "Web Application Security",
      "Incident Response",
      "Digital Forensics",
    ],
    occupationalCredentialAwarded: "Cybersecurity Professional",
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <SEO
        title="Job-Ready Cybersecurity Training & Upskilling Academy - CyberTech Experts"
        description="Become job-ready in cybersecurity with our comprehensive upskilling programs. Zero to advanced training in ethical hacking, SOC operations, and penetration testing. OSCP, CEH, Security+ preparation with hands-on labs, expert mentors, and placement support. Perfect for career switchers and IT professionals."
        keywords="job ready cybersecurity training, career change to cybersecurity, cybersecurity upskilling, SOC analyst bootcamp, ethical hacking certification, OSCP training course, CEH preparation, penetration testing academy, security operations training, hands-on cybersecurity labs, cybersecurity career program, IT to cybersecurity transition, beginner cybersecurity course, professional security training, cybersecurity job placement"
        url="/academy"
        type="website"
        structuredData={courseSchema}
      />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
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

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Master the Art of Cyber Strategy
              </span>
              <br />
              <span className="text-white">
                Build Your Future in Cybersecurity
              </span>
            </h1>

            <p className="text-gray-200 text-lg max-w-4xl mx-auto leading-relaxed">
              Every second, new threats emerge in the digital world. Data
              breaches, ransomware, and phishing attacks are no longer distant
              headlines—
              <span className="text-red-400 font-semibold">
                {" "}
                they're real, and they're growing.
              </span>
            </p>
          </div>

          {/* Critical Stats - Minimalist Design */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Shift the Game */}
              <div className="text-center group flex flex-col">
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300 mx-auto h-[100px] items-center justify-center">
                  <Target className="h-14 w-14 text-blue-400" />
                </div>
                <h3 className="text-lg font-black text-white mb-2 min-h-[3rem] flex items-center justify-center">
                  From Reactive → Proactive
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Don't wait for attacks to happen. Learn to anticipate,
                  prevent, and neutralize threats before they impact businesses.
                </p>
              </div>

              {/* Career Growth */}
              <div className="text-center group flex flex-col">
                <div className="text-5xl md:text-6xl font-black text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 h-[100px] flex items-center justify-center">
                  62%
                </div>
                <h3 className="text-lg font-black text-white mb-2 min-h-[3rem] flex items-center justify-center">
                  Job Growth in 5 Years
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Cybersecurity is one of the most promising, high-growth career
                  paths with unlimited opportunities.
                </p>
              </div>

              {/* Ransomware Alert */}
              <div className="text-center group flex flex-col">
                <div className="text-5xl md:text-6xl font-black text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300 h-[100px] flex items-center justify-center">
                  $265B
                </div>
                <h3 className="text-lg font-black text-white mb-2 min-h-[3rem] flex items-center justify-center">
                  Ransomware by 2031
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Every industry is a target. Skilled defenders are in critical
                  demand across all sectors.
                </p>
              </div>
            </div>
          </div>

          {/* Download Curriculum Section */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full"></div>
                <p className="relative text-gray-100 text-lg md:text-xl font-medium leading-relaxed px-6 py-4">
                  From{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
                    real-world attack simulations
                  </span>{" "}
                  to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-bold">
                    global certifications
                  </span>
                  , we prepare you to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                    outsmart cybercriminals
                  </span>{" "}
                  and protect what matters most.
                </p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30 rounded-2xl p-6 md:p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
                <div className="relative">
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-4">
                    <BookOpen className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                      Complete Curriculum
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Download Our Complete Curriculum
                  </h3>
                  <p className="text-gray-300 text-base mb-6 max-w-2xl mx-auto leading-relaxed">
                    Get the full curriculum overview and see exactly what you'll
                    learn in our comprehensive cybersecurity training programs.
                  </p>
                  <button
                    onClick={handleDownloadButtonClick}
                    className="relative z-50 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold text-base hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 flex items-center space-x-3 mx-auto"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Curriculum PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Learn Section - 5 Module Odyssey (Timeline) */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-4">
                <BookOpen className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  Learning Path
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                5 Module Odyssey
              </h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                A comprehensive journey from fundamentals to advanced
                cybersecurity mastery
              </p>
            </div>

            <div className="max-w-5xl mx-auto relative">
              {/* Continuous Timeline Line */}
              <div className="absolute left-[1.5rem] md:left-0 top-5 bottom-0 w-1 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-green-500/30"></div>

              <div className="space-y-0">
                {/* Module 1 - CyberGenesis */}
                <div className="relative pl-14 md:pl-20 pr-4 md:pr-0 pb-8">
                  <div className="absolute left-[1.5rem] md:left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-black shadow-lg shadow-cyan-500/50 z-10">
                    1
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-cyan-400 font-black text-xl mb-1">
                        CyberGenesis
                      </h4>
                      <h5 className="text-white font-semibold text-base mb-2">
                        Foundations Unlocked
                      </h5>
                      <p className="text-gray-400 leading-relaxed">
                        Start your journey—master networks, Linux, cryptography,
                        and core security essentials.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Module 2 - ShieldForge */}
                <div className="relative pl-14 md:pl-20 pr-4 md:pr-0 pb-8">
                  <div className="absolute left-[1.5rem] md:left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/50 z-10">
                    2
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-blue-400 font-black text-xl mb-1">
                        ShieldForge
                      </h4>
                      <h5 className="text-white font-semibold text-base mb-2">
                        Defensive Security & Web Armor
                      </h5>
                      <p className="text-gray-400 leading-relaxed">
                        Learn to safeguard systems, secure applications, and
                        defend against real-world attacks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Module 3 - PhantomStrike */}
                <div className="relative pl-14 md:pl-20 pr-4 md:pr-0 pb-8">
                  <div className="absolute left-[1.5rem] md:left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-black shadow-lg shadow-purple-500/50 z-10">
                    3
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-purple-400 font-black text-xl mb-1">
                        PhantomStrike
                      </h4>
                      <h5 className="text-white font-semibold text-base mb-2">
                        Ethical Hacking & Pen Testing
                      </h5>
                      <p className="text-gray-400 leading-relaxed">
                        Step into the attacker's mindset—reconnaissance,
                        scanning, and vulnerability exploitation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Module 4 - RedOps */}
                <div className="relative pl-14 md:pl-20 pr-4 md:pr-0 pb-8">
                  <div className="absolute left-[1.5rem] md:left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-black shadow-lg shadow-red-500/50 z-10">
                    4
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-red-400 font-black text-xl mb-1">
                        RedOps
                      </h4>
                      <h5 className="text-white font-semibold text-base mb-2">
                        Malware & Threat Simulation
                      </h5>
                      <p className="text-gray-400 leading-relaxed">
                        Hands-on labs for malware analysis, simulated
                        cyber-attacks, and red team operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Module 5 - AI Sentinel */}
                <div className="relative pl-14 md:pl-20 pr-4 md:pr-0 pb-8">
                  <div className="absolute left-[1.5rem] md:left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-black shadow-lg shadow-green-500/50 z-10">
                    5
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-green-400 font-black text-xl mb-1">
                        AI Sentinel
                      </h4>
                      <h5 className="text-white font-semibold text-base mb-2">
                        Generative AI in Cybersecurity
                      </h5>
                      <p className="text-gray-400 leading-relaxed">
                        Harness AI to anticipate threats, automate defenses, and
                        innovate security solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hands-On Labs Section - Improved Grid */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full mb-4">
                <Shield className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                  Practical Training
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                Hands-On Labs & Real-World Simulations
              </h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Master cybersecurity tools and techniques through immersive,
                practical exercises
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Row 1: Large Featured Box + Web Exploitation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                {/* Large Featured Box */}
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 min-h-[280px] flex flex-col justify-between">
                  <div>
                    <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-3">
                      Professional Tools
                    </div>
                    <h4 className="text-white font-black text-3xl mb-4 leading-tight">
                      Kali Linux, Burp Suite, Wireshark & Nmap
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Master the industry-standard penetration testing tools
                      used by professional security researchers and ethical
                      hackers worldwide.
                    </p>
                  </div>
                  <div className="mt-6 text-blue-400 font-semibold text-sm">
                    → Core toolkit training
                  </div>
                </div>

                {/* Web App Exploitation */}
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300 min-h-[280px] flex flex-col justify-between">
                  <div>
                    <div className="text-red-400 text-sm font-bold uppercase tracking-wider mb-3">
                      Web Security
                    </div>
                    <h4 className="text-white font-black text-2xl mb-4 leading-tight">
                      Web App Exploitation
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      SQL Injection, XSS, CSRF and other web vulnerabilities
                      affecting modern web applications.
                    </p>
                  </div>
                  <div className="mt-6 text-red-400 font-semibold text-sm">
                    → OWASP Top 10 coverage
                  </div>
                </div>
              </div>

              {/* Row 2: Three Equal Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Wi-Fi Hacking */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300">
                  <div className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
                    Wireless
                  </div>
                  <h4 className="text-white font-bold text-xl mb-3">
                    Wi-Fi Hacking
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Wireless network security assessment and penetration testing
                  </p>
                </div>

                {/* Malware Analysis */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                  <div className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                    Forensics
                  </div>
                  <h4 className="text-white font-bold text-xl mb-3">
                    Malware Analysis
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Reverse engineering & digital forensics techniques
                  </p>
                </div>

                {/* Incident Response */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all duration-300">
                  <div className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
                    Response
                  </div>
                  <h4 className="text-white font-bold text-xl mb-3">
                    Incident Handling
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Real-world incident response and business continuity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Section - Badge Layout */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full mb-4">
                <Award className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                  Industry Credentials
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                Certification-Aligned Training
              </h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Prepare for globally recognized certifications that open doors
                to top cybersecurity roles
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Certification Badges Grid */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="group bg-gray-800/30 border-2 border-gray-600/50 hover:border-green-500/50 rounded-full px-8 py-4 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1">
                      CompTIA Security+
                    </div>
                    <div className="text-gray-400 text-xs">
                      Foundation Level
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-800/30 border-2 border-gray-600/50 hover:border-blue-500/50 rounded-full px-8 py-4 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1">
                      CompTIA PenTest+
                    </div>
                    <div className="text-gray-400 text-xs">Intermediate</div>
                  </div>
                </div>

                <div className="group bg-gray-800/30 border-2 border-gray-600/50 hover:border-purple-500/50 rounded-full px-8 py-4 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1">
                      EC-Council CEH
                    </div>
                    <div className="text-gray-400 text-xs">Ethical Hacker</div>
                  </div>
                </div>

                <div className="group bg-gray-800/30 border-2 border-gray-600/50 hover:border-cyan-500/50 rounded-full px-8 py-4 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1">
                      eJPT
                    </div>
                    <div className="text-gray-400 text-xs">
                      Junior PenTester
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured OSCP */}
              <div className="relative overflow-hidden bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 border-2 border-orange-500/40 rounded-2xl p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5 animate-pulse"></div>
                <div className="relative">
                  <div className="inline-flex items-center px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full mb-3">
                    <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                      Elite Certification
                    </span>
                  </div>
                  <h4 className="text-orange-400 font-black text-3xl mb-2">
                    OSCP
                  </h4>
                  <p className="text-white text-lg font-semibold mb-1">
                    Offensive Security Certified Professional
                  </p>
                  <p className="text-gray-300 text-sm">
                    The gold standard in penetration testing certification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Cyber Tech Experts Academy - Alternating Layout */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Why Cyber Tech Experts Academy?
              </h3>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                We don't just teach—we{" "}
                <span className="text-green-400 font-semibold">
                  train, practice, and launch
                </span>{" "}
                your career.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mt-1">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Hands-On Labs
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Real scenarios, real challenges. Practice on actual
                      security environments.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mt-1">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Expert Mentors
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Learn from industry professionals with frontline
                      experience.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mt-1">
                    <Award className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Certification-Focused
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Prepare for CISSP, CEH, Security+, and high-demand
                      certifications.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mt-1">
                    <Rocket className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Zero-to-Advanced Learning
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Designed for beginners and career switchers alike.
                    </p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mt-1">
                    <Briefcase className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Placement Support
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Connect to top internships and job opportunities.
                    </p>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mt-1">
                    <Clock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      24/7 Access & Support
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Round-the-clock access to labs and expert support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - Full Width */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
              <div className="relative max-w-3xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-4">
                  <Zap className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                    Start Your Journey
                  </span>
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  Build Your Future in Cybersecurity
                </h4>
                <p className="text-gray-200 text-base mb-6 leading-relaxed">
                  Join CyberTech Experts Academy and gain the skills to defend
                  businesses, stop attacks, and build a future-proof career in
                  one of the world's most critical and rewarding fields.
                </p>
                <button
                  onClick={() => setIsEnrollDialogOpen(true)}
                  className="relative z-50 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold text-base hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 inline-flex items-center space-x-2"
                >
                  <span>Enroll Now</span>
                  <Rocket className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enroll Dialog */}
      <ContactFormDialog
        isOpen={isEnrollDialogOpen}
        onClose={() => setIsEnrollDialogOpen(false)}
        formType="enroll"
      />

      {/* Download Curriculum Dialog */}
      <ContactFormDialog
        isOpen={isDownloadDialogOpen}
        onClose={() => setIsDownloadDialogOpen(false)}
        formType="download"
        onSuccess={handleDownloadCurriculum}
      />
    </div>
  );
};

export default AcademyPage;
