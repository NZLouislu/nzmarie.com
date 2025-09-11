import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import PropertyListings from "../components/PropertyListings";
import Qualifications from "../components/Qualifications";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Page() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      <GoogleAnalytics />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-blue-700 text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <PropertyListings />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
