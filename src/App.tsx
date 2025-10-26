import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Academy from "./components/Academy";
import Services from "./components/Services";
import SecurityServices from "./components/SecurityServices";
import CaseStudies from "./components/CaseStudies";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ServiceDetailPage from "./components/ServiceDetailPage";
import AcademyPage from "./components/AcademyPage";
import WhyChooseUsPage from "./components/WhyChooseUsPage";
import WhatsAppButton from "./components/WhatsAppButton";
import CareerExpertDialog from "./components/CareerExpertDialog";
import SEO from "./components/SEO";

// Component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/") {
      // Restore scroll position when returning to home
      const savedScrollPosition = sessionStorage.getItem("homeScrollPosition");
      if (savedScrollPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollPosition));
        }, 100);
      }
    } else {
      // Save current scroll position when leaving home
      if (
        pathname.startsWith("/service/") ||
        pathname === "/academy" ||
        pathname === "/why-choose-us"
      ) {
        sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
}

function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CyberTech Experts",
    alternateName: "CyberTech Experts Academy",
    url: "https://cybertechexperts.org",
    logo: "https://cybertechexperts.org/cybertechexperts-logo.png",
    description:
      "Premier cybersecurity training academy offering job-ready programs in ethical hacking, penetration testing, SOC operations, and security certifications. Transform your career with expert-led, hands-on training and placement support.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 91212 21233",
      contactType: "Customer Service",
      email: "Services@cybertechexperts.org",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/cybertechexpertsofficial/about/?viewAsMember=true",
      "https://www.instagram.com/cyber_tech_experts",
    ],
    knowsAbout: [
      "Cybersecurity Training",
      "Ethical Hacking",
      "Penetration Testing",
      "SOC Operations",
      "Security Certifications",
      "OSCP",
      "CEH",
      "Career Development",
    ],
  };

  const servicesOffered = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cybersecurity Services",
    provider: {
      "@type": "Organization",
      name: "CyberTech Experts",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Phishing Simulation & Awareness",
            description:
              "Run safe, consent-first phishing campaigns and in-moment micro-training to measure vulnerability and reduce human risk.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Malware & Ransomware Simulation",
            description:
              "Safe, controlled attack simulations to test defenses and strengthen security posture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website & Brand Protection",
            description:
              "Identify and remove malicious domains with dark web monitoring and quick takedowns.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vulnerability Assessment",
            description:
              "Identify, evaluate, and remediate potential security gaps in your IT infrastructure.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Incident Response",
            description:
              "Expert teams available around the clock to detect, respond to, and mitigate cyber threats.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cybersecurity Training",
            description:
              "SOC Analyst, Application Security, and Corporate Awareness training programs.",
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="CyberTech Experts - Job-Ready Cybersecurity Training & Career Upskilling"
        description="Transform your career with job-ready cybersecurity training. Master ethical hacking, SOC operations, and penetration testing. OSCP, CEH, Security+ preparation with hands-on labs and expert mentorship. Career change and upskilling programs for IT professionals."
        keywords="cybersecurity training, job ready cybersecurity course, career change to cybersecurity, upskilling programs, SOC analyst certification, ethical hacking training, OSCP preparation, CEH certification course, penetration testing bootcamp, hands-on security labs, cybersecurity career switch, IT security training, cyber defense course, security analyst training, beginner to advanced cybersecurity"
        url="/"
        structuredData={[organizationSchema, servicesOffered]}
      />
      <Hero />
      <Academy />
      <WhyChooseUs />
      <Services />
      <SecurityServices />
      <CaseStudies />
      <AboutUs />
      <Blog />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gradient-dark">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/service/:serviceName"
                element={<ServiceDetailPage />}
              />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <CareerExpertDialog />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
