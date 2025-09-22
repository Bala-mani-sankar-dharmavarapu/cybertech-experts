import React from "react";
import { Shield, Fingerprint, Folder } from "lucide-react";
import { SecurityService } from "../types";

const SecurityServices: React.FC = () => {
  const services: SecurityService[] = [
    {
      id: "1",
      title: "Cyber Threat Intelligence",
      icon: "Shield",
    },
    {
      id: "2",
      title: "Malware Removal",
      icon: "Fingerprint",
    },
    {
      id: "3",
      title: "24/7 Online Support",
      icon: "Folder",
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      Shield,
      Fingerprint,
      Folder,
    };
    const IconComponent = icons[iconName] || Shield;
    return <IconComponent className="h-16 w-16" />;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Manage Security Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our managed security services provide comprehensive protection with
            round-the-clock monitoring, threat detection, and rapid response
            capabilities to keep your business secure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="text-center group">
              <div className="relative mb-8">
                <div className="flex justify-center">
                  <div className="p-6 text-white bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityServices;
