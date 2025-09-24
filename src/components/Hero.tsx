import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              {/* <h2 className="text-accent-400 text-xl font-semibold tracking-wide uppercase">
                CYBER TECH EXPERTS
              </h2> */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] hover:animate-text-glow transition-all duration-500">
                    STRONGER
                  </span>
                  <br />
                  <span className="text-white drop-shadow-2xl animate-fade-in-up hover:animate-text-glow transition-all duration-500">
                    SECURITY.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] hover:animate-text-glow transition-all duration-500">
                    SMARTER
                  </span>
                  <br />
                  <span className="text-white drop-shadow-2xl animate-fade-in-up hover:animate-text-glow transition-all duration-500">
                    BUSINESS.
                  </span>
                </h1>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed max-w-2xl font-light tracking-wide">
                <span className="text-blue-300 font-medium">
                  Next-Gen Cyber Defense.
                </span>{" "}
                Built for Modern Enterprises. From phishing and malware to
                advanced persistent threats, attackers are smarter than ever. At
                Cyber Tech Experts, our intelligent cybersecurity solutions are
                designed around your business needs providing adaptive, scalable
                protection that grows with you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group bg-gradient-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                <span className="group-hover:text-white transition-colors duration-300">
                  Schedule a Demo
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="text-center">
                <div className="text-xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-400">
                  Organizations Protected
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">99.9%</div>
                <div className="text-xs text-gray-400">Threat Prevention</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <img
                src="/hero-img.png"
                alt="Technology and Cybersecurity Illustration"
                className="w-full max-w-lg h-auto object-contain animate-float"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500/20 rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
