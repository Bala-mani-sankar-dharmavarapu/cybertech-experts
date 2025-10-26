import React, { useState } from "react";
import { X } from "lucide-react";

interface ContactFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  formType?: "enroll" | "contact" | "quote" | "download";
  onSuccess?: () => void; // Callback function to execute after successful submission
}

const GOOGLE_FORM_URL = "https://forms.gle/vKjXgD7a4TQwD3TW7?embedded=true";

const ContactFormDialog: React.FC<ContactFormDialogProps> = ({
  isOpen,
  onClose,
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  formType = "contact",
  onSuccess,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when dialog opens
  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  const getFormTitle = () => {
    switch (formType) {
      case "enroll":
        return "Enroll in Academy";
      case "quote":
        return "Request a Quote";
      case "download":
        return "Download Curriculum";
      default:
        return title;
    }
  };

  const getFormSubtitle = () => {
    switch (formType) {
      case "enroll":
        return "Join our cybersecurity academy and start your journey to becoming a certified security professional.";
      case "quote":
        return "Get a personalized quote for our cybersecurity services tailored to your organization's needs.";
      case "download":
        return "Please provide your details below to download our comprehensive cybersecurity curriculum PDF.";
      default:
        return subtitle;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700 flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-white">{getFormTitle()}</h2>
            <p className="text-gray-300 mt-1">{getFormSubtitle()}</p>
          </div>
          <button
            onClick={onClose}
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
  );
};

export default ContactFormDialog;
