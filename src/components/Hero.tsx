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
            <div className="space-y-6">
              {/* <h2 className="text-accent-400 text-xl font-semibold tracking-wide uppercase">
                CYBER TECH EXPERTS
              </h2> */}
              <div className="space-y-4">
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
