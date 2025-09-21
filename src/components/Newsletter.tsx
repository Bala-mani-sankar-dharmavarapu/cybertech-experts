import React, { useState } from "react";
import { Mail, User } from "lucide-react";

const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-accent-400 text-xl font-semibold tracking-wide uppercase">
              CONTACT US
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Get Started with Cyber Tech Experts
            </h3>
            <div className="text-gray-300 text-lg space-y-2">
              <p>📧 Email: info@cybertechexperts.com</p>
              <p>📞 Phone: +91-XXXXXXXXXX</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Company Input */}
            <div className="mb-6">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-secondary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
