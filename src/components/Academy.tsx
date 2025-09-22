import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Users, ArrowRight, GraduationCap } from "lucide-react";

const Academy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="academy" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Centered */}
        <div className="text-center mb-8.5">
          <h2 className="text-accent-400 text-xl font-semibold tracking-wide uppercase mb-4">
            CYBERSECURITY ACADEMY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional Training Programs
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Enhance your cybersecurity skills with our comprehensive training
            programs. From beginner to advanced levels, we offer hands-on
            training that prepares you for real-world security challenges.
          </p>

          {/* Academy Stats */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-secondary rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">500+</p>
                    <p className="text-gray-400 text-sm">Students Trained</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-secondary rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">95%</p>
                    <p className="text-gray-400 text-sm">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/academy")}
              className="group bg-gradient-secondary text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center space-x-3"
            >
              <GraduationCap className="h-6 w-6" />
              <span>Explore Training Programs</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
