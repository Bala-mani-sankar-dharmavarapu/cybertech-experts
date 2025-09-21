import React from "react";
import {
  Check,
  Users,
  BarChart3,
  PieChart,
  TrendingUp,
  Database,
} from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-accent-400 text-xl font-semibold tracking-wide uppercase">
                ABOUT US
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Helping Businesses Stay Ahead of Cybercriminals
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Cyber Tech Experts, we help businesses stay ahead of
                cybercriminals. Our team of certified professionals brings years
                of experience in cyber defense, attack simulations, and brand
                protection.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Our Mission:</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                To strengthen business resilience by simulating real-world
                threats, identifying vulnerabilities, and building proactive
                defense strategies before damage occurs.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-accent-400" />
                </div>
                <span className="text-gray-300 text-lg">
                  Certified Security Professionals
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-accent-400" />
                </div>
                <span className="text-gray-300 text-lg">
                  24/7 Global Incident Response Team
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-accent-400" />
                </div>
                <span className="text-gray-300 text-lg">
                  Trusted by Leading Enterprises Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {/* Data Analysis */}
              <div className="space-y-6">
                <div className="relative">
                  <Users className="h-12 w-12 text-blue-400 mx-auto" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg"></div>
                </div>
                <div className="relative">
                  <BarChart3 className="h-12 w-12 text-green-400 mx-auto" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-lg blur-lg"></div>
                </div>
                <div className="relative">
                  <PieChart className="h-12 w-12 text-purple-400 mx-auto" />
                  <div className="absolute inset-0 bg-purple-400/20 rounded-lg blur-lg"></div>
                </div>
              </div>

              {/* Security Operations */}
              <div className="space-y-6">
                <div className="relative">
                  <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-lg blur-lg"></div>
                </div>
                <div className="relative">
                  <Database className="h-12 w-12 text-red-400 mx-auto" />
                  <div className="absolute inset-0 bg-red-400/20 rounded-lg blur-lg"></div>
                </div>
                <div className="relative">
                  <BarChart3 className="h-12 w-12 text-cyan-400 mx-auto" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-lg"></div>
                </div>
              </div>
            </div>

            {/* Central Holographic Display */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-20 h-20 border-2 border-blue-400 rounded-lg rotate-45 animate-pulse"></div>
                <div
                  className="absolute inset-2 border border-purple-400 rounded-lg rotate-12 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute inset-4 border border-green-400 rounded-lg -rotate-12 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
