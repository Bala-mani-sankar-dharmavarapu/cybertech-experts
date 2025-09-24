import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  Shield,
  Search,
  RotateCcw,
  Users,
  Gauge,
  Network,
} from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { text: "Proactive Threat Detection.", icon: Search },
    { text: "AI-Powered Detection", icon: Shield },
    { text: "Fast Website Recovery", icon: RotateCcw },
    { text: "Instant Malware Removal", icon: Shield },
    { text: "Trusted Experts", icon: Shield },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl mx-4 lg:mx-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-2xl"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-xl font-bold tracking-wider uppercase">
                WHY CHOOSE CYBER TECH EXPERTS
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                  We Protect You From
                </span>
                <br />
                <span className="text-red-400 drop-shadow-lg animate-fade-in-up hover:animate-text-glow transition-all duration-500">
                  Cyber Attacks
                </span>
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-1.5 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                    <Check className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-gray-300 text-base group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Hire Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => navigate("/why-choose-us")}
                className="group border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
              >
                <span className="group-hover:text-white transition-colors duration-300">
                  Learn More
                </span>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Security Analysis */}
              <div className="space-y-4">
                <div className="group relative">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300">
                    <Users className="h-10 w-10 text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative">
                  <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-all duration-300">
                    <Gauge className="h-10 w-10 text-purple-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Network Security */}
              <div className="space-y-4">
                <div className="group relative">
                  <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-all duration-300">
                    <Network className="h-10 w-10 text-green-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-green-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative">
                  <div className="p-3 bg-yellow-500/20 rounded-xl group-hover:bg-yellow-500/30 transition-all duration-300">
                    <Shield className="h-10 w-10 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Central Gear */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-400 rounded-full animate-spin"></div>
                <div
                  className="absolute inset-2 border-2 border-purple-400 rounded-full animate-spin"
                  style={{ animationDirection: "reverse" }}
                ></div>
                <div className="absolute inset-4 border border-green-400 rounded-full animate-spin"></div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
