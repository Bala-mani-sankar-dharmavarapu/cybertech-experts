import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Shield,
  Award,
  BookOpen,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const Academy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="academy" className="py-10 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 via-transparent to-green-50/5"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100/10 border border-green-200/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span className="text-green-400 font-medium text-sm uppercase tracking-wider">
              Our Core Focus
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
              Cybersecurity
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-slide-in-right hover:animate-text-glow transition-all duration-500">
              Academy
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your career with industry-leading cybersecurity training.
            From fundamentals to advanced certifications, we prepare you for the
            future of digital security.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Hands-On Training
                  </h3>
                  <p className="text-gray-400">
                    Real-world scenarios and practical labs that mirror actual
                    security challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Industry Certifications
                  </h3>
                  <p className="text-gray-400">
                    Prepare for CISSP, CEH, Security+, and other high-demand
                    certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Expert Instructors
                  </h3>
                  <p className="text-gray-400">
                    Learn from certified professionals with years of real-world
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-gray-400 text-sm">Students Trained</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <Award className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <Clock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
              <CheckCircle className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => navigate("/academy")}
            className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl hover:shadow-green-500/25"
          >
            <GraduationCap className="h-6 w-6" />
            <span>Explore Training Programs</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Start your journey to becoming a cybersecurity expert today
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academy;
