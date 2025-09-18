import React from "react";
import Hero from "../Components/Hero";
import WhyChooseUs from "../Components/WhyChooseUs";
import StatsSection from "../Components/StatsSection";
import Solutions from "../Components/Solutions";
import Pricing from "../Components/Pricing";

import TrustSection from "../Components/TrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <WhyChooseUs />
      <StatsSection />
      {/* ✅ Navbar se scroll yahin aayega */}
      <section id="solutions">
        <Solutions />
      </section>
      <section id="Pricing">
      <Pricing />
      </section>
      {/* <Footer /> */}
    </>
  );
}
