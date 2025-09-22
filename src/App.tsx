import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import SecurityServices from "./components/SecurityServices";
import CaseStudies from "./components/CaseStudies";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ServiceDetailPage from "./components/ServiceDetailPage";

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
      if (pathname.startsWith("/service/")) {
        sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <SecurityServices />
      <CaseStudies />
      <Blog />
      <AboutUs />
      <Newsletter />
    </>
  );
}

function App() {
  return (
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
