import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h2 className="text-accent-400 text-lg font-semibold tracking-wide uppercase">
                CYBER TECH EXPERTS
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                STRONGER SECURITY. SMARTER BUSINESS.
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Protect your organization against phishing, malware, and modern
                cyber threats with tailored solutions from Cyber Tech Experts.
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
                className="bg-gradient-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/hero-img.png"
              alt="Technology and Cybersecurity Illustration"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
