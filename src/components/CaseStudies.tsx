import React from "react";
import { TrendingDown, Shield, Award } from "lucide-react";

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: "1",
      title: "Financial Client Success",
      description:
        "Employee phishing click rate dropped from 32% to under 5% in just 3 months after our training program.",
      icon: TrendingDown,
      metric: "32% → 5%",
      metricLabel: "Phishing Click Rate",
    },
    {
      id: "2",
      title: "SaaS Provider Protection",
      description:
        "100+ fake domains impersonating the client's brand were taken down within weeks, preventing fraud and reputation loss.",
      icon: Shield,
      metric: "100+",
      metricLabel: "Domains Takedown",
    },
  ];

  const testimonials = [
    {
      id: "1",
      quote:
        "Cyber Tech Experts transformed our employees into our strongest defense against phishing.",
      author: "CTO, FinTech Company",
    },
    {
      id: "2",
      quote:
        "Their takedown service saved our brand from multiple fraud attempts.",
      author: "Head of Security, SaaS Firm",
    },
  ];

  const getIcon = (IconComponent: React.ComponentType<any>) => {
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 text-xl font-bold tracking-wider uppercase">
            PROVEN RESULTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
              Real Impact,
            </span>
            <br />
            <span className="text-yellow-400 drop-shadow-lg animate-fade-in-up hover:animate-text-glow transition-all duration-500">
              Real Results
            </span>
          </h3>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            <span className="text-yellow-300 font-medium">
              Our clients see measurable improvements
            </span>{" "}
            in their cybersecurity posture through our comprehensive solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8 mb-4">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Icon and Metric */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-gradient-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {getIcon(study.icon)}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent-400">
                      {study.metric}
                    </div>
                    <div className="text-sm text-gray-400">
                      {study.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {study.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-white">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                  <blockquote className="text-gray-300 text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-blue-400 font-semibold not-italic">
                    – {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudies;
