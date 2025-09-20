import React from "react";
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
  const features = [
    { text: "Quick Threat Detection", icon: Search },
    { text: "Instant Malware Removal", icon: Shield },
    { text: "Restore Hack Website", icon: RotateCcw },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl mx-4 lg:mx-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-accent-400 text-lg font-semibold tracking-wide uppercase">
                WHY CHOOSE US
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                We Protect You From Cyber Attacks
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-accent-400" />
                  </div>
                  <span className="text-gray-300 text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Hire Us
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {/* Security Analysis */}
              <div className="space-y-4">
                <div className="relative">
                  <Users className="h-12 w-12 text-blue-400 mx-auto" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg"></div>
                </div>
                <div className="relative">
                  <Gauge className="h-12 w-12 text-purple-400 mx-auto" />
                  <div className="absolute inset-0 bg-purple-400/20 rounded-lg blur-lg"></div>
                </div>
              </div>

              {/* Network Security */}
              <div className="space-y-4">
                <div className="relative">
                  <Network className="h-12 w-12 text-green-400 mx-auto" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-lg blur-lg"></div>
                </div>
                <div className="relative">
                  <Shield className="h-12 w-12 text-yellow-400 mx-auto" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-lg blur-lg"></div>
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
