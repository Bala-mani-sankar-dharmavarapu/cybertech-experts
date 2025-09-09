import React from "react";
import { Server, Cloud, Lock, Coins, Laptop } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-accent-400 text-lg font-semibold tracking-wide uppercase">
                CYBER TECH EXPERTS
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                STRONGER SECURITY. SMARTER BUSINESS.
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Protect your organization against phishing, malware, and modern cyber threats with tailored solutions from Cyber Tech Experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-secondary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Laptop */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Laptop className="h-32 w-48 text-blue-400 animate-float" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-xl"></div>
                </div>
              </div>

              {/* Network Elements */}
              <div className="grid grid-cols-3 gap-8 items-center">
                {/* Server Racks */}
                <div className="text-center">
                  <div className="relative">
                    <Server className="h-16 w-16 text-purple-400 mx-auto mb-2" />
                    <div className="absolute inset-0 bg-purple-400/20 rounded-lg blur-lg"></div>
                  </div>
                  <div className="h-8 w-2 bg-purple-400 mx-auto rounded-full"></div>
                  <div className="h-6 w-2 bg-purple-400 mx-auto rounded-full"></div>
                </div>

                {/* Cloud */}
                <div className="text-center">
                  <div className="relative">
                    <Cloud className="h-16 w-16 text-green-400 mx-auto mb-2" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-lg blur-lg"></div>
                  </div>
                </div>

                {/* Lock */}
                <div className="text-center">
                  <div className="relative">
                    <Lock className="h-16 w-16 text-blue-400 mx-auto mb-2" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg"></div>
                  </div>
                </div>
              </div>

              {/* Coins Stack */}
              <div className="flex justify-center mt-8">
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <Coins className="h-8 w-8 text-yellow-400" />
                    <Coins className="h-8 w-8 text-yellow-400 -mt-2" />
                    <Coins className="h-8 w-8 text-yellow-400 -mt-2" />
                  </div>
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-lg blur-lg"></div>
                </div>
              </div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
