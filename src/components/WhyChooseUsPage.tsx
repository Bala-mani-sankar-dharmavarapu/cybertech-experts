import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  Users,
  Award,
  Clock,
  Globe,
  Lock,
  Zap,
  Target,
  Headphones,
  TrendingUp,
  Brain,
  Bug,
  Eye,
  Settings,
  BarChart3,
  Handshake,
} from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const WhyChooseUsPage: React.FC = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const coreFeatures = [
    {
      text: "Proactive Threat Detection",
      icon: Search,
      description:
        "Cyber threats evolve constantly. We monitor your networks, systems, and endpoints 24/7 to identify suspicious activity before it becomes a problem. Our team leverages advanced analytics, threat intelligence, and behavioral monitoring to anticipate attacks, mitigate risks early, and keep your organization safe from data breaches, phishing campaigns, and ransomware.",
    },
    {
      text: "AI-Powered Detection",
      icon: Brain,
      description:
        "Manual monitoring alone isn't enough. We combine human expertise with AI-driven detection tools that analyze vast amounts of data in seconds rather than days. This allows us to spot anomalies, detect unknown malware, and identify sophisticated attack patterns that traditional tools might miss. With AI-powered detection, threats are neutralized immediately, minimizing business disruption and financial impact.",
    },
    {
      text: "Fast Website Recovery",
      icon: RotateCcw,
      description:
        "A hacked website can damage both operations and reputation. Our rapid website recovery services restore affected websites quickly, ensuring business continuity and minimal downtime. Beyond restoration, we implement strong defenses and monitoring systems to prevent repeat attacks. This includes malware removal, patch management, and dark web monitoring to safeguard your brand online.",
    },
    {
      text: "Trusted Cybersecurity Experts",
      icon: Users,
      description:
        "Our team is certified and highly experienced, with CISSP, CEH, and OSCP professionals leading our operations. We don't just follow protocols—we actively engage in incident response, threat intelligence, and security audits. Clients rely on our expertise to make informed decisions, meet compliance requirements, and secure critical assets. Your security becomes our responsibility.",
    },
    {
      text: "Instant Malware & Ransomware Removal",
      icon: Bug,
      description:
        "Malware and ransomware can spread rapidly, causing data loss, system downtime, and financial damage. We act immediately to isolate, remove, and remediate threats. Our approach not only eliminates the current infection but also prevents recurrence through endpoint hardening, patching, and user education.",
    },
    {
      text: "Proactive Vulnerability Management",
      icon: Eye,
      description:
        "We don't just react to attacks; we hunt for vulnerabilities before attackers do. Through penetration testing, vulnerability assessments, and phishing simulations, we identify gaps in your systems and provide a prioritized roadmap for remediation. This proactive approach ensures you stay ahead of evolving threats and maintain a strong security posture.",
    },
    {
      text: "24/7 Support & Monitoring",
      icon: Clock,
      description:
        "Cyber threats don't follow business hours, and neither do we. Our round-the-clock monitoring and incident response services ensure your systems are constantly protected. Any anomaly is investigated immediately, and clients are notified in real time. This guarantees minimal downtime and maximum operational resilience.",
    },
    {
      text: "Customized, Business-Focused Solutions",
      icon: Settings,
      description:
        "Every business is unique, with its own infrastructure, risk profile, and compliance requirements. We provide tailored cybersecurity solutions designed specifically for your organization. Whether you need SOC-as-a-Service, endpoint protection, incident response, or compliance support, we ensure our solutions align with your business goals and budget.",
    },
    {
      text: "Measurable Results & Continuous Improvement",
      icon: BarChart3,
      description:
        "We believe in accountability and transparency. Clients receive detailed reports, KPI tracking, and actionable insights to measure the effectiveness of our services. Over time, this data-driven approach allows us to continuously improve defenses, reduce risks, and strengthen overall cybersecurity posture.",
    },
    {
      text: "Commitment to Client Success",
      icon: Handshake,
      description:
        "Cybersecurity is about more than technology—it's about trust. We partner with our clients as a strategic ally, educating employees, sharing best practices, and providing guidance on emerging threats. Our goal is to empower your team while keeping your organization safe, making you confident in your security posture every day.",
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: "Certified Expertise",
      description:
        "CISSP, CEH, and OSCP certified professionals with proven track records in enterprise security.",
    },
    {
      icon: Clock,
      title: "24/7 Protection",
      description:
        "Round-the-clock monitoring that doesn't sleep, ensuring your systems are always protected.",
    },
    {
      icon: Globe,
      title: "Comprehensive Coverage",
      description:
        "End-to-end protection covering networks, endpoints, cloud infrastructure, and applications.",
    },
    {
      icon: Lock,
      title: "Advanced Threat Intelligence",
      description:
        "Real-time threat intelligence and behavioral analytics to stay ahead of emerging threats.",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description:
        "Immediate incident response with average containment time under 15 minutes.",
    },
    {
      icon: Target,
      title: "Risk-Based Approach",
      description:
        "Customized security strategies based on your specific risk profile and business objectives.",
    },
    {
      icon: Headphones,
      title: "Dedicated Partnership",
      description:
        "Strategic cybersecurity partnership with dedicated account managers and support teams.",
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description:
        "Data-driven security improvements with clear metrics and continuous optimization.",
    },
  ];

  const stats = [
    { number: "100+", label: "Organizations Protected" },
    { number: "99.9%", label: "Threat Prevention Rate" },
    { number: "24/7", label: "Continuous Monitoring" },
    { number: "<15min", label: "Incident Response Time" },
  ];

  // Testimonials data (currently commented out in the JSX)
  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     company: "TechCorp Solutions",
  //     content:
  //       "Cyber Tech Experts saved our business from a major ransomware attack. Their proactive threat detection and rapid response prevented what could have been a devastating $2M loss. Their expertise and 24/7 monitoring give us complete confidence in our security posture.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Michael Chen",
  //     company: "E-commerce Plus",
  //     content:
  //       "The AI-powered detection and instant malware removal capabilities are outstanding. When our website was compromised, they had us back online within 2 hours with enhanced security measures. Their commitment to client success is unmatched.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     company: "FinanceFirst",
  //     content:
  //       "Their customized cybersecurity solutions and vulnerability management approach transformed our security posture. The detailed reports and continuous improvement recommendations help us stay ahead of evolving threats. Truly a strategic partner.",
  //     rating: 5,
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="text-accent-400">Cyber Tech Experts</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            At Cyber Tech Experts, we go beyond traditional cybersecurity. We
            protect, prevent, and restore—ensuring your business is safe,
            resilient, and operational at all times. Here's why organizations
            trust us for their cybersecurity needs.
          </p>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cybersecurity Solutions
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our comprehensive approach to cybersecurity combines advanced
              technology, expert knowledge, and proactive strategies to keep
              your organization secure and resilient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-accent-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent-400/20 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.text}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-accent-400">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The key differentiators that make Cyber Tech Experts the trusted
              choice for organizations seeking comprehensive cybersecurity
              protection and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-accent-400/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-accent-400/20 rounded-lg w-fit mb-4 group-hover:bg-accent-400/30 transition-colors">
                  <advantage.icon className="h-6 w-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real testimonials from organizations that have experienced the
              Cyber Tech Experts difference in protecting their business, brand,
              and clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-accent-400 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Organization with Cyber Tech Experts
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Where proactive defense, rapid response, and expert guidance meet
            measurable results. Protect your business, brand, and clients with
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactDialogOpen(true)}
              className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Protected Today
            </button>
            <button
              onClick={() => window.history.back()}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <ContactFormDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
        title="Get Protected Today"
        subtitle="Secure your organization with Cyber Tech Experts. Fill out the form below and our cybersecurity experts will contact you to discuss your protection needs."
        formType="contact"
      />
    </div>
  );
};

export default WhyChooseUsPage;
