import React from "react";
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

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <SecurityServices />
        <CaseStudies />
        <Blog />
        <AboutUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
