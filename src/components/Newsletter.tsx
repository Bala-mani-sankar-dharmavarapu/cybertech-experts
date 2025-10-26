import React, { useState } from "react";
import { X } from "lucide-react";
import { email, phoneNumber } from "../utils/info";

const GOOGLE_FORM_URL = "https://forms.gle/vKjXgD7a4TQwD3TW7?embedded=true";

const Newsletter: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-xl font-bold tracking-wider uppercase">
                CONTACT US
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
                  Get Started with
                </span>
                <br />
                <span className="text-cyan-400 drop-shadow-lg animate-fade-in-up hover:animate-text-glow transition-all duration-500">
                  Cyber Tech Experts
                </span>
              </h3>
              <div className="text-gray-200 text-lg space-y-2 font-light tracking-wide">
                <p>📧 Email: {email}</p>
                <p>📞 Phone: {phoneNumber}</p>
              </div>
            </div>

            {/* Contact Form Button */}
            <button
              onClick={() => {
                setIsFormOpen(true);
                setIsLoading(true);
              }}
              className="bg-gradient-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Form Dialog */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          />

          {/* Dialog */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700 flex-shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <p className="text-gray-300 mt-1">
                  We'd love to hear from you. Fill out the form below and we'll
                  respond as soon as possible.
                </p>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Google Form Iframe */}
            <div className="flex-1 bg-white relative overflow-auto">
              {/* Loader - covers the entire form area */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading form...</p>
                  </div>
                </div>
              )}

              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
                className={`w-full ${
                  isLoading ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
                style={{ height: "1800px", minHeight: "100%" }}
                onLoad={() => setTimeout(() => setIsLoading(false), 500)}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Newsletter;
